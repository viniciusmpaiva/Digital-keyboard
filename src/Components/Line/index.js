import Key from '../Key';
import { LineContainer } from './styled';

export default function Line({ keys, handleKeyClick, lineNumber }) {
  return (
    <LineContainer>
      {keys.map((key) => {
        return (
          <Key
            key={key}
            keyValue={key}
            handleKeyClick={handleKeyClick}
            lineNumber={lineNumber}
          />
        );
      })}
    </LineContainer>
  );
}
