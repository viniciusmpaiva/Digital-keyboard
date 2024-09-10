import React, { useState, useRef } from 'react';

import {
  Container,
  ReadInputContainer,
  KeyboardContainer,
  LastLineContainer,
} from './styled';

import SpecialButtons from '../SpecialButtons';
import Line from '../Line';
import SpecialKeys from '../SpecialKeys';

export default function Keyboard() {
  const keyboardOrder1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keyboardOrder2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'];
  const keyboardOrder3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const [isUpper, setIsUpper] = useState('');
  const [upperPressed, setUpperPressed] = useState('notPressed');

  const handleSpecialButtonClick = () => {
    const newText = text.slice(0, text.length - 1);
    setText(newText);
    inputRef.current.focus();
  };

  const handleKeyClick = (key) => {
    const letter = text.length === 0 || isUpper ? key : key.toLowerCase();
    setIsUpper(false);
    setText((prevText) => prevText + letter);
    inputRef.current.focus();
    setUpperPressed('notPressed');
  };

  const handleCaps = () => {
    if (upperPressed === 'pressed') {
      setUpperPressed('notPressed');
      setIsUpper(false);
      return;
    }
    setUpperPressed('pressed');
    setIsUpper(true);
    inputRef.current.focus();
  };

  const handleSpace = () => {
    setText((prevText) => `${prevText} `);
    setUpperPressed('notPressed');
    setIsUpper(false);
    inputRef.current.focus();
  };

  const handleClear = () => {
    setText('');
    setUpperPressed('notPressed');
    inputRef.current.focus();
  };

  return (
    <Container>
      <ReadInputContainer>
        <input type="text" value={text} autoFocus ref={inputRef} />
        <SpecialButtons onClick={handleSpecialButtonClick} />
      </ReadInputContainer>
      <KeyboardContainer>
        <Line
          keys={keyboardOrder1}
          handleKeyClick={handleKeyClick}
          lineNumber="line1"
        />
        <Line
          keys={keyboardOrder2}
          handleKeyClick={handleKeyClick}
          lineNumber="line2"
        />
        <LastLineContainer>
          <Line
            keys={keyboardOrder3}
            handleKeyClick={handleKeyClick}
            lineNumber="line3"
          />
          <SpecialKeys
            handleCaps={handleCaps}
            handleClear={handleClear}
            handleSpace={handleSpace}
            upperPressed={upperPressed}
          />
        </LastLineContainer>
      </KeyboardContainer>
    </Container>
  );
}
