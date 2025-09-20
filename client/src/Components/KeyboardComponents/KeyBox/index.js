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
  let heightBox = 93;
  if (numberOfKeyBoxes === 7) {
    heightKey = 95;
    widthKey = 93;
    widthBox = 13.5;
  } else if (numberOfKeyBoxes === 6) {
    heightKey = 95;
    widthKey = 97;
    widthBox = 16;
  } else if (numberOfKeyBoxes === 5) {
    heightKey = 94;
    widthKey = 96;
    widthBox = 19;
  } else if (numberOfKeyBoxes === 4) {
    heightKey = 93;
    widthKey = 95;
    widthBox = 24;
  } else {
    heightKey = 91;
    widthKey = 94;
    widthBox = 32;
  }

  const handleBoxClick = () => {
    if (isChangeBoxPressed) {
      return;
    }
    onBoxClick(keys);
  };
  return (
    <KeyBoxContainer
      $indexBox={indexBox}
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
            hover={false}
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
            fontSize={120}
          />
        );
      })}
    </KeyBoxContainer>
  );
}
