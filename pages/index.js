// Import required libraries and components
import React from 'react';
import './styles.css';

function IndexPage() {
  return (
    <div className="hero" style={{ backgroundImage: 'url(/path/to/doctor-clipboard-photo.jpg)' }}>
      <h1>About Landis Medical</h1>
      <p>Innovative and minimally invasive procedures designed to provide relief from acute conditions subsequent to motor vehicle accidents.</p>
      <section className="services">
        <h2>Services</h2>
        <h3>Strategic Med-Legal Support</h3>
        <p>Details about our Med-Legal support services...</p>
      </section>
      <button className="cta-button">Learn More</button>
    </div>
  );
}

export default IndexPage;

/* styles.css updates for better styling */
.hero {
  padding: 50px;
  text-align: center;
  color: #fff;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cta-button {
  padding: 10px 20px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #004494;
}

.services {
  margin-top: 20px;
  text-align: left;
}
