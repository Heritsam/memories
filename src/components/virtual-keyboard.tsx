import 'react-simple-keyboard/build/css/index.css';

import { MutableRefObject, useState } from 'react';
import Keyboard from 'react-simple-keyboard';

type Props = {
  onChange: (input: string) => void;
  onEnter?: () => void;
  keyboardRef?: MutableRefObject<typeof Keyboard>;
};

const VirtualKeyboard = ({ onChange, onEnter }: Props) => {
  const [layoutName, setLayoutName] = useState('default');

  const onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
    }

    if (button === '{enter}') {
      onEnter?.();
    }
  };

  return (
    <div className="text-slate-900">
      <Keyboard
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
        theme="hg-theme-default hg-layout-default h-[250px]"
      />
    </div>
  );
};

export default VirtualKeyboard;
