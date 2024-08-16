import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import incep from './assets/images/Inception.png';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller.',
      imgSrc: incep,
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'A sci-fi classic.',
      
      reviews: [{ text: 'Amazing effects!', id: 1 }],
    },
    {
      id: 3,
      title: 'Titanic',
      description: 'A Romantic Thriller Story.',
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 4,
      title: 'The Pursuit of Happyness',
      description: 'A Fathers Love towards his Son Through all the hardships',
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 5,
      title: 'Arrival',
      description: 'Sci Fi Based',
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
    id: 6,
    title: 'Interstellar',
    description: 'Time Travel',
    reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 7,
      title: 'Arrival',
      description: 'Sci Fi Based',
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 8,
      title: 'Reptile',
      description: 'Suspensefull',
      reviews: [{ text: 'Great movie!', id: 1 }],
    },
    {
      id: 9,
      title: 'A Beautiful Mind',
      description: 'Biopics',
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

