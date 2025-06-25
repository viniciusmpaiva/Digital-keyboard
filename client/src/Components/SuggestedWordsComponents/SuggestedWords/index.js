import React from 'react';

import { SuggestedWordsContainer, SuggestedWordButton } from './styled';

export default function SuggestedWords({ suggestedWords, setText }) {
  const { sugestoes } = suggestedWords;

  console.log('SuggestedWords component rendered with:', suggestedWords);
  console.log('Sugestoes:', sugestoes);
  return (
    <SuggestedWordsContainer>
      {sugestoes &&
        sugestoes.map((word, index) => (
          <SuggestedWordButton
            key={index}
            type="button"
            onClick={() => setText(word)}
          >
            {word}
          </SuggestedWordButton>
        ))}
    </SuggestedWordsContainer>
  );
}
