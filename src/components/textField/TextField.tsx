import React, {ChangeEvent, useEffect, useRef} from 'react';
import "./TextField.scss";

type Props = {
  value: string,
  onValueChange: Function,
  onClick: Function
}

const TextField = ({
  value,
  onValueChange,
  onClick
}: Props) => {

  const textField: any = useRef(null);

  useEffect(() => {
    AutoGrowTextArea(textField.current)
  }, [value]);

  const AutoGrowTextArea = (textField: HTMLElement) => {
    textField.style.height = 'auto';
    textField.style.height = textField.scrollHeight + "px";
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange(e.target.value);
    AutoGrowTextArea(e.target);
  };

  return (
    <div className="TextField">
      <textarea
        ref={textField}
        value={value}
        onChange={(e) => {onChange(e)}}
        onClick={() => onClick()}
      />
    </div>
  );
};

export default TextField;
