import { useTranslation } from 'react-i18next';

import { type Chat } from '@/api/models/chat';
import { cn } from '@/lib/utils';
import useVoiceRecorder from '@/stores/voice/use-voice-recorder';

import microphone from '../../assets/icons/microphone.svg';
import Button from '../ui/button';

type Props = {
  addMessage: (message: Chat) => void;
  disabled?: boolean;
};

const VoiceRecorder = ({ addMessage, disabled }: Props) => {
  const { t } = useTranslation();
  const {
    permission,
    recordingStatus,
    startRecording,
    stopRecording,
    getMicrophonePermission,
  } = useVoiceRecorder({ addMessage });
  const startRecordingStyle = cn(
    'rounded-full bg-gradient-to-br p-8 shadow-lg transition-all hover:shadow-md',
    disabled ? 'from-slate-300 to-slate-500' : 'from-sky-500 to-indigo-500',
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      {!permission ? (
        <>
          <Button onClick={getMicrophonePermission} variant="secondary">
            {t('configure_microphone')}
          </Button>

          <p className="-mt-2 text-center text-sm font-medium text-slate-300/80">
            {t('ask_microphone_permission')}
          </p>
        </>
      ) : null}

      {permission && recordingStatus === 'inactive' ? (
        <>
          <button
            disabled={disabled}
            type="button"
            title="mic-start-button"
            onClick={startRecording}
            className={startRecordingStyle}
          >
            <img src={microphone} alt="microphone" />
          </button>

          <p className="text-center text-2xl font-bold">{t('tap_to_speak')}</p>

          <p className="text-center text-sm font-medium text-slate-300/80">
            {t('tap_to_speak_description')}
          </p>
        </>
      ) : null}

      {recordingStatus === 'recording' ? (
        <>
          <button
            type="button"
            title="mic-stop-button"
            onClick={stopRecording}
            className="rounded-full bg-gradient-to-br from-yellow-500 to-pink-500 p-8 shadow-lg transition-all hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-12 w-12"
            >
              <path
                fillRule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <p className="text-2xl font-bold">{t('listening')}</p>
        </>
      ) : null}

      {recordingStatus === 'transcribing' ? (
        <p className="text-center text-2xl font-bold">{t('transcribing')}</p>
      ) : null}
    </div>
  );
};

export default VoiceRecorder;
// audio recording reference: https://blog.logrocket.com/how-to-create-video-audio-recorder-react/
