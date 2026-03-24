import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header className="hero-section">
        <h1>Welcome to Landis Medical Executives</h1>
        <p>Your partner in healthcare excellence.</p>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <p>We are dedicated to providing top-quality healthcare solutions tailored to your needs.</p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-boxes">
          <div className="box">
            <h3>Interventional Pain Management</h3>
            <p>Innovative approaches to pain management and relief.</p>
          </div>
          <div className="box">
            <h3>Diagnostic Testing & Care Coordination</h3>
            <p>Comprehensive testing and personalized care coordination.</p>
          </div>
          <div className="box">
            <h3>Strategic Mid-Legal Support</h3>
            <p>Expertise in navigating the complexities of mid-legal processes.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us for more information about our services.</p>
      </section>
    </div>
  );
};

export default HomePage;