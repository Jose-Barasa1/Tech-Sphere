import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-dark">About Us</h2>

      {/* About Content Box */}
      <div className="p-4 border border-light rounded shadow-sm bg-light">
        <h4 className="text-center mb-3">Our Mission</h4>
        <p className="text-muted">
          At TechSphere, we are deeply passionate about bridging the gap in accessing electronic products, especially for underserved communities. By making technology more affordable and accessible, we strive to empower individuals and businesses with the tools they need to succeed. Our mission is to break down barriers, so that everyone, regardless of their background or location, can harness the transformative power of technology.
        </p>
        <p className="text-muted">
          We provide a wide range of quality items at affordable prices, ensuring that shopping with us is simple, fun, and convenient for everyone. Our commitment to customer satisfaction and service sets us apart from the rest. We believe in the power of technology to change lives, and we are here to make that happen for you.
        </p>
      </div>

      {/* Optional Contact Us Button */}
      <div className="text-center mt-4">
        <a href="/contact" className="btn btn-primary btn-lg">Contact Us</a>
      </div>
    </div>
  );
};

export default About;
