import axios from 'axios';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Chat } from '@/infrastructure/models/chat';
import * as actions from '@/stores/chat/chat-actions';
import { bindActionCreators } from '@reduxjs/toolkit';

import microphone from '../../assets/icons/microphone.svg';
import Button from '../ui/button';

const mimeType = 'audio/webm';

type RecordingStatus = 'recording' | 'inactive' | 'transcribing';

const VoiceRecorder = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { addMessage } = bindActionCreators(actions, dispatch);

  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream>();
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>('inactive');
  const mediaRecorder = useRef<MediaRecorder>();
  
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

      const message = result.data.text.trim();

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

  return (
    <div className='flex h-full flex-col items-center justify-center gap-6'>
      {!permission ? (
        <>
          <Button onClick={getMicrophonePermission} variant='secondary'>
            {t('configure_microphone')}
          </Button>

          <p className='-mt-2 text-center text-sm font-medium text-slate-300/80'>
            {t('ask_microphone_permission')}
          </p>
        </>
      ) : null}

      {permission && recordingStatus === 'inactive' ? (
        <>
          <button onClick={startRecording} className='rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 p-8 shadow-lg transition-all hover:shadow-md'>
            <img src={microphone} />
          </button>

          <p className='text-2xl font-bold'>{t('tap_to_speak')}</p>

          <p className='text-center text-sm font-medium text-slate-300/80'>
            {t('tap_to_speak_description')}
          </p>
        </>
      ) : null}

      {recordingStatus === 'recording' ? (
        <>
          <button onClick={stopRecording} className='rounded-full bg-gradient-to-br from-yellow-500 to-pink-500 p-8 shadow-lg transition-all hover:shadow-md'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-12 w-12'>
              <path fillRule='evenodd' d='M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z' clipRule='evenodd' />
            </svg>
          </button>

          <p className='text-2xl font-bold'>{t('listening')}</p>
        </>
      ) : null}

      {recordingStatus === 'transcribing' ? (
        <p className='text-center text-2xl font-bold'>{t('transcribing')}</p>
      ) : null}
    </div>
  );
};

export default VoiceRecorder;
// audio recording reference: https://blog.logrocket.com/how-to-create-video-audio-recorder-react/