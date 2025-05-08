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
  let heightKey = 90;
  let heightBox = 90;
  if (numberOfKeyBoxes === 7) {
    widthKey = 90;
    widthBox = 13;
  } else if (numberOfKeyBoxes === 6) {
    widthKey = 90;
    widthBox = 15;
  } else if (numberOfKeyBoxes === 5) {
    widthKey = 90;
    widthBox = 19;
  } else if (numberOfKeyBoxes === 4) {
    widthKey = 90;
    widthBox = 24;
  } else {
    widthKey = 90;
    widthBox = 32;
    heightKey = 80;
  }

  const handleBoxClick = () => {
    if (isChangeBoxPressed) {
      return;
    }
    onBoxClick(keys);
  };
  return (
    <KeyBoxContainer
      indexBox={indexBox}
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
      height={heightBox}
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
