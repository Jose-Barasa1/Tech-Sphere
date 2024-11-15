import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  // Validate email format (basic)
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email format.');
      return;
    }

    // Simulate the subscription (replace with actual API call)
    setIsSubscribed(true);
    setMessage('Thank you for subscribing to our newsletter!');

    // Clear the email input
    setEmail('');

    // Redirect to the home page or another page after subscription
    setTimeout(() => {
      navigate('/');  // Navigate to home or any other route
    }, 2000);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
            <h2 className="text-center mb-4" style={{ color: '#4CAF50' }}>Stay Updated with TechSphere</h2>
            <p className="text-center mb-4">Subscribe to our newsletter for the latest updates, tech news, and offers.</p>

            {isSubscribed ? (
              <div className="alert alert-success" role="alert">
                {message}
              </div>
            ) : (
              <>
                <form onSubmit={handleSubscribe}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>

                  {message && !isSubscribed && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {message}
                    </div>
                  )}

                  <button type="submit" className="btn btn-success w-100 mt-3">
                    Subscribe Now
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <p>Already subscribed? <Link to="/about">Manage your preferences</Link></p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
