import { Chat } from '@/infrastructure/models/chat';
import { Dispatch } from '@reduxjs/toolkit';

import { type ChatAction, ChatActionType } from './chat-types';

export const addMessage = (message: Chat) => {
  return (dispatch: Dispatch<ChatAction>) => {
    dispatch({
      type: ChatActionType.ADD_MESSAGE,
      payload: message,
    });
  };
};