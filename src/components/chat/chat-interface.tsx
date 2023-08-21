import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ChatBubble from './chat-bubble';
import Button from '../ui/button';

interface ChatStep {
  message: string;
  user?: boolean;
}

const ChatInterface = () => {
  const { t } = useTranslation();

  const [chatSteps, setChatSteps] = useState<ChatStep[]>([
    {
      message: 'Konferensi Asia Afrika diadakan pada tanggal 18 hingga 24 April 1955. Pertemuan ini berlangsung selama tujuh hari di kota Bandung, Indonesia. Tanggal tersebut menjadi momen penting dalam sejarah hubungan internasional, di mana pemimpin dan delegasi dari negara-negara Asia dan Afrika berkumpul untuk berdiskusi dan merumuskan prinsip-prinsip penting yang mengarah pada Deklarasi Lima Prinsip Bandung.',
      user: false,
    },
    {
      message: 'Kapan Konferensi Asia Afrika diadakan?',
      user: true,
    },
    {
      message: 'Konferensi Asia Afrika adalah sebuah pertemuan internasional yang bersejarah yang diadakan pada tahun 1955 di Bandung, Indonesia. Pertemuan ini merupakan forum penting bagi para pemimpin dan delegasi dari negara-negara Asia dan Afrika untuk berdiskusi tentang isu-isu global, kerja sama regional, dan perjuangan melawan kolonialisme serta imperialisme. Konferensi ini memiliki tujuan utama untuk mempromosikan solidaritas, kerja sama, dan pemajuan kedaulatan nasional di antara negara-negara tersebut.',
      user: false,
    },
    {
      message: 'Apa itu Konferensi Asia Afrika?',
      user: true,
    },
    {
      message: 'Halo! Selamat datang di Museum Konferensi Asia Afrika, saya Mories, pemandu wisata virtual Anda. Jika Anda tertarik untuk mengetahui lebih banyak tentang Konferensi Asia Afrika, silakan tanyakan lebih lanjut! Saya di sini untuk membantu Anda menjawab pertanyaan dan memberikan informasi yang relevan.',
      user: false,
    },
    {
      message: 'Haloo',
      user: true,
    },
  ]);

  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    event?.preventDefault();

    if (message === '') return;

    const newChatStep: ChatStep[] = [
      {
        message, user: true,
      },
      ...chatSteps,
    ];

    setMessage('');
    setChatSteps(newChatStep);
  };

  return (
    <div className='flex flex-col justify-between h-full w-full'>
      <div className='flex flex-col-reverse gap-6 w-full overflow-y-scroll py-4 px-6'>
        {chatSteps.map((step, index) => (
          <ChatBubble key={index} message={step.message} user={step.user} />
        ))}
      </div>

      <form onSubmit={handleSendMessage} className='flex flex-row justify-between gap-4 py-4 px-6'>
        <input
          type='text'
          placeholder={t('chat_placeholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='grow bg-slate-900/60 rounded-full outline-none px-6'
        />
        <Button onClick={handleSendMessage} variant='defaultGradient2' className='w-14 h-14 p-2 rounded-full'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6 ml-[2px]'>
            <path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z' />
          </svg>
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;