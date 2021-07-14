import React from 'react';
import '../css/Movie.css'

function CinemaParadiso() {
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
        <h1>시네마 천국</h1>
      </div>
    </div>
  )
}

export default CinemaParadiso