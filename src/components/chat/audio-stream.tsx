import { useState } from 'react';
import axios from 'axios';

type VoiceSettings = {
  stability: number;
  similarity_boost: number;
};

type AudioStreamProps = {
  voiceId: string;
  text: string;
  apiKey: string;
  modelId: string;
  voiceSettings: VoiceSettings;
};

const AudioStream = ({
  voiceId,
  text,
  apiKey,
  modelId,
  voiceSettings,
}: AudioStreamProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const startStreaming = async () => {
    setLoading(true);
    setError('');

    const baseUrl = 'https://api.elevenlabs.io/v1/text-to-speech';
    const headers = {
      'Content-Type': 'application/json',
      'xi-api-key': apiKey,
    };

    const requestBody = {
      text,
      model_id: modelId,
      voice_settings: voiceSettings,
    };

    try {
      const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
        headers,
        responseType: 'blob',
      });

      if (response.status === 200) {
        const audio = new Audio(URL.createObjectURL(response.data));
        audio.play();
      } else {
        setError('Error: Unable to stream audio.');
      }
    } catch (error) {
      setError('Error: Unable to stream audio.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={startStreaming} disabled={loading}>
        Start Streaming
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AudioStream;
