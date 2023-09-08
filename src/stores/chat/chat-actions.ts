import { Chat } from '@/api/models/chat';
import { Dispatch } from '@reduxjs/toolkit';

import { type ChatAction, ChatActionType } from './chat-types';

export const addMessage = (message: Chat) => {
  return async (dispatch: Dispatch<ChatAction>) => {
    dispatch({
      type: ChatActionType.ADD_MESSAGE,
      payload: message,
    });
  };
};