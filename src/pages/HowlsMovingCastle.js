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
        <audio data-key="65" src='/my-piano/sounds/D4.mp3'></audio>
        <audio data-key="68" src='/my-piano/sounds/G4.mp3'></audio>
        <audio data-key="70" src='/my-piano/sounds/A4.mp3'></audio>
        <audio data-key="84" src='/my-piano/sounds/Bb4.mp3'></audio>
        <audio data-key="71" src='/my-piano/sounds/B4.mp3'></audio>
        <audio data-key="72" src='/my-piano/sounds/C5.mp3'></audio>
        <audio data-key="85" src='/my-piano/sounds/Db5.mp3'></audio>
        <audio data-key="74" src='/my-piano/sounds/D5.mp3'></audio>
        <audio data-key="73" src='/my-piano/sounds/Eb5.mp3'></audio>
        <audio data-key="75" src='/my-piano/sounds/E5.mp3'></audio>
        <audio data-key="76" src='/my-piano/sounds/F5.mp3'></audio>
        <audio data-key="80" src='/my-piano/sounds/Gb5.mp3'></audio>
        <audio data-key="186" src='/my-piano/sounds/G5.mp3'></audio>
        <audio data-key="219" src='/my-piano/sounds/Ab5.mp3'></audio>
        <audio data-key="222" src='/my-piano/sounds/A5.mp3'></audio>
      </div>
    </div>
  )
}

export default HowlsMovingCastle