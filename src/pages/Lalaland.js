import React from 'react';
import '../css/Movie.css'

function Lalaland() {
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound)
  return (
    <div className="movie-container">
      <div className="movie-title">
        <h1>라라랜드</h1>
      </div>
      <div className="movie-note">
        <h3>adfgfds</h3>
        <h3>sdfgfda</h3>
        <h3>adfgfds</h3>
        <h3>hgfgfda</h3>
        <h3>kjhjhgdf</h3>
        <h3>jhghgfd</h3>
      </div>
      <audio data-key="65" src='/sounds/Db4.mp3'></audio> 
      <audio data-key="83" src='/sounds/D4.mp3'></audio>
      <audio data-key="68" src='/sounds/Gb4.mp3'></audio>
      <audio data-key="70" src='/sounds/Ab4.mp3'></audio>
      <audio data-key="71" src='/sounds/A4.mp3'></audio>
      <audio data-key="72" src='/sounds/B4.mp3'></audio>
      <audio data-key="74" src='/sounds/Db5.mp3'></audio>
      <audio data-key="75" src='/sounds/D5.mp3'></audio>
    </div>
  )
}

export default Lalaland