import React from 'react';
import '../css/Movie.css'

function Amelie() {
  function playSound(e) {
    const movie = document.querySelector('.movie');

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    if (!movie.classList.contains('amelie')) {
      movie.classList.add('amelie')
    }

    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound)

  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-title">
          <img src="images/amelie_logo.png" alt="amelie_logo"></img>
        </div>
        <div className="movie-note">
          <h2>J HG FJ KJHGHG</h2>
          <h2>FH GA H JHGHGA</h2>
          <br></br>
          <h2>J HG FJ KJHGHG</h2>
          <h2>FH GA H JHGHGA</h2>
          <br></br>
          <h2>J JHG F J JHG F</h2>
          <h2>H HGD A H HGD A</h2>
        </div>
        <audio data-key="75" src='/my-piano/sounds/E5.mp3'></audio>
        <audio data-key="74" src='/my-piano/sounds/D5.mp3'></audio>
        <audio data-key="72" src='/my-piano/sounds/C5.mp3'></audio>
        <audio data-key="71" src='/my-piano/sounds/B4.mp3'></audio>
        <audio data-key="70" src='/my-piano/sounds/A4.mp3'></audio>
        <audio data-key="68" src='/my-piano/sounds/G4.mp3'></audio>
        <audio data-key="83" src='/my-piano/sounds/F4.mp3'></audio>
        <audio data-key="65" src='/my-piano/sounds/E4.mp3'></audio>
      </div>
    </div>
  )
}

export default Amelie