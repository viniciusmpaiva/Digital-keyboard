import React, { useState, useRef, useEffect } from 'react';

import {
  Container,
  TextInputContainer,
  KeysContainer,
  CenterItems,
} from './styled';

import DisplayKeysPopUp from '../DisplayKeysPopUp';

import KeyBox from '../KeyBox';
import SpecialKeys from '../SpecialKeys';

export default function KeyboardComponent({
  numberOfBoxes,
  showKeys,
  setShowKeys,
  isChangeBoxPressed,
  isChangeKeyPressed,
  boxes,
  setBoxes,
  handleOptionsButton,
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
  };

  const handleKeyClick = (key) => {
    const letter = text.length === 0 || isUpper ? key : key.toLowerCase();
    setIsUpper(false);
    const newText = text + letter;
    setText(newText);
    setUpperPressed('notPressed');
  };

  const handleCaps = () => {
    console.log(upperPressed);
    if (upperPressed === 'pressed') {
      setUpperPressed('notPressed');
      setIsUpper(false);
      return;
    }
    setUpperPressed('pressed');
    setIsUpper(true);
  };

  const handleSpace = () => {
    const spacedText = `${text} `;
    setText(spacedText);
    setUpperPressed('notPressed');
    setIsUpper(false);
  };

  const handleClear = () => {
    setText('');
    setUpperPressed('notPressed');
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
      {showKeys ? (
        <DisplayKeysPopUp
          keys={showKeys}
          handleKeyClick={handleKeyClick}
          numberOfKeyBoxes={numberOfBoxes}
          text={text}
          inputRef={inputRef}
          setShowKeys={setShowKeys}
          handleDelete={handleDelete}
        />
      ) : null}
      <TextInputContainer>
        <input type="text" value={text} autoFocus ref={inputRef} />
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </TextInputContainer>
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
        <SpecialKeys
          handleOptionsButton={handleOptionsButton}
          handleCaps={handleCaps}
          handleClear={handleClear}
          handleSpace={handleSpace}
          upperPressed={upperPressed}
        />
      </CenterItems>
    </Container>
  );
}
