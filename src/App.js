import React, { useState } from 'react';

import Keyboard from './Components/Keyboard';
import Options from './Components/Options';

function App() {
  const [numberOfBoxes, setNumberOfBoxes] = useState(7);
  const [showKeys, setShowKeys] = useState(null);
  return (
    <>
      <Keyboard
        numberOfBoxes={numberOfBoxes}
        showKeys={showKeys}
        setShowKeys={setShowKeys}
      />
      <Options
        numberOfBoxes={numberOfBoxes}
        setNumberOfBoxes={setNumberOfBoxes}
        setShowKeys={setShowKeys}
      />
    </>
  );
}

export default App;
