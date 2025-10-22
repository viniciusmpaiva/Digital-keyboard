import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import KeyboardComponent from '../../Components/KeyboardComponents/KeyboardComponent';
import SuggestedWords from '../../Components/SuggestedWordsComponents/SuggestedWords';
import PresetsModal from '../../Components/PresetComponents/PresetsModal';
import Options from '../../Components/OptionsComponents/Options';
import Presets from '../../Components/PresetComponents/Presets';
import { PageContainer } from './styled';
import * as presetActions from '../../store/Modules/presets/actions';
// import VoiceRecognitionButton from '../../Components/VoiceComponents/VoiceRecognitionButton';
// import VoiceTranscription from '../../Components/VoiceComponents/VoiceTranscription';
// import { recomNLP } from '../../services/axios';
// import useVoiceRecognition from '../../hooks/useVoiceRecognition';

function Keyboard() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [suggestedWords, setSuggestedWords] = useState([]);
  // const [isContextMode, setIsContextMode] = useState(false);
  const [numberOfBoxes, setNumberOfBoxes] = useState(7);
  const [showKeys, setShowKeys] = useState(null);
  const [isChangeBoxPressed, setChangeBoxPressed] = useState(false);
  const [isChangeKeyPressed, setChangeKeyPressed] = useState(false);
  const [isOptionsPressed, setOptionsPressed] = useState(false);
  const [isPresetsModalOpen, setIsPresetsModalOpen] = useState(false);
  // const [transcription, setTranscription] = useState('');
  // const [voiceSuggestions, setVoiceSuggestions] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState([
    ['Q', 'I', 'G', 'X'],
    ['W', 'O', 'H', 'C'],
    ['E', 'P', 'J', 'V'],
    ['R', 'A', 'K', 'B'],
    ['T', 'S', 'L', 'N'],
    ['Y', 'D', 'Ç', 'M'],
    ['U', 'F', 'Z', '?'],
  ]);

  const [editing, setEditing] = useState(false);

  // // Voice recognition callbacks
  // const handleTranscription = (partialText) => {
  //   setTranscription(partialText);
  //   // Optionally update the main text as the user speaks
  //   setText(partialText);
  // };

  // const handleVoiceSuggestions = (suggestions) => {
  //   setVoiceSuggestions(suggestions);
  //   // Merge voice suggestions with regular suggestions
  //   setSuggestedWords(suggestions);
  // };

  // // Voice recognition hook
  // const {
  //   isRecording,
  //   isConnected,
  //   error: voiceError,
  //   toggleRecording,
  // } = useVoiceRecognition(handleTranscription, handleVoiceSuggestions);

  // useEffect(() => {
  //   const params = {
  //     texto: text,
  //     limite: 5,
  //   };

  //   if (!text) {
  //     setSuggestedWords([]);
  //     return;
  //   }

  //   recomNLP
  //     .get('/sugestoes_hibrido/', { params })
  //     .then((response) => {
  //       console.log('Sugestões recebidas:', response.data.sugestoes);
  //       setSuggestedWords(response.data.sugestoes);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao buscar sugestões:', error.response || error);
  //     });
  // }, [text]);

  // useEffect(() => {
  //   if (!isContextMode) return;

  //   // Add context mode logic here if needed
  //   const params = {
  //     texto: text,
  //     contexto: true,
  //     limite: 5,
  //   };

  //   if (!text) return;

  //   recomNLP
  //     .get('/sugestoes_hibrido/', { params })
  //     .then((response) => {
  //       console.log(
  //         'Sugestões contextuais recebidas:',
  //         response.data.sugestoes
  //       );
  //       setSuggestedWords(response.data.sugestoes);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         'Erro ao buscar sugestões contextuais:',
  //         error.response || error
  //       );
  //     });
  // }, [text, isContextMode]);

  const selectedProfile = useSelector(
    (state) => state.profiles.selectedProfile
  );

  const presets = useSelector((state) => state.presets.presets);

  useEffect(() => {
    if (selectedProfile && selectedProfile._id) {
      dispatch(
        presetActions.getPresetsRequest({ profileId: selectedProfile._id })
      );
    }
  }, [selectedProfile, dispatch]);

  useEffect(() => {
    const distributeKeys = () => {
      const keyboardComponent = [];
      selectedPreset.forEach((box) => {
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
      setSelectedPreset(newBoxes);
      setEditing(false);
    }
  }, [numberOfBoxes]);

  const handleOptionsButton = () => {
    setOptionsPressed(!isOptionsPressed);
    setChangeBoxPressed(false);
    setChangeKeyPressed(false);
  };

  return (
    <PageContainer>
      {isPresetsModalOpen ? (
        <PresetsModal
          presets={presets}
          setIsPresetsModalOpen={setIsPresetsModalOpen}
          isPresetsModalOpen={isPresetsModalOpen}
          setNumberOfBoxes={setNumberOfBoxes}
          setSelectedPreset={setSelectedPreset}
          selectedPreset={selectedPreset}
          numberOfBoxes={numberOfBoxes}
          profileId={selectedProfile._id}
        />
      ) : null}
      {isOptionsPressed ? (
        <Options
          setBoxes={setSelectedPreset}
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
        <Presets
          presetsModalOpen={isPresetsModalOpen}
          isPresetsModalOpen={setIsPresetsModalOpen}
        />
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
        boxes={selectedPreset}
        setBoxes={setSelectedPreset}
      />
    </PageContainer>
  );
}

export default Keyboard;
