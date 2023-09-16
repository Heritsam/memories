import { ChevronDown, KeyboardIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { type Chat } from '@/api/models/chat';
import ChatBubble from '@/components/chat/chat-bubble';
import VoiceRecorder from '@/components/chat/voice-recorder';
import Button from '@/components/ui/button';
import VirtualKeyboard from '@/components/virtual-keyboard';
import useChat from '@/stores/chat/use-chat';

const AskPage = () => {
  const { t } = useTranslation();

  const { messages, addMessage, currentReply, assistantWriting } = useChat();

  const [input, setInput] = useState('');

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const handleSendMessage = () => {
    event?.preventDefault();

    const newMessage = input.trim();

    if (newMessage.length > 0) {
      const newChat: Chat = {
        message: newMessage,
        user: true,
        timestamp: Date.now(),
      };

      addMessage(newChat);

      setInput('');
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
              {assistantWriting ? (
                <ChatBubble
                  message={{
                    message: currentReply,
                    user: false,
                    timestamp: Date.now(),
                  }}
                />
              ) : null}

              {messages.map((message, index) => (
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
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="h-full w-full rounded-l-full bg-transparent pl-6 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setKeyboardOpen(!keyboardOpen)}
                  >
                    {keyboardOpen ? (
                      <ChevronDown className="mr-6 text-slate-400" />
                    ) : null}

                    {!keyboardOpen ? (
                      <KeyboardIcon className="mr-6 text-slate-400" />
                    ) : null}
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
                  onChange={setInput}
                  onEnter={handleSendMessage}
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Tap to speak */}
        <div className="col-span-1 h-[82vh] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 px-6 py-4 shadow-xl">
          <VoiceRecorder addMessage={addMessage} />
        </div>
      </div>
    </section>
  );
};

export default AskPage;
