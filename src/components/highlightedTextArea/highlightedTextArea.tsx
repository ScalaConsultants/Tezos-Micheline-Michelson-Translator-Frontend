import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Input} from 'antd';

const { TextArea } = Input;
const HighlightedTextareaStyle = styled.div`
    position: relative;
    min-height: 32px;
    .in, .out {
        padding: 4px 11px;
        margin: 0;
        border: 1px solid #ccc;
        width: 80%;
        height: auto;
        line-height: 1.5;
        font-size: 14px;
        color: black;
        resize: none;
    }
    .in {
        vertical-align: top;
        background-color: transparent;
        outline: none;
        z-index: 50;
        text-shadow: 0px 0px 0px #fff;
    }
    .out {
        position: absolute;
        min-height: 32px;
        background-color: #fff;
        -webkit-text-fill-color: transparent;
        border: 1px solid transparent;
        z-index: -1;
    }
    .highlights {
        white-space: pre-wrap;
        word-wrap: break-word;
        color: transparent;
    }

    mark {
        border-radius: 3px;
        color: transparent;
        background-color: #ffaaaa;
    }
    
    .label {
      font-weight: bold;
      margin: 5px;
    }
`;

type propsType = {
  value: string,
  onChange: Function,
  label: string,
  className?: string
}

const HighlightedTextarea = ({
  value,
  onChange,
  label,
  className
}: propsType) => {
  const [htmlValue, setHtmlValue] = useState('');

  useEffect(() => {
    setHtmlValue(getHtmlValue(value))
  }, [value]);

  const inputFunc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  const getHtmlValue = (value: any) => {
    return value.replace(value.substring(10,30), '<mark>$&</mark>');
    // return value.replace(/\n$/g, '\n\n').replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
  };

  const onTextAreaBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // const {setCursorPosition, index} = props;
    // const position = e.target.selectionStart;
    // if (setCursorPosition) {
    //   setCursorPosition(position, index);
    // }
  };

  return (
    <HighlightedTextareaStyle>
      <div className="label">{label}</div>
      <div className="out" >
        <div className="highlights" dangerouslySetInnerHTML={{ __html: htmlValue }} />
      </div>
      <TextArea className="in" value={value} maxLength={5000}
        onChange={inputFunc} autosize={{ minRows: 10, maxRows: 1000 }}
        onBlur={onTextAreaBlur}
      />
    </HighlightedTextareaStyle>
  );
};

export default HighlightedTextarea;
