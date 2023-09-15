import { KeyboardIcon } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { type Chat } from '@/api/models/chat';
import { sendMessageToOpenAI } from '@/api/services/openai-service';
import ChatBubble from '@/components/chat/chat-bubble';
import VoiceRecorder from '@/components/chat/voice-recorder';
import Button from '@/components/ui/button';
import VirtualKeyboard from '@/components/virtual-keyboard';
import * as actions from '@/stores/chat/chat-actions';
import { RootState } from '@/stores/store';
import { bindActionCreators } from '@reduxjs/toolkit';

const AskPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { addMessage } = bindActionCreators(actions, dispatch);
  const state = useSelector((state: RootState) => state.chat);

  const [message, setMessage] = useState('');
  const [assistantThinking, setAssistantThinking] = useState(false);

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    if (state.messages[0].user) {
      handleCompletion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.messages]);

  const handleCompletion = async () => {
    setAssistantThinking(true);
    const completion = await sendMessageToOpenAI(state.messages[0].message);
    setAssistantThinking(false);

    if (!completion) return;
    addMessage({
      message: completion?.content ?? '',
      user: false,
      timestamp: Date.now(),
    });
  };

  const onInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    event?.preventDefault();

    const newMessage = message.trim();

    if (newMessage.length > 0) {
      const newChat: Chat = {
        message: newMessage,
        user: true,
        timestamp: Date.now(),
      };

      addMessage(newChat);

      setMessage('');
      setKeyboardOpen(false);
    }
  };

  return (
    <section className="h-full">
      <div className="grid h-full grid-flow-row grid-cols-3 gap-4">
        {/* Chat interface */}
        <div className="col-span-2 h-[82vh] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex w-full flex-col-reverse gap-6 overflow-y-scroll px-6 py-4">
              {assistantThinking ? (
                <ChatBubble
                  message={{
                    message: t('assistant_thinking'),
                    user: false,
                    timestamp: Date.now(),
                  }}
                />
              ) : null}

              {state.messages.map((message, index) => (
                <ChatBubble key={index} message={message} />
              ))}
            </div>

            <div>
              <form
                onSubmit={handleSendMessage}
                className="flex flex-row justify-between gap-4 px-6 py-4"
              >
                <div className="flex grow items-center rounded-full bg-slate-900/60">
                  <input
                    type="text"
                    placeholder={t('chat_placeholder')}
                    value={message}
                    onChange={onInputChanged}
                    className="h-full w-full rounded-l-full bg-transparent pl-6 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setKeyboardOpen(!keyboardOpen)}
                  >
                    <KeyboardIcon className="mr-6 text-slate-400" />
                  </button>
                </div>
                <Button
                  type="submit"
                  variant="defaultGradient2"
                  className="h-14 w-14 rounded-full p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-[2px] h-6 w-6"
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </Button>
              </form>

              {keyboardOpen ? (
                <VirtualKeyboard
                  onChange={setMessage}
                  onEnter={handleSendMessage}
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Tap to speak */}
        <div className="col-span-1 h-[82vh] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 px-6 py-4 shadow-xl">
          <VoiceRecorder />
        </div>
      </div>
    </section>
  );
};

export default AskPage;
