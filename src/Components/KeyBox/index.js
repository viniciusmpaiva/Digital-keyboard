import { KeyBoxContainer } from './styled';
import Key from '../Key';

export default function KeyBox({
  keys,
  onBoxClick,
  indexBox,
  setActiveBox,
  setActiveBoxIndex,
  targetIndexBox,
  setTargetIndexBox,
  onDropBox,
  numberOfKeyBoxes,
  isChangeBoxPressed,
  isChangeKeyPressed,
  setTargetKeyIndex,
  setTargetKeyBoxIndex,
  setActiveKeyIndex,
  setActiveKeyBoxIndex,
  targetKeyIndex,
  targetKeyBoxIndex,
  onDropKey,
}) {
  let widthBox;
  let widthKey;
  let heightKey;
  if (numberOfKeyBoxes === 7) {
    widthBox = 123;
    widthKey = 50;
    heightKey = 50;
  } else if (numberOfKeyBoxes === 6) {
    widthBox = 144;
    widthKey = 63;
    heightKey = 35;
  } else if (numberOfKeyBoxes === 5) {
    widthBox = 165;
    widthKey = 75;
    heightKey = 35;
  } else if (numberOfKeyBoxes === 4) {
    widthBox = 206;
    widthKey = 95;
    heightKey = 26;
  } else {
    widthBox = 300;
    widthKey = 137;
    heightKey = 21;
  }

  const handleBoxClick = () => {
    if (isChangeBoxPressed) {
      return;
    }
    onBoxClick(keys);
  };
  return (
    <KeyBoxContainer
      className={targetIndexBox === indexBox ? 'target' : ''}
      onClick={() => handleBoxClick()}
      draggable={isChangeBoxPressed}
      onDragStart={() => {
        setActiveBox(keys);
        setActiveBoxIndex(indexBox);
      }}
      onDragEnd={() => {
        setActiveBox(null);
        setTargetIndexBox(null);
      }}
      onDrop={() => {
        if (isChangeKeyPressed) {
          return;
        }
        onDropBox(indexBox);
        setTargetIndexBox(null);
      }}
      onDragOver={(e) => {
        if (isChangeKeyPressed) {
          return;
        }
        e.preventDefault();
        setTargetIndexBox(indexBox);
      }}
      width={widthBox}
    >
      {keys.map((key, indexKey) => {
        return (
          <Key
            key={indexKey}
            keyValue={key}
            handleKeyClick={() => {}}
            width={widthKey}
            height={heightKey}
            isChangeKeyPressed={isChangeKeyPressed}
            isChangeBoxPressed={isChangeBoxPressed}
            indexBox={indexBox}
            indexKey={indexKey}
            setTargetKeyIndex={setTargetKeyIndex}
            setTargetKeyBoxIndex={setTargetKeyBoxIndex}
            setActiveKeyIndex={setActiveKeyIndex}
            setActiveKeyBoxIndex={setActiveKeyBoxIndex}
            targetKeyIndex={targetKeyIndex}
            targetKeyBoxIndex={targetKeyBoxIndex}
            onDropKey={onDropKey}
          />
        );
      })}
    </KeyBoxContainer>
  );
}
