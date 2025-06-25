import axios from 'axios';

const digitalKeyboardBackend = axios.create({
  baseURL: process.env.DIGITAL_KEYBOARD_BACKEND_URL,
});

const recomNLP = axios.create({
  baseURL: process.env.REACT_APP_RECOM_NLP_API_URL,
});

export { digitalKeyboardBackend, recomNLP };
