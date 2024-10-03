import React, { useState, useRef } from 'react';

import {
  Container,
  ReadInputContainer,
  KeyboardContainer,
  DisplayKeyLineContainer,
  DisplayKeysContainer,
} from './styled';

import SpecialButtons from '../SpecialButtons';
import Line from '../Line';
import SpecialKeys from '../SpecialKeys';
import KeyBox from '../KeyBox';

export default function Keyboard() {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const [isUpper, setIsUpper] = useState('');
  const [upperPressed, setUpperPressed] = useState('notPressed');
  const [changePressed, setChangePressed] = useState(false);

  const [activeCard, setActiveCard] = useState(null);

  const [targetIndex, setTargetIndex] = useState(null);

  const [showKeys, setShowKeys] = useState(null);

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
    '?',
  ]);

  const handleDelete = () => {
    const newText = text.slice(0, text.length - 1);
    setText(newText);
    inputRef.current.focus();
  };
  const handleSpecialButtonClick = (e) => {
    if (e.target.className === 'delete') {
      handleDelete();
    }
    if (
      e.target.className === 'change pressed' ||
      e.target.className === 'change'
    ) {
      setChangePressed(!changePressed);
    }
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
    setTargetIndex(null);
  };

  const onBoxClick = (keys) => {
    setShowKeys(keys);
  };

  let boxKeys = [];
  return (
    <Container>
      <ReadInputContainer>
        <input type="text" value={text} autoFocus ref={inputRef} />
        <SpecialButtons
          onClick={(e) => handleSpecialButtonClick(e)}
          changePressed={changePressed}
        />
      </ReadInputContainer>
      <DisplayKeysContainer>
        <DisplayKeyLineContainer>
          {showKeys !== null ? (
            <Line
              keys={showKeys}
              handleKeyClick={handleKeyClick}
              lineNumber="line1"
              setActiveCard={setActiveCard}
              onDrop={onDrop}
              targetIndex={targetIndex}
              setTargetIndex={setTargetIndex}
              changePressed={changePressed}
            />
          ) : null}
        </DisplayKeyLineContainer>
        <SpecialKeys
          handleCaps={handleCaps}
          handleSpace={handleSpace}
          handleClear={handleClear}
        />
      </DisplayKeysContainer>
      <KeyboardContainer>
        {keyboard.map((key) => {
          boxKeys.push(key);
          if (boxKeys.length === 4) {
            const temp = [...boxKeys];
            boxKeys = [];
            return <KeyBox keys={temp} onBoxClick={onBoxClick} />;
          }
        })}
      </KeyboardContainer>
    </Container>
  );
}
