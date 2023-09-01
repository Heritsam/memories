import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import ChatBubble from '@/components/chat/chat-bubble';
import Button from '@/components/ui/button';
import { type Chat } from '@/infrastructure/models/chat';
import * as actions from '@/redux/chat/chat-actions';
import { RootState } from '@/redux/store';
import { bindActionCreators } from '@reduxjs/toolkit';

import microphone from '../assets/icons/microphone.svg';

const AskPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { addMessage } = bindActionCreators(actions, dispatch);
  const state = useSelector((state: RootState) => state.chat);

  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    event?.preventDefault();

    if (message.length > 0) {
      const newChat: Chat = {
        message,
        user: true,
        timestamp: Date.now(),
      };

      addMessage(newChat);

      setMessage('');
    }
  };

  return (
    <section className='h-full'>
      <div className='grid h-full grid-flow-row grid-cols-3 gap-4'>

        {/* Chat interface */}
        <div className='col-span-2 h-[82vh] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl'>
          <div className='flex h-full w-full flex-col justify-between'>
            <div className='flex w-full flex-col-reverse gap-6 overflow-y-scroll px-6 py-4'>
              {state.messages.map((message, index) => (
                <ChatBubble key={index} message={message} />
              ))}
            </div>

            <form onSubmit={handleSendMessage} className='flex flex-row justify-between gap-4 px-6 py-4'>
              <input
                type='text'
                placeholder={t('chat_placeholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='grow rounded-full bg-slate-900/60 px-6 outline-none'
              />
              <Button onClick={handleSendMessage} variant='defaultGradient2' className='h-14 w-14 rounded-full p-2'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='ml-[2px] h-6 w-6'>
                  <path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z' />
                </svg>
              </Button>
            </form>
          </div>
        </div>

        {/* Tap to speak */}
        <div className='col-span-1 h-[82vh] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 px-6 py-4 shadow-xl'>
          <div className='flex h-full flex-col items-center justify-center gap-6'>
            <button className='rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 p-8 shadow-lg hover:shadow-md'>
              <img src={microphone} />
            </button>

            <p className='text-2xl font-bold'>{t('tap_to_speak')}</p>

            <p className='text-center text-sm font-medium text-slate-300/80'>
              {t('tap_to_speak_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskPage;