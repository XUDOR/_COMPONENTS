//app.js

import React from 'react';
import './App.css';
import AudioPlayer from './components/Audio/AudioPlayer'; // Removed .jsx for brevity

function App() {
  return (
    <div className="App">
       Audio Player 
      <header className='playerContainer'> {/* Adjusted for potential semantic and stylistic purposes */}
        <AudioPlayer />
      </header>
    </div>
  );
}

export default App;
