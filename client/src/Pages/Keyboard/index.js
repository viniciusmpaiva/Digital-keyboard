import React, { useState, useEffect } from 'react';

import KeyboardComponent from '../../Components/KeyboardComponents/KeyboardComponent';
import SuggestedWords from '../../Components/SuggestedWordsComponents/SuggestedWords';
import Options from '../../Components/OptionsComponents/Options';
import Presets from '../../Components/PresetComponents/Presets';
import VoiceRecognitionButton from '../../Components/VoiceComponents/VoiceRecognitionButton';
import VoiceTranscription from '../../Components/VoiceComponents/VoiceTranscription';
import { PageContainer } from './styled';
import { recomNLP } from '../../services/axios';
import useVoiceRecognition from '../../hooks/useVoiceRecognition';

function Keyboard() {
  const [text, setText] = useState('');
  const [suggestedWords, setSuggestedWords] = useState([]);
  const [isContextMode, setIsContextMode] = useState(false);
  const [numberOfBoxes, setNumberOfBoxes] = useState(7);
  const [showKeys, setShowKeys] = useState(null);
  const [isChangeBoxPressed, setChangeBoxPressed] = useState(false);
  const [isChangeKeyPressed, setChangeKeyPressed] = useState(false);
  const [isOptionsPressed, setOptionsPressed] = useState(false);
  const [isPresetsModalOpen, setIsPresetsModalOpen] = useState(false);
  const [presets, setPresets] = useState([]);
  const [transcription, setTranscription] = useState('');
  const [voiceSuggestions, setVoiceSuggestions] = useState([]);
  const [boxes, setBoxes] = useState([
    ['Q', 'I', 'G', 'X'],
    ['W', 'O', 'H', 'C'],
    ['E', 'P', 'J', 'V'],
    ['R', 'A', 'K', 'B'],
    ['T', 'S', 'L', 'N'],
    ['Y', 'D', 'Ç', 'M'],
    ['U', 'F', 'Z', '?'],
  ]);

  const [editing, setEditing] = useState(false);

  // Voice recognition callbacks
  const handleTranscription = (partialText) => {
    setTranscription(partialText);
    // Optionally update the main text as the user speaks
    setText(partialText);
  };

  const handleVoiceSuggestions = (suggestions) => {
    setVoiceSuggestions(suggestions);
    // Merge voice suggestions with regular suggestions
    setSuggestedWords(suggestions);
  };

  // Voice recognition hook
  const {
    isRecording,
    isConnected,
    error: voiceError,
    toggleRecording,
  } = useVoiceRecognition(handleTranscription, handleVoiceSuggestions);

  useEffect(() => {
    const params = {
      texto: text,
      limite: 5,
    };

    if (!text) {
      setSuggestedWords([]);
      return;
    }

    recomNLP
      .get('/sugestoes_hibrido/', { params })
      .then((response) => {
        console.log('Sugestões recebidas:', response.data.sugestoes);
        setSuggestedWords(response.data.sugestoes);
      })
      .catch((error) => {
        console.error('Erro ao buscar sugestões:', error.response || error);
      });
  }, [text]);

  useEffect(() => {
    if (!isContextMode) return;

    // Add context mode logic here if needed
    const params = {
      texto: text,
      contexto: true,
      limite: 5,
    };

    if (!text) return;

    recomNLP
      .get('/sugestoes_hibrido/', { params })
      .then((response) => {
        console.log(
          'Sugestões contextuais recebidas:',
          response.data.sugestoes
        );
        setSuggestedWords(response.data.sugestoes);
      })
      .catch((error) => {
        console.error(
          'Erro ao buscar sugestões contextuais:',
          error.response || error
        );
      });
  }, [text, isContextMode]);

  useEffect(() => {
    const distributeKeys = () => {
      const keyboardComponent = [];
      boxes.forEach((box) => {
        box.forEach((key) => {
          keyboardComponent.push(key);
        });
      });
      const tempBoxes = Array.from({ length: numberOfBoxes }, () => []);
      keyboardComponent.forEach((key, index) => {
        tempBoxes[index % numberOfBoxes].push(key);
      });
      return tempBoxes;
    };
    const newBoxes = distributeKeys();
    if (editing) {
      setBoxes(newBoxes);
      setEditing(false);
    }
  }, [numberOfBoxes]);

  useEffect(() => {
    const savePresets = () => {
      localStorage.setItem('presets', JSON.stringify(presets));
    };
    if (presets === null || presets.length <= 0) return;
    savePresets(presets);
  }, [presets]);

  const handleOptionsButton = () => {
    setOptionsPressed(!isOptionsPressed);
    setChangeBoxPressed(false);
    setChangeKeyPressed(false);
  };

  return (
    <PageContainer>
      {/* {isPresetsModalOpen} */}
      {isOptionsPressed ? (
        <Options
          setBoxes={setBoxes}
          setEditing={setEditing}
          numberOfBoxes={numberOfBoxes}
          setNumberOfBoxes={setNumberOfBoxes}
          setChangeBoxPressed={setChangeBoxPressed}
          setChangeKeyPressed={setChangeKeyPressed}
          setOptionsPressed={setOptionsPressed}
        />
      ) : null}
      {/* <VoiceRecognitionButton
        isRecording={isRecording}
        isConnected={isConnected}
        error={voiceError}
        onToggleRecording={toggleRecording}
      />
      <VoiceTranscription
        transcription={transcription}
        isVisible={isRecording || transcription}
      /> */}

      {suggestedWords.length > 0 ? (
        <SuggestedWords
          suggestedWords={suggestedWords}
          setText={setText}
          text={text}
        />
      ) : (
        <Presets />
      )}
      <KeyboardComponent
        text={text}
        setText={setText}
        handleOptionsButton={handleOptionsButton}
        numberOfBoxes={numberOfBoxes}
        showKeys={showKeys}
        setShowKeys={setShowKeys}
        isChangeBoxPressed={isChangeBoxPressed}
        isChangeKeyPressed={isChangeKeyPressed}
        boxes={boxes}
        setBoxes={setBoxes}
      />
    </PageContainer>
  );
}

export default Keyboard;
