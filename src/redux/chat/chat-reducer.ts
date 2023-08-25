import { ChatAction, ChatActionType, type ChatState } from './chat-types';

const initialState: ChatState = {
  messages: [
    {
      message: 'Konferensi Asia Afrika diadakan pada tanggal 18 hingga 24 April 1955. Pertemuan ini berlangsung selama tujuh hari di kota Bandung, Indonesia. Tanggal tersebut menjadi momen penting dalam sejarah hubungan internasional, di mana pemimpin dan delegasi dari negara-negara Asia dan Afrika berkumpul untuk berdiskusi dan merumuskan prinsip-prinsip penting yang mengarah pada Deklarasi Lima Prinsip Bandung.',
      user: false,
      timestamp: Date.parse('2023-08-25T12:02:10.000Z'),
    },
    {
      message: 'Kapan Konferensi Asia Afrika diadakan?',
      user: true,
      timestamp: Date.parse('2023-08-25T12:02:00.000Z'),
    },
    {
      message: 'Konferensi Asia Afrika adalah sebuah pertemuan internasional yang bersejarah yang diadakan pada tahun 1955 di Bandung, Indonesia. Pertemuan ini merupakan forum penting bagi para pemimpin dan delegasi dari negara-negara Asia dan Afrika untuk berdiskusi tentang isu-isu global, kerja sama regional, dan perjuangan melawan kolonialisme serta imperialisme. Konferensi ini memiliki tujuan utama untuk mempromosikan solidaritas, kerja sama, dan pemajuan kedaulatan nasional di antara negara-negara tersebut.',
      user: false,
      timestamp: Date.parse('2023-08-25T12:01:10.000Z'),
    },
    {
      message: 'Apa itu Konferensi Asia Afrika?',
      user: true,
      timestamp: Date.parse('2023-08-25T12:01:00.000Z'),
    },
    {
      message: 'Halo! Selamat datang di Museum Konferensi Asia Afrika, saya Mories, pemandu wisata virtual Anda. Jika Anda tertarik untuk mengetahui lebih banyak tentang Konferensi Asia Afrika, silakan tanyakan lebih lanjut! Saya di sini untuk membantu Anda menjawab pertanyaan dan memberikan informasi yang relevan.',
      user: false,
      timestamp: Date.parse('2023-08-25T12:00:10.000Z'),
    },
    {
      message: 'Haloo',
      user: true,
      timestamp: Date.parse('2023-08-25T12:00:00.000Z'),
    },
  ],
};

const reducer = (state: ChatState = initialState, action: ChatAction): ChatState => {
  switch (action.type) {
    case ChatActionType.ADD_MESSAGE:
      return {
        messages: [action.payload, ...state.messages],
      };
    default:
      return state;
  }
};

export default reducer;