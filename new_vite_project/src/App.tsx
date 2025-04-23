import React, { useState } from 'react';
import Player from './Player';
import Settings from './Settings';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App(): JSX.Element {
  const [scenario1Settings, setScenario1Settings] = useState({
    title: '',
    videoUrl: '',
  });

  return (
      <Routes>
        <Route path="/" element={<Player scenario1Title={scenario1Settings.title} />} />
        <Route path="/settings" element={<Settings 
        scenario1Settings={scenario1Settings} 
        setScenario1Settings={setScenario1Settings}
        />} />
      </Routes>
  );
}

export default App;


