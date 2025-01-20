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
  let widthBox = 90;
  let widthKey = 90;
  let heightKey = 90;

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
