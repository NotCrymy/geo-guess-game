import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <div className="App">
        {!started ? (
          <HomeScreen onStart={() => setStarted(true)} />
        ) : (
          <div style={{ color: 'black', padding: '2rem' }}>
            <h1>🎮 Niveau 1</h1>
            <p>Ici on affichera l'image du jeu à deviner</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
