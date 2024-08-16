import React from 'react';
import './MovieList.css';

export const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => onMovieSelect(movie)}>
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

