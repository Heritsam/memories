import { ChevronDown, KeyboardIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ChatBubble from '@/components/chat/chat-bubble';
import VoiceRecorder from '@/components/chat/voice-recorder';
import Button from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import VirtualKeyboard from '@/components/virtual-keyboard';
import useChat from '@/stores/chat/use-chat';

const AskPage = () => {
  const { t } = useTranslation();

  const [input, setInput] = useState('');
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const {
    messages,
    addMessage,
    currentReply,
    assistantWriting,
    withImage,
    toggleImage,
  } = useChat();

  const handleSendMessage = () => {
    event?.preventDefault();

    const newMessage = input.trim();

    if (newMessage.length > 0) {
      addMessage({
        message: newMessage,
        user: true,
        timestamp: Date.now(),
      });
      setInput('');
      setKeyboardOpen(false);
    }
  };

  const buildAssistantWritingMessage = () => {
    if (!assistantWriting) {
      return;
    }

    if (currentReply.trim() === '~') {
      return <></>;
    }

    if (currentReply.trim() === '') {
      return (
        <ChatBubble
          message={{
            message: t('assistant_thinking'),
            user: false,
            timestamp: Date.now(),
          }}
        />
      );
    } else {
      return (
        <ChatBubble
          message={{
            message: currentReply,
            user: false,
            timestamp: Date.now(),
          }}
        />
      );
    }
  };

  return (
    <section className="h-full">
      <div className="grid h-full grid-flow-row grid-cols-3 gap-4">
        {/* Chat interface */}
        <div className="col-span-2 h-[82vh] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 shadow-xl">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex w-full flex-col-reverse gap-6 overflow-y-scroll px-6 py-4">
              {buildAssistantWritingMessage()}
              {messages.map((message, index) =>
                index === messages.length - 1 ? (
                  <ChatBubble
                    key={index}
                    message={{
                      message: t('mories_hello'),
                      user: false,
                      timestamp: new Date().getTime(),
                    }}
                  />
                ) : (
                  <ChatBubble key={index} message={message} />
                )
              )}
            </div>

            <div>
              <div className="ml-2 flex flex-row gap-4 px-6 pt-4">
                <div className="flex flex-row items-center gap-2">
                  <Checkbox
                    id="withImage"
                    checked={withImage}
                    onCheckedChange={toggleImage}
                  />
                  <label
                    htmlFor="withImage"
                    className="text-sm font-medium text-slate-300"
                  >
                    {t('with_image')}
                  </label>
                </div>
              </div>
              <form
                onSubmit={handleSendMessage}
                className="flex flex-row justify-between gap-4 px-6 pb-4 pt-3"
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
                    ) : (
                      <KeyboardIcon className="mr-6 text-slate-400" />
                    )}
                  </button>
                </div>
                <Button
                  type="submit"
                  variant="defaultGradient2"
                  className="h-14 w-14 rounded-full p-2"
                  disabled={assistantWriting}
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
          <VoiceRecorder addMessage={addMessage} disabled={assistantWriting} />
        </div>
      </div>
    </section>
  );
};

export default AskPage;
