import React, { ChangeEvent, useEffect, useRef } from "react";
import "./TextField.scss";
import DeleteButton from "../shared/deleteButton/DeleteButton";

type Props = {
  value: string;
  onValueChange: Function;
  onClick: Function;
  clearClick: Function;
};

const TextField = ({ value, onValueChange, onClick, clearClick }: Props) => {
  const textFieldRef: any = useRef(null);

  const AutoGrowTextArea = (textField: HTMLElement) => {
    textField.style.height = "auto";
    textField.style.height = `${textField.scrollHeight}px`;
  };

  useEffect(() => {
    AutoGrowTextArea(textFieldRef.current);
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange(e.target.value);
    AutoGrowTextArea(e.target);
  };

  return (
    <div className="TextField">
      <DeleteButton handleClick={() => clearClick()} />
      <textarea
        ref={textFieldRef}
        value={value}
        onChange={e => {
          onChange(e);
        }}
        onClick={() => onClick()}
      />
    </div>
  );
};

export default TextField;
