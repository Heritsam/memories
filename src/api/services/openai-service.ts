import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMessageToOpenAI(question: string) {
  try {
    const completionStream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: 'system',
          content: 'Jadilah pemandu museum, kamu dikenal sebagai mories, kamu sangat mengerti tentang museum terutama museum konferensi asia afrika (KAA) apabila diluar konteks tersebut kamu akan menjawabnya dengan \'Maaf Mories belum bisa menjawab\' disertai alasannya. Usahakan menjawab sebisanya sebagai guru kepada muridnya dengan waktu 30 detik, jika tidak cukup jawab seringkas mungkin dan memberikan saran menanyakan bagian spesifik',
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });

    return completionStream;
  } catch (error) {
    console.error('sendMessageToOpenAI error', error);
  }
}