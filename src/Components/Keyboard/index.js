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
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const [isUpper, setIsUpper] = useState('');
  const [upperPressed, setUpperPressed] = useState('notPressed');

  const [activeCard, setActiveCard] = useState(null);

  const [keyboard, setKeyboard] = useState([
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Ç',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ]);

  const handleSpecialButtonClick = () => {
    const newText = text.slice(0, text.length - 1);
    setText(newText);
    inputRef.current.focus();
  };

  const handleKeyClick = (key) => {
    const letter = text.length === 0 || isUpper ? key : key.toLowerCase();
    setIsUpper(false);
    const newText = text + letter;
    setText(newText);
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
    const spacedText = `${text} `;
    setText(spacedText);
    setUpperPressed('notPressed');
    setIsUpper(false);
    inputRef.current.focus();
  };

  const handleClear = () => {
    setText('');
    setUpperPressed('notPressed');
    inputRef.current.focus();
  };

  const onDrop = (line, index) => {
    if (activeCard === null || activeCard === undefined) return;

    const currentKeyIndex = keyboard.indexOf(activeCard);
    const newKeyboardOrder = [...keyboard];
    let newIndex;
    if (line === 'line1') {
      newIndex = index;
    } else if (line === 'line2') {
      newIndex = index + 10;
    } else {
      newIndex = index + 20;
    }
    const temp = newKeyboardOrder[currentKeyIndex];
    newKeyboardOrder[currentKeyIndex] = newKeyboardOrder[newIndex];
    newKeyboardOrder[newIndex] = temp;
    setKeyboard(newKeyboardOrder);
  };

  return (
    <Container>
      <ReadInputContainer>
        <input type="text" value={text} autoFocus ref={inputRef} />
        <SpecialButtons onClick={handleSpecialButtonClick} />
      </ReadInputContainer>
      <KeyboardContainer>
        <Line
          keys={keyboard.slice(0, 10)}
          handleKeyClick={handleKeyClick}
          lineNumber="line1"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <Line
          keys={keyboard.slice(10, 20)}
          handleKeyClick={handleKeyClick}
          lineNumber="line2"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <LastLineContainer>
          <Line
            keys={keyboard.slice(20, 27)}
            handleKeyClick={handleKeyClick}
            lineNumber="line3"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
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
