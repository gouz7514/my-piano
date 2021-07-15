import React from 'react';
import '../css/Movie.css'

function Tiffany() {
  function playSound(e) {
    const movie = document.querySelector('.movie')

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;

    if (!movie.classList.contains('tiffany')) {
      movie.classList.add('tiffany')
    }

    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound)

  return (
    <div className="movie">
      <div className="movie-container">
        <div className="movie-title">
          <img src="images/tiffany_logo.png" alt="tiffany_logo"></img>
        </div>
        <div className="movie-note">
          <h2>T LI J HTRT</h2>
          <br></br>
          <h2>Q J HTRT</h2>
          <br></br>
          <h2>QS DQ TDSQ TDS</h2>
          <br></br>
          <h2>QDT IJH JHT HT</h2>
        </div>
        <audio data-key="84" src='/sounds/Bb4.mp3'></audio>
        <audio data-key="76" src='/sounds/F5.mp3'></audio>
        <audio data-key="73" src='/sounds/Eb5.mp3'></audio>
        <audio data-key="74" src='/sounds/D5.mp3'></audio>
        <audio data-key="72" src='/sounds/C5.mp3'></audio>
        <audio data-key="82" src='/sounds/Ab4.mp3'></audio>
        <audio data-key="81" src='/sounds/Eb4.mp3'></audio>
        <audio data-key="83" src='/sounds/F4.mp3'></audio>
        <audio data-key="68" src='/sounds/G4.mp3'></audio>
      </div>
    </div>
  )
}

export default Tiffany