import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import GameLevel1 from './components/GameLevel1';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <div className="App">
        {!started ? (
          <HomeScreen onStart={() => setStarted(true)} />
        ) : (
          <div className="game-container">
            <GameLevel1 />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
