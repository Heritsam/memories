import { ChatAction, ChatActionType, type ChatState } from './chat-types';

const initialState: ChatState = {
  messages: [
    {
      message: 'Hello! Selamat datang di Museum Konferensi Asia Afrika! Apa yang ingin kamu ketahui tentang museum ini?',
      user: false,
      timestamp: new Date().getTime(),
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