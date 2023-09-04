import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { type Chat } from '@/infrastructure/models/chat';
import * as actions from '@/stores/chat/chat-actions';
import { bindActionCreators } from '@reduxjs/toolkit';

const mimeType = 'audio/webm';

type RecordingStatus = 'recording' | 'inactive' | 'transcribing';

const useVoiceRecorder = () => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>('inactive');
  const mediaRecorder = useRef<MediaRecorder>();

  const dispatch = useDispatch();
  const { addMessage } = bindActionCreators(actions, dispatch);

  const getMicrophonePermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err);
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.');
    }
  };

  const startRecording = async () => {
    if (!permission) {
      await getMicrophonePermission();
    }

    if (!stream) {
      console.log('no stream');
      return;
    }

    setRecordingStatus('recording');

    const media = new MediaRecorder(stream, { mimeType });

    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;

    //invokes the start method to start the recording process
    mediaRecorder.current.start();

    const localAudioChunks: Blob[] = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    if (mediaRecorder.current === undefined) {
      console.log('no media recorder instance');
      return;
    }

    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });

      setAudioChunks([]);
      transcribeAudio(audioBlob);
    };
  };

  const transcribeAudio = async (audio: Blob) => {
    if (!audio) return;

    setRecordingStatus('transcribing');

    try {
      const formData = new FormData();

      formData.append('file', new File([audio], 'audio.webm', { type: mimeType }));
      formData.append('model', 'whisper-1');

      const result = await axios.post(
        'https://api.openai.com/v1/audio/transcriptions',
        formData,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      const message: string = result.data.text.trim();

      const newChat: Chat = {
        message: message,
        user: true,
        timestamp: Date.now(),
      };

      addMessage(newChat);
    } catch (error) {
      console.error('transcribeAudio error', error);
    }

    setRecordingStatus('inactive');
  };

  return {
    permission,
    getMicrophonePermission,
    recordingStatus,
    startRecording,
    stopRecording,
  };
};

export default useVoiceRecorder;