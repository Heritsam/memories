import axios from 'axios';

const voiceId = 'MF3mGyEYCl7XYWbV9V6O';
const modelId = 'eleven_multilingual_v2';
const voiceSettings = {
  stability: 0,
  similarity_boost: 0,
  style: 0,
  use_speaker_boost: true,
};

export async function playElevenlabsAudio(text: string) {
  try {
    const baseUrl = 'https://api.elevenlabs.io/v1/text-to-speech';
    const headers = {
      'Content-Type': 'application/json',
      'xi-api-key': import.meta.env.VITE_ELEVENLABS_API_KEY,
    };

    const requestBody = {
      text,
      model_id: modelId,
      voice_settings: voiceSettings,
    };

    const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
      headers,
      responseType: 'blob',
    });

    console.log('responsee', response.status);

    if (response.status === 200) {
      const audio = new Audio(URL.createObjectURL(response.data));
      audio.play();
    } else {
      console.error('Error: Unable to stream audio.');
    }
  } catch (error) {
    console.error('textToSpeech error', error);
    throw error;
  }
}
