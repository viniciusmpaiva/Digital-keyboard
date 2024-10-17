import React, { useState } from 'react';

import Keyboard from './Components/Keyboard';
import Options from './Components/Options';

function App() {
  const [numberOfBoxes, setNumberOfBoxes] = useState(7);
  const [showKeys, setShowKeys] = useState(null);
  const [isChangeBoxPressed, setChangeBoxPressed] = useState(false);
  const [isChangeKeyPressed, setChangeKeyPressed] = useState(false);
  return (
    <>
      <Keyboard
        numberOfBoxes={numberOfBoxes}
        showKeys={showKeys}
        setShowKeys={setShowKeys}
        isChangeBoxPressed={isChangeBoxPressed}
        isChangeKeyPressed={isChangeKeyPressed}
      />
      <Options
        numberOfBoxes={numberOfBoxes}
        setNumberOfBoxes={setNumberOfBoxes}
        setShowKeys={setShowKeys}
        isChangeBoxPressed={isChangeBoxPressed}
        setChangeBoxPressed={setChangeBoxPressed}
        isChangeKeyPressed={isChangeKeyPressed}
        setChangeKeyPressed={setChangeKeyPressed}
      />
    </>
  );
}

export default App;
