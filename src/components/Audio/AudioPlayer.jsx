import React, { useState, useRef } from "react";
import audioFile from '../../Audio-Assets/CHARLOTTA.mp3';
import '../../App.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1.0); // Add volume state

  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
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

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioPlayer.current.volume = newVolume;
    setVolume(newVolume);
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <div className="player">
      <audio
        ref={audioPlayer}
        src={audioFile}
        onLoadedData={handleLoadedData}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      ></audio>
      <button className="Play" onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <div className="Time">{calculateTime(currentTime)} / {calculateTime(duration)}</div>
      {/* Volume Control */}
      <div className="volume-control">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
      </div>
    </div>
  );
};  

export default AudioPlayer;
