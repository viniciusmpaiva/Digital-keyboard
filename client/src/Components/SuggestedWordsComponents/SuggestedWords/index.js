import React from 'react';

import { SuggestedWordsContainer, SuggestedWordButton } from './styled';

export default function SuggestedWords() {
  return (
    <SuggestedWordsContainer>
      <SuggestedWordButton type="button">brinquedo</SuggestedWordButton>
      <SuggestedWordButton type="button">banco</SuggestedWordButton>
      <SuggestedWordButton type="button">brinco</SuggestedWordButton>
    </SuggestedWordsContainer>
  );
}
