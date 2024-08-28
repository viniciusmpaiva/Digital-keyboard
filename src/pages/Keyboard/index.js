import React, { useState, useRef } from 'react';

import { FaDeleteLeft } from 'react-icons/fa6';
import { MdOutlineKeyboardReturn, MdOutlineSpaceBar } from 'react-icons/md';
import { PiArrowFatLineUpLight } from 'react-icons/pi';
import {
  Container,
  ReadInputContainer,
  ButtonsContainer,
  KeyboardContainer,
  KeyboardLine,
} from './styled';

export default function Keyboard() {
  const keyboardOrder1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keyboardOrder2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'];
  const keyboardOrder3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const [isUpper, setIsUpper] = useState('');
  const [upperPressed, setUpperPressed] = useState('notPressed');

  return (
    <Container>
      <ReadInputContainer>
        <input type="text" value={text} autoFocus ref={inputRef} />
        <ButtonsContainer>
          <button
            type="button"
            className="delete"
            onClick={() => {
              const newText = text.slice(0, text.length - 1);
              setText(newText);
              inputRef.current.focus();
            }}
          >
            <FaDeleteLeft />
          </button>
          <button type="button" className="enter">
            <MdOutlineKeyboardReturn />
          </button>
        </ButtonsContainer>
      </ReadInputContainer>
      <KeyboardContainer>
        <KeyboardLine>
          {keyboardOrder1.map((key) => (
            <button
              className="line1"
              type="button"
              key={key}
              onClick={() => {
                console.log(isUpper);
                const letter =
                  text.length === 0 || isUpper ? key : key.toLowerCase();
                setIsUpper(false);
                setText((prevText) => prevText + letter);
                inputRef.current.focus();
                setUpperPressed('notPressed');
              }}
            >
              {key}
            </button>
          ))}
        </KeyboardLine>
        <KeyboardLine>
          {keyboardOrder2.map((key) => (
            <button
              className="line2"
              type="button"
              key={key}
              onClick={() => {
                const letter =
                  text.length === 0 || isUpper ? key : key.toLowerCase();
                setIsUpper(false);
                setText((prevText) => prevText + letter);
                inputRef.current.focus();
                setUpperPressed('notPressed');
              }}
            >
              {key}
            </button>
          ))}
        </KeyboardLine>
        <KeyboardLine>
          {keyboardOrder3.map((key) => (
            <button
              className="line3"
              type="button"
              key={key}
              onClick={() => {
                const letter =
                  text.length === 0 || isUpper ? key : key.toLowerCase();
                setIsUpper(false);
                setText((prevText) => prevText + letter);
                inputRef.current.focus();
                setUpperPressed('notPressed');
              }}
            >
              {key}
            </button>
          ))}
          <button
            type="button"
            className="space"
            onClick={() => {
              setText((prevText) => `${prevText} `);
              setUpperPressed('notPressed');
              setIsUpper(false);
              inputRef.current.focus();
            }}
          >
            <MdOutlineSpaceBar />
          </button>
          <button
            type="button"
            className="clear"
            onClick={() => {
              setText('');
              setUpperPressed('notPressed');
              inputRef.current.focus();
            }}
          >
            Clear
          </button>
          <button
            type="button"
            className={upperPressed}
            onClick={() => {
              if (upperPressed === 'pressed') {
                setUpperPressed('notPressed');
                setIsUpper(false);
                return;
              }
              setUpperPressed('pressed');
              setIsUpper(true);
              inputRef.current.focus();
            }}
          >
            <PiArrowFatLineUpLight />
          </button>
        </KeyboardLine>
      </KeyboardContainer>
    </Container>
  );
}
