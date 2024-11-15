import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ cart = [] }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/signin');
  };

  // Calculate the number of items in the cart
  const itemCount = cart.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <Link className="navbar-brand mx-auto" to="/">
          <i className="fa fa-cogs me-2"></i> TechSphere
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fa fa-home me-2"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fa fa-info-circle me-2"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews">
                <i className="fa fa-comments me-2"></i> Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                <i className="fa fa-list me-2"></i> Menu
              </Link>
            </li>

            {/* Cart with item count */}
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <i className="fa fa-shopping-cart me-2"></i> Cart
                {itemCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white"
                    style={{
                      fontSize: '12px',
                      padding: '5px',
                    }}
                  >
                    ({itemCount})
                  </span>
                )}
              </Link>
            </li>

            {/* Newsletter link */}
            <li className="nav-item">
              <Link className="nav-link" to="/newsletter">
                <i className="fa fa-envelope me-2"></i> Newsletter
              </Link>
            </li>

            {/* Conditionally render Sign Up / Sign In / Log Out */}
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    <i className="fa fa-user-plus me-2"></i> Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    <i className="fa fa-sign-in me-2"></i> Sign In
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="nav-link btn" onClick={handleLogout}>
                  <i className="fa fa-sign-out me-2"></i> Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
