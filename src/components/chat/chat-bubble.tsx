type Props = {
  message: string;
  user?: boolean;
};

const ChatBubble = (props: Props) => {
  if (props.user) {
    return (
      <div className='flex flex-row justify-end w-full'>
        <div className='w-max-1/2 ml-24 px-6 py-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm text-right bg-gradient-to-br from-sky-500 to-sky-600'>
          {props.message}
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-row justify-start w-full'>
      <div className='w-max-1/2 mr-24 px-6 py-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-sm rounded-br-2xl text-left bg-slate-600'>
        Halo! Selamat datang di Museum Konferensi Asia Afrika, saya Mories, pemandu wisata virtual Anda. Jika Anda tertarik untuk mengetahui lebih banyak tentang Konferensi Asia Afrika, silakan tanyakan lebih lanjut! Saya di sini untuk membantu Anda menjawab pertanyaan dan memberikan informasi yang relevan.
      </div>
    </div>
  );
};

export default ChatBubble;