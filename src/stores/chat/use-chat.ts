import { useState } from 'react';

import { type Chat } from '@/api/models/chat';
import { sendMessageToOpenAI } from '@/api/services/openai-service';

const initialState: Chat[] = [
  {
    message:
      'Halo! Saya **Mories**! Selamat datang di Museum Konferensi Asia Afrika! Apa yang ingin kamu ketahui tentang museum ini?',
    user: false,
    timestamp: new Date().getTime(),
  },
];

const useChat = () => {
  const [messages, setMessages] = useState<Chat[]>(initialState);
  const [assistantWriting, setAssistantWriting] = useState(false);
  const [currentReply, setCurrentReply] = useState('');

  const addMessage = async (message: Chat) => {
    setMessages((prevMessages) => [message, ...prevMessages]);

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
  };
};

export default useChat;
