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
          <h1>해리포터</h1>
        </div>
        <div className="movie-note">

        </div>
      </div>
    </div>
  )
}

export default HarryPotter