import React, { useState } from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, onReviewSubmit, onReviewDelete, onReviewEdit, editReviewIndex }) => {
  const [reviewText, setReviewText] = useState(editReviewIndex !== null ? movie.reviews[editReviewIndex].text : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit(reviewText, editReviewIndex);
    setReviewText('');
  };

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.image} alt={movie.title} className="movie-image" />

      <h3>Reviews:</h3>
      <div className="review-list">
        {movie.reviews.map((review, index) => (
          <div key={review.id} className="review-item">
            <p>{review.text}</p>
            <button className="edit-button" onClick={() => onReviewEdit(index)}>Edit</button>
            <button className="delete-button" onClick={() => onReviewDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here..."
          required
        ></textarea>
        <button type="submit">{editReviewIndex !== null ? 'Update Review' : 'Add Review'}</button>
      </form>
    </div>
  );
};

export default MovieDetails;


