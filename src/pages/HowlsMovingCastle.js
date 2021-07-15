import React from 'react';
import '../css/Movie.css'

function HowlsMovingCastle() {
  function playSound(e) {
    const movie = document.querySelector('.movie');

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    if (!movie.classList.contains('howlsmovingcastle')) {
      movie.classList.add('howlsmovingcastle')
    }

    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound)

  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-title">
          <img src="images/howlsmovingcastle_logo.png" alt="howlsmovingcastle_logo"></img>
        </div>
        <div className="movie-note">
          <h2>ADTJ HTFT</h2>
          <br></br>
          <h2>DTJ; ;;LIL</h2>
          <br></br>
          <h2>FJL '; LKIK</h2>
          <br></br>
          <h2>;L KJUJ</h2>
          <br></br>
          <h2>JHTF GUJ</h2>
        </div>
        <audio data-key="65" src='/sounds/D4.mp3'></audio>
        <audio data-key="68" src='/sounds/G4.mp3'></audio>
        <audio data-key="70" src='/sounds/A4.mp3'></audio>
        <audio data-key="84" src='/sounds/Bb4.mp3'></audio>
        <audio data-key="71" src='/sounds/B4.mp3'></audio>
        <audio data-key="72" src='/sounds/C5.mp3'></audio>
        <audio data-key="85" src='/sounds/Db5.mp3'></audio>
        <audio data-key="74" src='/sounds/D5.mp3'></audio>
        <audio data-key="73" src='/sounds/Eb5.mp3'></audio>
        <audio data-key="75" src='/sounds/E5.mp3'></audio>
        <audio data-key="76" src='/sounds/F5.mp3'></audio>
        <audio data-key="80" src='/sounds/Gb5.mp3'></audio>
        <audio data-key="186" src='/sounds/G5.mp3'></audio>
        <audio data-key="219" src='/sounds/Ab5.mp3'></audio>
        <audio data-key="222" src='/sounds/A5.mp3'></audio>
      </div>
    </div>
  )
}

export default HowlsMovingCastle