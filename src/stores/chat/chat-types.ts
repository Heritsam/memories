import { Chat } from '@/infrastructure/models/chat';

export interface ChatState {
  messages: Chat[];
}

export enum ChatActionType {
  ADD_MESSAGE = 'add_message',
}

interface AddMessageAction {
  type: ChatActionType.ADD_MESSAGE;
  payload: Chat;
}

interface NoAction {
  type: '';
}

export type ChatAction = AddMessageAction | NoAction;
