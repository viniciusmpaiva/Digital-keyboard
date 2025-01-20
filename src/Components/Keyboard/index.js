import React, { useState, useRef, useEffect } from 'react';

import {
  Container,
  TextInputContainer,
  KeysContainer,
  CenterItems,
  DisplayKeyLineContainer,
  DisplayKeysContainer,
} from './styled';

import SpecialButtons from '../SpecialButtons';
import Line from '../Line';
import SpecialKeys from '../SpecialKeys';
import KeyBox from '../KeyBox';

export default function Keyboard({
  numberOfBoxes,
  showKeys,
  setShowKeys,
  isChangeBoxPressed,
  isChangeKeyPressed,
  boxes,
  setBoxes,
}) {
  const [text, setText] = useState('');

  const inputRef = useRef(null);

  const [isUpper, setIsUpper] = useState('');

  const [upperPressed, setUpperPressed] = useState('notPressed');

  const [changePressed, setChangePressed] = useState(false);

  // Key dealing states
  const [activeKeyIndex, setActiveKeyIndex] = useState(null);
  const [activeKeyBoxIndex, setActiveKeyBoxIndex] = useState(null);
  const [targetKeyIndex, setTargetKeyIndex] = useState(null);
  const [targetKeyBoxIndex, setTargetKeyBoxIndex] = useState(null);

  // Box dealing states
  const [activeBox, setActiveBox] = useState(null);
  const [activeBoxIndex, setActiveBoxIndex] = useState(null);
  const [targetIndexBox, setTargetIndexBox] = useState(null);

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

  const onDropKey = () => {
    const newBoxes = [...boxes];
    const temp = newBoxes[activeKeyBoxIndex][activeKeyIndex];
    newBoxes[activeKeyBoxIndex][activeKeyIndex] =
      newBoxes[targetKeyBoxIndex][targetKeyIndex];
    newBoxes[targetKeyBoxIndex][targetKeyIndex] = temp;
    setBoxes(newBoxes);
  };

  const onDropBox = () => {
    if (activeBox === null || activeBox === undefined) return;
    const newBoxes = [...boxes];
    const temp = newBoxes[activeBoxIndex];
    newBoxes[activeBoxIndex] = newBoxes[targetIndexBox];
    newBoxes[targetIndexBox] = temp;
    setBoxes(newBoxes);
  };

  const onBoxClick = (keys) => {
    if (showKeys !== null) {
      setShowKeys(null);
    }
    setShowKeys(keys);
  };

  return (
    <Container>
      <TextInputContainer>
        <input type="text" value={text} autoFocus ref={inputRef} />
        <SpecialButtons
          onClick={(e) => handleSpecialButtonClick(e)}
          changePressed={changePressed}
        />
      </TextInputContainer>
      <DisplayKeysContainer>
        {showKeys !== null ? (
          <Line
            keys={showKeys}
            handleKeyClick={handleKeyClick}
            setActiveKeyIndex={setActiveKeyIndex}
            onDrop={onDropKey}
            changePressed={changePressed}
            numberOfKeyBoxes={numberOfBoxes}
          />
        ) : null}
      </DisplayKeysContainer>
      <CenterItems>
        <KeysContainer numberOfBoxes={numberOfBoxes}>
          {boxes.map((box, index) => (
            <KeyBox
              key={index}
              keys={box}
              onBoxClick={onBoxClick}
              indexBox={index}
              setActiveBox={setActiveBox}
              setActiveBoxIndex={setActiveBoxIndex}
              targetIndexBox={targetIndexBox}
              setTargetIndexBox={setTargetIndexBox}
              onDropBox={() => onDropBox(Math.floor(index / 4))}
              numberOfKeyBoxes={numberOfBoxes}
              isChangeBoxPressed={isChangeBoxPressed}
              isChangeKeyPressed={isChangeKeyPressed}
              setTargetKeyIndex={setTargetKeyIndex}
              setTargetKeyBoxIndex={setTargetKeyBoxIndex}
              setActiveKeyIndex={setActiveKeyIndex}
              setActiveKeyBoxIndex={setActiveKeyBoxIndex}
              targetKeyIndex={targetKeyIndex}
              targetKeyBoxIndex={targetKeyBoxIndex}
              onDropKey={onDropKey}
            />
          ))}
        </KeysContainer>
      </CenterItems>
    </Container>
  );
}
