import moment from 'moment';

import { Chat } from '@/infrastructure/models/chat';

type Props = {
  message: Chat;
};

const ChatBubble = ({ message: chat }: Props) => {
  if (chat.user) {
    return (
      <div className='flex flex-row justify-end w-full'>
        <div className='w-max-1/2 ml-24 text-right'>
          <div className='px-6 py-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm bg-gradient-to-br from-sky-500 to-sky-600'>
            {chat.message}
          </div>
          <span className='text-xs text-slate-300 font-light mr-2'>
            {moment.unix(chat.timestamp / 1000).format('HH:mm')}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-row justify-start w-full'>
      <div className='w-max-1/2 mr-24 text-left'>
        <div className='px-6 py-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-sm rounded-br-2xl bg-slate-600'>
          {chat.message}
        </div>
        <span className='text-xs text-slate-300 font-light ml-2'>
          {moment.unix(chat.timestamp / 1000).format('HH:mm')}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;