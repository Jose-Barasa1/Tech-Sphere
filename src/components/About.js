import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      
      {/* Container for the image and name */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {/* Image */}
        <img 
          src={`${process.env.PUBLIC_URL}/IMG_20241105_123905_411.jpg`} 
          alt="Founder Jose" 
          style={{ width: '150px', height: 'auto', borderRadius: '50%', marginRight: '20px' }} 
        />
        
        {/* Name Tag */}
        <div>
          <p style={{ margin: 0, fontWeight: 'bold' }}>Founder: Jose'</p>
        </div>
      </div>

      <p>At TechSphere, we are deeply passionate about bridging the gap in accessing electronic products, especially for underserved communities. By making technology more affordable and accessible, we strive to empower individuals and businesses with the tools they need to succeed. Our mission is to break down barriers, so that everyone, regardless of their background or location, can harness the transformative power of technology.</p>
      
      <p>We provide a wide range of quality items at affordable prices, ensuring that shopping with us is simple, fun, and convenient for everyone.</p>
    </div>
  );
};

export default About;
