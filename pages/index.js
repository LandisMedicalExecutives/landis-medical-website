import React from 'react';

const IndexPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#333', color: '#fff' }}>
        <div style={{ fontSize: '24px' }}>Landis Medical Executives</div>
        <div>
          <a href="#" style={{ color: '#fff', margin: '0 15px' }}>Home</a>
          <a href="#" style={{ color: '#fff', margin: '0 15px' }}>Services</a>
          <a href="#" style={{ color: '#fff', margin: '0 15px' }}>About</a>
          <a href="#" style={{ color: '#fff', margin: '0 15px' }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ background: '#f5f5f5', padding: '50px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px' }}>Welcome to Landis Medical Executives</h1>
        <p style={{ fontSize: '20px' }}>Your health is our priority</p>
      </header>

      {/* Services Section */}
      <section style={{ padding: '50px', background: '#fff' }}>
        <h2 style={{ textAlign: 'center' }}>Our Services</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ width: '30%' }}>
            <h3>Service 1</h3>
            <p>Details of service 1.</p>
          </div>
          <div style={{ width: '30%' }}>
            <h3>Service 2</h3>
            <p>Details of service 2.</p>
          </div>
          <div style={{ width: '30%' }}>
            <h3>Service 3</h3>
            <p>Details of service 3.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '50px', background: '#f5f5f5' }}>
        <h2 style={{ textAlign: 'center' }}>About Us</h2>
        <p style={{ textAlign: 'center' }}>Information about the company and its mission.</p>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '50px', background: '#fff' }}>
        <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" placeholder="Name" style={{ margin: '10px', padding: '10px', width: '300px' }} />
          <input type="email" placeholder="Email" style={{ margin: '10px', padding: '10px', width: '300px' }} />
          <textarea placeholder="Message" style={{ margin: '10px', padding: '10px', width: '300px', height: '100px' }}></textarea>
          <button type="submit" style={{ padding: '10px 20px', background: '#333', color: '#fff' }}>Send</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer style={{ padding: '20px', background: '#333', color: '#fff', textAlign: 'center' }}>
        <p>&copy; 2026 Landis Medical Executives. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IndexPage;