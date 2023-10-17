import { useState } from 'react';

import { type Chat } from '@/api/models/chat';
import { sendMessageToOpenAI } from '@/api/services/openai-service';
import { playElevenlabsAudio } from '@/api/services/elevenlabs-service';
import { scrapeImage } from '@/api/services/scraper-service';
import { useTranslation } from 'react-i18next';

const useChat = () => {
  const { t } = useTranslation();

  const initialState: Chat[] = [
    {
      message: t('mories_hello'),
      user: false,
      timestamp: new Date().getTime(),
    },
  ];

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

      const completion = await sendMessageToOpenAI(
        [message, ...messages.slice(0, messages.length - 1)],
        t('mories_prompt')
      );

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
        images: withImage
          ? [
              'https://backpanel.kemlu.go.id/sites/pusat/PublishingImages/Tentang%20Kami/Museum%20Konferensi%20Asia%20Afrika_jpg.jpg',
            ]
          : [],
      };

      setMessages((prevMessages) => [reply, ...prevMessages]);
      setCurrentReply('~');
      await playElevenlabsAudio(localCurrentReply);
      setCurrentReply('');
      setAssistantWriting(false);
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
