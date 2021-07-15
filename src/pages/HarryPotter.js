import React from 'react';
import '../css/Movie.css'

function HarryPotter() {
  function playSound(e) {
    const movie = document.querySelector('.movie')

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    if (!movie.classList.contains('harrypotter')) {
      movie.classList.add('harrypotter')
    }

    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound)

  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-title">
          <img src="images/harrypotter_logo.png" alt="harrypotter_logo"></img>
        </div>
        <div className="movie-note">
          <h2>ADGRD JHR</h2>
          <br></br>
          <h2>D GRS FA</h2>
          <br></br>
          <h2>AD GRD JL OK</h2>
          <br></br>
          <h2>HKJUQ GD</h2>
        </div>
        <audio data-key="65" src='/sounds/B3.mp3'></audio>
        <audio data-key="68" src='/sounds/E4.mp3'></audio>
        <audio data-key="71" src='/sounds/G4.mp3'></audio>
        <audio data-key="82" src='/sounds/Gb4.mp3'></audio>
        <audio data-key="74" src='/sounds/B4.mp3'></audio>
        <audio data-key="72" src='/sounds/A4.mp3'></audio>
        <audio data-key="83" src='/sounds/Eb4.mp3'></audio>
        <audio data-key="70" src='/sounds/F4.mp3'></audio>
        <audio data-key="76" src='/sounds/D5.mp3'></audio>
        <audio data-key="79" src='/sounds/Db5.mp3'></audio>
        <audio data-key="75" src='/sounds/C5.mp3'></audio>
        <audio data-key="85" src='/sounds/Bb4.mp3'></audio>
        <audio data-key="81" src='/sounds/Bb3.mp3'></audio>
      </div>
    </div>
  )
}

export default HarryPotter