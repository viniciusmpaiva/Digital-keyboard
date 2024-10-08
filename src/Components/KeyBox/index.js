import { KeyBoxContainer } from './styled';
import Key from '../Key';

export default function KeyBox({
  keys,
  onBoxClick,
  index,
  setActiveBox,
  setActiveBoxIndex,
  targetIndexBox,
  setTargetIndexBox,
  onDrop,
  numberOfKeyBoxes,
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
  return (
    <KeyBoxContainer
      className={targetIndexBox === index ? 'target' : ''}
      onClick={() => onBoxClick(keys)}
      draggable
      onDragStart={() => {
        setActiveBox(keys);
        setActiveBoxIndex(index);
      }}
      onDragEnd={() => {
        setActiveBox(null);
        setTargetIndexBox(null);
      }}
      onDrop={() => {
        onDrop(index);
        setTargetIndexBox(null);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setTargetIndexBox(index);
      }}
      width={widthBox}
    >
      {keys.map((key, idx) => {
        return (
          <Key
            key={idx}
            keyValue={key}
            isDisabled
            handleKeyClick={() => {}}
            // targetIndex={null}
            width={widthKey}
            height={heightKey}
          />
        );
      })}
    </KeyBoxContainer>
  );
}
