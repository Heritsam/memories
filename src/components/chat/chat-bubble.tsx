import moment from 'moment';

import { Chat } from '@/infrastructure/models/chat';

type Props = {
  message: Chat;
};

const ChatBubble = ({ message: chat }: Props) => {
  if (chat.user) {
    return (
      <div className='flex w-full flex-row justify-end'>
        <div className='ml-24 text-right'>
          <div className='rounded-t-2xl rounded-bl-2xl rounded-br-sm bg-gradient-to-br from-sky-500 to-sky-600 px-6 py-4'>
            {chat.message}
          </div>
          <span className='mr-2 text-xs font-light text-slate-300'>
            {moment.unix(chat.timestamp / 1000).format('HH:mm')}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex w-full flex-row justify-start'>
      <div className='mr-24 text-left'>
        <div className='rounded-t-2xl rounded-bl-sm rounded-br-2xl bg-slate-600 px-6 py-4'>
          {chat.message}
        </div>
        <span className='ml-2 text-xs font-light text-slate-300'>
          {moment.unix(chat.timestamp / 1000).format('HH:mm')}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;