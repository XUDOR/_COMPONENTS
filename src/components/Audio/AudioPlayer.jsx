import React, { useState, useRef } from "react";
import audioFile from '../../Audio-Assets/CHARLOTTA.mp3';




const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false); // Corrected setIsPlaying
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Refs
  const audioPlayer = useRef();

  // Handlers
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue); // Corrected setIsPlaying
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const handleLoadedData = () => {
    setDuration(audioPlayer.current.duration);
    if (isPlaying) audioPlayer.current.play();
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioPlayer.current.currentTime);
  };

  // Calculate time slider value
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60); // Corrected secs
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <div>
      <audio
        ref={audioPlayer}
        src={audioFile}
        onLoadedData={handleLoadedData}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)} // Corrected setIsPlaying
      ></audio>
      <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <div>{calculateTime(currentTime)} / {calculateTime(duration)}</div>
    </div>
  );
};  

export default AudioPlayer;
