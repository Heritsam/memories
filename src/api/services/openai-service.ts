import OpenAI from 'openai';

import { type Chat } from '../models/chat';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMessageToOpenAI(messages: Chat[], prompt: string) {
  try {
    const previousMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] =
      messages.reverse().map((message) => {
        return {
          role: message.user ? 'user' : 'assistant',
          content: message.message,
        };
      });

    const completionStream = await openai.chat.completions.create({
      model: 'gpt-4',
      temperature: 0.2,
      stream: true,
      messages: [
        {
          role: 'system',
          content: prompt,
        },
        ...previousMessages,
      ],
    });

    return completionStream;
  } catch (error) {
    console.error('sendMessageToOpenAI error', error);
  }
}
