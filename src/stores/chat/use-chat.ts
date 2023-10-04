import { useState } from 'react';

import { type Chat } from '@/api/models/chat';
import { sendMessageToOpenAI } from '@/api/services/openai-service';
import { playElevenlabsAudio } from '@/api/services/elevenlabs-service';
import { scrapeImage } from '@/api/services/scraper-service';

const initialState: Chat[] = [
  {
    message:
      'Halo! Saya **Mories**! Selamat datang di Museum Konferensi Asia Afrika! Apa yang ingin kakak ketahui tentang museum ini?',
    user: false,
    timestamp: new Date().getTime(),
  },
];

const useChat = () => {
  const [messages, setMessages] = useState<Chat[]>(initialState);
  const [assistantWriting, setAssistantWriting] = useState(false);
  const [currentReply, setCurrentReply] = useState('');
  const [withImage, setWithImage] = useState(false);
  const [withVideo, setWithVideo] = useState(false);

  const toggleImage = () => {
    setWithImage((prev) => !prev);
  };

  const toggleVideo = () => {
    setWithVideo((prev) => !prev);
  };

  const addMessage = async (message: Chat) => {
    setMessages((prevMessages) => [message, ...prevMessages]);

    if (withImage) {
      await scrapeImage(message.message);
    }

    if (message.user) {
      setAssistantWriting(true);

      const completion = await sendMessageToOpenAI([
        message,
        ...messages.slice(0, messages.length - 1),
      ]);

      if (!completion) return;

      let localCurrentReply = '';

      for await (const part of completion) {
        localCurrentReply += part.choices[0]?.delta?.content ?? '';
        setCurrentReply(
          (prev) => prev + (part.choices[0]?.delta?.content ?? '')
        );
      }

      const reply: Chat = {
        message: localCurrentReply,
        user: false,
        timestamp: Date.now(),
      };

      await playElevenlabsAudio(localCurrentReply);
      setMessages((prevMessages) => [reply, ...prevMessages]);

      setAssistantWriting(false);
      setCurrentReply('');
    }
  };

  return {
    messages,
    addMessage,
    assistantWriting,
    currentReply,
    withImage,
    withVideo,
    toggleImage,
    toggleVideo,
  };
};

export default useChat;
