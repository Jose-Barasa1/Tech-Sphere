import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState('');
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review || !username) return alert('Please enter both a username and a review!');
    const newReview = { username, review, rating, id: reviews.length + 1 };
    setReviews([...reviews, newReview]);
    setUsername('');
    setReview('');
    setRating(5);
  };

  const handleStarClick = (star) => setRating(star);

  return (
    <div className="container mt-4">
      <h2>Customer Reviews for Our App</h2>

      {/* Review Form */}
      <div className="review-form mb-4">
        <h4>Leave a Review</h4>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Your Name</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Review Text */}
          <div className="mb-3">
            <label htmlFor="review" className="form-label">Write a Review</label>
            <textarea
              id="review"
              className="form-control"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>

          {/* Star Rating */}
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${rating >= star ? 'filled' : ''}`}
                  onClick={() => handleStarClick(star)}
                  style={{
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: rating >= star ? '#FFD700' : '#ddd',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      {/* Display Reviews */}
      <div className="reviews-list mt-4">
        <h4>All Reviews</h4>
        <ul className="list-unstyled">
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to leave one!</p>
          ) : (
            reviews.map((r) => (
              <li key={r.id} className="d-flex mb-4">
                <div>
                  <strong>{r.username}</strong> (Rating: {r.rating || 'No rating'})
                  <p>{r.review}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;