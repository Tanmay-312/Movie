import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

import img1 from './assets/images/Inception.png'
import img2 from './assets/images/Matrix.jpg'
import img3 from './assets/images/Titanic.jpg'
import img4 from './assets/images/Pursuit.jpg'
import img5 from './assets/images/Arrival.jpg'
import img6 from './assets/images/Interstellar.jpg'
import img7 from './assets/images/Reptile.jpg'
import img8 from './assets/images/Mind.jpg'

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller.',
      imgSrc: img1,
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'A sci-fi classic.',
      imgSrc: img2,
      reviews: [{ text: 'Amazing effects!', id: 1 }],
    },
    {
      id: 3,
      title: 'Titanic',
      description: 'A Romantic Thriller Story.',
      imgSrc: img3,
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 4,
      title: 'The Pursuit of Happyness',
      description: 'A Fathers Love towards his Son Through all the hardships',
      imgSrc: img4,
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 5,
      title: 'Arrival',
      description: 'Sci Fi Based',
      imgSrc: img5,
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
    id: 6,
    title: 'Interstellar',
    description: 'Time Travel',
    imgSrc: img6,
    reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 7,
      title: 'Reptile',
      description: 'Suspensefull',
      imgSrc: img7,
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 8,
      title: 'A Beautiful Mind',
      description: 'Biopics',
      imgSrc: img8,
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editReviewIndex, setEditReviewIndex] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setEditReviewIndex(null);
  };

  const handleReviewSubmit = (review, index = null) => {
    if (index !== null) {
      // Edit existing review
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === selectedMovie.id
            ? {
                ...movie,
                reviews: movie.reviews.map((rev, i) =>
                  i === index ? { ...rev, text: review } : rev
                ),
              }
            : movie
        )
      );
    } else {
      // Add new review
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === selectedMovie.id
            ? {
                ...movie,
                reviews: [...movie.reviews, { text: review, id: movie.reviews.length + 1 }],
              }
            : movie
        )
      );
    }
    setEditReviewIndex(null);
  };

  const handleReviewDelete = (reviewIndex) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === selectedMovie.id
          ? {
              ...movie,
              reviews: movie.reviews.filter((_, index) => index !== reviewIndex),
            }
          : movie
      )
    );
  };

  const handleReviewEdit = (index) => {
    setEditReviewIndex(index);
  };

  return (
    <div className="app">
      <h1>Movie Review App</h1>
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onReviewSubmit={handleReviewSubmit}
          onReviewDelete={handleReviewDelete}
          onReviewEdit={handleReviewEdit}
          editReviewIndex={editReviewIndex}
        />
      ) : (
        <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
      )}
    </div>
  );
};

export default App;

