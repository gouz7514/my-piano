import React from 'react';
import '../css/Movie.css'

function Lalaland() {
  function playSound(e) {
    const movie = document.querySelector('.movie')

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    if (!movie.classList.contains('lalaland')) {
      movie.classList.add('lalaland')
    }

    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound)
  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-title">
          <img src="images/lalaland_logo.png" alt="lalaland_logo"></img>
        </div>
        <div className="movie-note">
          <h2>ADRGRDS SDRGRDA</h2>
          <h2>ADRGRDS HGRGRDA</h2>
          <br></br>
          <h2>KJHJHGD R</h2>
          <h2>JHGHGRD</h2>
          <h2>KJHJHGR WJ</h2>
          <br></br>
          <h2>;LKLKJH</h2><h2>]';LKJH</h2>
          <h2>HJHJK HJHJK HJHJKHL</h2>
        </div>
        <audio data-key="65" src='/my-piano/sounds/B3.mp3'></audio>
        <audio data-key="68" src='/my-piano/sounds/E4.mp3'></audio>
        <audio data-key="82" src='/my-piano/sounds/Gb4.mp3'></audio>
        <audio data-key="71" src='/my-piano/sounds/G4.mp3'></audio>
        <audio data-key="83" src='/my-piano/sounds/C4.mp3'></audio>
        <audio data-key="72" src='/my-piano/sounds/A4.mp3'></audio>
        <audio data-key="74" src='/my-piano/sounds/B4.mp3'></audio>
        <audio data-key="75" src='/my-piano/sounds/C5.mp3'></audio>
        <audio data-key="87" src='/my-piano/sounds/D4.mp3'></audio>
        <audio data-key="186" src='/my-piano/sounds/E5.mp3'></audio>
        <audio data-key="76" src='/my-piano/sounds/D5.mp3'></audio>
        <audio data-key="221" src='/my-piano/sounds/Ab5.mp3'></audio>
        <audio data-key="222" src='/my-piano/sounds/F5.mp3'></audio>
      </div>
    </div>
  )
}

export default Lalaland