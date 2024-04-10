import React from 'react';
import './App.css';
import AudioPlayer from './components/Audio/AudioPlayer'; // Removed .jsx for brevity

function App() {
  return (
    <div className="App">
      <header className='player'> {/* Adjusted for potential semantic and stylistic purposes */}
        Audio Player 
        <AudioPlayer />
      </header>
    </div>
  );
}

export default App;
