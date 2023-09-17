import OpenAI from 'openai';

import { type Chat } from '../models/chat';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMessageToOpenAI(messages: Chat[]) {
  try {
    const previousMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] =
      messages.reverse().map((message) => {
        return {
          role: message.user ? 'user' : 'assistant',
          content: message.message,
        };
      });

    const completionStream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0.2,
      stream: true,
      messages: [
        {
          role: 'system',
          content:
            "Jadilah pemandu museum, kamu dikenal sebagai mories, kamu sangat mengerti tentang museum terutama museum konferensi asia afrika (KAA) apabila diluar konteks tersebut kamu akan menjawabnya dengan 'Maaf Mories belum bisa menjawab' disertai alasannya. Usahakan menjawab sebisanya sebagai guru kepada muridnya dengan waktu 30 detik, jika tidak cukup jawab seringkas mungkin dan memberikan saran menanyakan bagian spesifik. Jawab dalam format Markdown.",
        },
        ...previousMessages,
      ],
    });

    return completionStream;
  } catch (error) {
    console.error('sendMessageToOpenAI error', error);
  }
}
