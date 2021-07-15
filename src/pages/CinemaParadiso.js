import React from 'react';
import '../css/Movie.css'

function CinemaParadiso() {
  function playSound(e) {
    const movie = document.querySelector('.movie')

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    if (!movie.classList.contains('cinemaparadiso')) {
      movie.classList.add('cinemaparadiso')
    }

    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound)

  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-title">
          <img src="images/cinemaparadiso_logo.jpeg" alt="cinemaparadiso_logo"></img>
        </div>
        <div className="movie-note">
          <h2>Y AWYGF GJD WWA</h2>
          <br></br>
          <h2>ADG JYGYK FEF;O</h2>
          <br></br>
          <h2>J';;OKJY</h2>
          <br></br>
          <h2>YJYGDF GYG</h2>
        </div>
        <audio data-key="65" src='/sounds/D4.mp3'></audio>
        <audio data-key="87" src='/sounds/Eb4.mp3'></audio>
        <audio data-key="68" src='/sounds/F4.mp3'></audio>
        <audio data-key="70" src='/sounds/G4.mp3'></audio>
        <audio data-key="71" src='/sounds/A4.mp3'></audio>
        <audio data-key="89" src='/sounds/Bb4.mp3'></audio>
        <audio data-key="74" src='/sounds/C5.mp3'></audio>
        <audio data-key="75" src='/sounds/D5.mp3'></audio>
        <audio data-key="69" src='/sounds/Gb4.mp3'></audio>
        <audio data-key="186" src='/sounds/F5.mp3'></audio>
        <audio data-key="79" src='/sounds/Eb5.mp3'></audio>
        <audio data-key="222" src='/sounds/G5.mp3'></audio>
      </div>
    </div>
  )
}

export default CinemaParadiso