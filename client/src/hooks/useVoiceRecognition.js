import { useState, useRef, useCallback } from 'react';

const useVoiceRecognition = (onTranscription, onSuggestions) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  const socketRef = useRef(null);
  const audioContextRef = useRef(null);
  const scriptProcessorRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const startVoiceRecognition = useCallback(async () => {
    try {
      setError(null);

      const wsUrl =
        process.env.REACT_APP_VOICE_WS_URL ||
        'ws://127.0.0.1:8000/ws/sugestoes_por_voz';
      socketRef.current = new WebSocket(wsUrl);

      socketRef.current.onopen = async () => {
        console.log('WebSocket conectado. Iniciando captura de áudio...');
        setIsConnected(true);

        try {
          // Get user media with audio constraints
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: {
              sampleRate: 16000,
              channelCount: 1,
              echoCancellation: true,
              noiseSuppression: true,
            },
          });

          mediaStreamRef.current = stream;

          // Create audio context with 16kHz sample rate
          audioContextRef.current = new AudioContext({ sampleRate: 16000 });

          const source =
            audioContextRef.current.createMediaStreamSource(stream);

          // Create script processor for audio processing
          scriptProcessorRef.current =
            audioContextRef.current.createScriptProcessor(4096, 1, 1);

          scriptProcessorRef.current.onaudioprocess = (event) => {
            if (!isRecording) return;

            const audioData = event.inputBuffer.getChannelData(0);
            const int16Data = new Int16Array(audioData.length);

            // Convert float32 to int16
            for (let i = 0; i < audioData.length; i++) {
              int16Data[i] = Math.max(-1, Math.min(1, audioData[i])) * 32767;
            }

            // Send audio data through WebSocket
            if (
              socketRef.current &&
              socketRef.current.readyState === WebSocket.OPEN
            ) {
              socketRef.current.send(int16Data.buffer);
            }
          };

          source.connect(scriptProcessorRef.current);
          scriptProcessorRef.current.connect(
            audioContextRef.current.destination
          );
          setIsRecording(true);
        } catch (mediaError) {
          console.error('Erro ao acessar microfone:', mediaError);
          setError('Erro ao acessar o microfone. Verifique as permissões.');
          setIsConnected(false);
        }
      };

      socketRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log('Mensagem do servidor:', data);
          ('');
        } catch (parseError) {
          console.error('Erro ao processar mensagem do servidor:', parseError);
        }
      };

      socketRef.current.onclose = () => {
        console.log('WebSocket desconectado.');
        setIsConnected(false);
        setIsRecording(false);
      };

      socketRef.current.onerror = (wsError) => {
        console.error('Erro no WebSocket:', wsError);
        setError('Erro na conexão WebSocket');
        setIsConnected(false);
        setIsRecording(false);
      };
    } catch (initError) {
      console.error('Erro ao iniciar reconhecimento de voz:', initError);
      setError('Erro ao iniciar reconhecimento de voz');
    }
  }, [onTranscription, onSuggestions, isRecording]);

  const stopVoiceRecognition = useCallback(() => {
    setIsRecording(false);

    // Stop media stream
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    // Disconnect script processor
    if (scriptProcessorRef.current) {
      scriptProcessorRef.current.disconnect();
      scriptProcessorRef.current = null;
    }

    // Close audio context
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    // Close WebSocket
    if (socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
    }

    setIsConnected(false);
    setError(null);
  }, []);

  const toggleRecording = useCallback(() => {
    if (isRecording) {
      stopVoiceRecognition();
    } else {
      startVoiceRecognition();
    }
  }, [isRecording, startVoiceRecognition, stopVoiceRecognition]);

  return {
    isRecording,
    isConnected,
    error,
    startVoiceRecognition,
    stopVoiceRecognition,
    toggleRecording,
  };
};

export default useVoiceRecognition;
