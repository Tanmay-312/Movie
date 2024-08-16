import React, { useState, useEffect } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onSubmit, editReviewText }) => {
  const [review, setReview] = useState('');

  useEffect(() => {
    setReview(editReviewText || '');
  }, [editReviewText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      onSubmit(review);
      setReview('');
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
      ></textarea>
      <button type="submit">{editReviewText ? 'Update Review' : 'Submit Review'}</button>
    </form>
  );
};

export default ReviewForm;
