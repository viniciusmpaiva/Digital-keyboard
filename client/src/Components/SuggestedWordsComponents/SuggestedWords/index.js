import React from 'react';

import { SuggestedWordsContainer, SuggestedWordButton } from './styled';

export default function SuggestedWords({ suggestedWords, setText, text }) {
  const handleWordClick = (selectedWord) => {
    // Find the last space to identify where the current word starts
    const lastSpaceIndex = text.lastIndexOf(' ');

    let newText;
    if (lastSpaceIndex === -1) {
      // No spaces found, replace entire text
      newText = selectedWord;
    } else {
      // Replace only the current word (after the last space)
      const textBeforeCurrentWord = text.substring(0, lastSpaceIndex + 1);
      newText = textBeforeCurrentWord + selectedWord;
    }

    setText(newText);
  };

  return (
    <SuggestedWordsContainer>
      {suggestedWords &&
        suggestedWords.map((word, index) => (
          <SuggestedWordButton
            key={index}
            type="button"
            onClick={() => handleWordClick(word)}
          >
            {word}
          </SuggestedWordButton>
        ))}
    </SuggestedWordsContainer>
  );
}
