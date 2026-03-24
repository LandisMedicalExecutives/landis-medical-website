import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Landis Medical Executives - Advanced Pain Management</title>
        <meta name="description" content="Professional pain management and healthcare solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #333;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          text-decoration: none;
          color: inherit;
          -webkit-tap-highlight-color: transparent;
        }

        button {
          cursor: pointer;
          border: none;
          font-family: inherit;
          -webkit-tap-highlight-color: transparent;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .btn {
          display: inline-block;
          padding: 12px 30px;
          border-radius: 6px;
          font-weight: bold;
          transition: all 0.3s ease;
          text-align: center;
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
        }

        .btn-blue {
          background-color: #0066cc;
          color: white;
        }

        .btn-blue:hover,
        .btn-blue:active {
          background-color: #0052a3;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 102, 204, 0.3);
        }

        .btn-white {
          background-color: white;
          color: #0066cc;
        }

        .btn-white:hover,
        .btn-white:active {
          background-color: #f0f0f0;
        }

        .service-card:active {
          transform: translateY(-8px);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.2) !important;
        }

        .icon-box {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 5px 15px rgba(0, 102, 204, 0.3);
          flex-shrink: 0;
        }

        .icon-box i {
          font-size: 40px;
          color: white;
        }

        .reason-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          flex-shrink: 0;
        }

        .reason-icon i {
          font-size: 35px;
          color: white;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }

          .btn {
            padding: 14px 24px;
            font-size: 16px;
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div className="container" style={styles.navContainer}>
          <div style={styles.logo}>
            <img 
              src="/images/logo.png (Landis Medical logo).png" 
              alt="Landis Medical Logo"
              style={styles.logoImg}
            />
          </div>
          <a href="tel:856-213-2737" className="btn btn-blue" style={styles.navButton}>
            <i className="fas fa-phone" style={{marginRight: '8px'}}></i>
            <span style={{display: {__html: 'none'}}} />
            <span style={{display: 'inline'}}>Call</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div className="container" style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Advanced Pain Management Solutions</h1>
          <p style={styles.heroSubtitle}>Delivering expert care through innovation and compassion</p>
          <a href="tel:856-213-2737" className="btn btn-white" style={styles.heroButton}>
            <i className="fas fa-phone" style={{marginRight: '8px'}}></i>
            Call Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.about}>
        <div className="container">
          <h2 style={styles.sectionTitle}>About Landis Medical Executives</h2>
          <p style={styles.aboutText}>
            With years of experience and a dedicated team of professionals, Landis Medical is committed to improving patient outcomes through evidence-based practices and innovative treatments.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.services}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <div style={styles.servicesGrid}>
            {/* Service Card 1 */}
            <div style={styles.serviceCard} className="service-card">
              <div className="icon-box">
                <i className="fas fa-syringe"></i>
              </div>
              <h3 style={styles.serviceTitle}>Interventional Pain Management</h3>
              <p style={styles.serviceDescription}>
                Innovative and minimally invasive procedures designed to provide relief from acute and chronic pain conditions.
              </p>
            </div>

            {/* Service Card 2 */}
            <div style={styles.serviceCard} className="service-card">
              <div className="icon-box">
                <i className="fas fa-flask-vial"></i>
              </div>
              <h3 style={styles.serviceTitle}>Diagnostic Testing & Care Coordination</h3>
              <p style={styles.serviceDescription}>
                Comprehensive diagnostic services with coordinated care management for optimal patient outcomes.
              </p>
            </div>

            {/* Service Card 3 */}
            <div style={styles.serviceCard} className="service-card">
              <div className="icon-box">
                <i className="fas fa-gavel"></i>
              </div>
              <h3 style={styles.serviceTitle}>Strategic Mid-Legal Support</h3>
              <p style={styles.serviceDescription}>
                Expert guidance bridging medical care and legal case management for personal injury matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={styles.whyChoose}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Why Choose Landis Medical?</h2>
          <div style={styles.reasonsGrid}>
            <div style={styles.reasonCard}>
              <div className="reason-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 style={styles.reasonTitle}>Expert Team</h3>
              <p>Highly trained medical professionals with years of experience</p>
            </div>
            <div style={styles.reasonCard}>
              <div className="reason-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 style={styles.reasonTitle}>Proven Results</h3>
              <p>Thousands of successful treatments and satisfied patients</p>
            </div>
            <div style={styles.reasonCard}>
              <div className="reason-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3 style={styles.reasonTitle}>Patient Care</h3>
              <p>Personalized care plans focused on your well-being</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contact}>
        <div className="container">
          <h2 style={styles.contactTitle}>Ready to Start Your Journey?</h2>
          <p style={styles.contactSubtitle}>Contact us today to schedule your consultation</p>
          
          <div style={styles.contactBox}>
            <div style={styles.contactInfo}>
              <div style={styles.phoneNumber}>856-213-2737</div>
              <p style={styles.contactHours}>Monday - Friday, 9:00 AM - 5:00 PM EST</p>
            </div>
            <a href="tel:856-213-2737" className="btn btn-white" style={styles.contactButton}>
              <i className="fas fa-phone" style={{marginRight: '8px'}}></i>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.footerContent}>
            <div>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '10px'}}>
                <img 
                  src="/images/logo.png (Landis Medical logo).png" 
                  alt="Landis Medical Logo"
                  style={{height: '40px', width: 'auto'}}
                />
                <h4 style={{...styles.footerTitle, margin: 0, fontSize: '16px'}}>Landis Medical</h4>
              </div>
              <p style={{fontSize: '14px', lineHeight: '1.5'}}>Delivering advanced pain management solutions with innovation and compassion.</p>
            </div>
            <div>
              <h4 style={styles.footerTitle}>Quick Links</h4>
              <ul style={styles.footerList}>
                <li style={{marginBottom: '8px'}}><a href="#about"><i className="fas fa-chevron-right" style={{marginRight: '8px'}}></i>About Us</a></li>
                <li style={{marginBottom: '8px'}}><a href="#services"><i className="fas fa-chevron-right" style={{marginRight: '8px'}}></i>Services</a></li>
                <li><a href="#contact"><i className="fas fa-chevron-right" style={{marginRight: '8px'}}></i>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={styles.footerTitle}>Contact</h4>
              <p style={{marginBottom: '8px'}}><a href="tel:856-213-2737" style={styles.footerLink}><i className="fas fa-phone" style={{marginRight: '8px'}}></i>856-213-2737</a></p>
              <p style={styles.footerText}><i className="fas fa-clock" style={{marginRight: '8px'}}></i>Hours: Mon-Fri, 9AM-5PM EST</p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={{fontSize: '13px'}}>&copy; 2026 Landis Medical Executives. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles = {
  // Navbar
  navbar: {
    backgroundColor: '#ffffff',
    color: '#0066cc',
    padding: '12px 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderBottom: '3px solid #0066cc',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '70px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  logoImg: {
    height: 'auto',
    maxHeight: '65px',
    width: 'auto',
    maxWidth: '200px',
    objectFit: 'contain',
  },
  navButton: {
    padding: '10px 16px',
    marginLeft: 'auto',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    minHeight: '44px',
  },

  // Hero Section
  hero: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    padding: '40px 0',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: 'clamp(28px, 6vw, 56px)',
    fontWeight: 'bold',
    marginBottom: '16px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: 'clamp(16px, 4.5vw, 24px)',
    marginBottom: '24px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
  },
  heroButton: {
    marginTop: '20px',
    fontSize: '16px',
    padding: '14px 28px',
    minHeight: '48px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },

  // Section Titles
  sectionTitle: {
    fontSize: 'clamp(28px, 6vw, 42px)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#0066cc',
    lineHeight: '1.2',
  },

  // About Section
  about: {
    padding: '40px 0',
    backgroundColor: '#f9f9f9',
  },
  aboutText: {
    fontSize: 'clamp(16px, 4vw, 18px)',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#555',
  },

  // Services Section
  services: {
    padding: '40px 0',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  '@media (min-width: 768px)': {
    servicesGrid: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: '30px 24px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
  },
  serviceTitle: {
    fontSize: 'clamp(18px, 4.5vw, 24px)',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#0066cc',
    lineHeight: '1.3',
  },
  serviceDescription: {
    fontSize: 'clamp(14px, 3.5vw, 16px)',
    color: '#666',
    lineHeight: '1.6',
  },

  // Why Choose Us
  whyChoose: {
    padding: '40px 0',
    backgroundColor: '#e6f0ff',
  },
  reasonsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  reasonCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  reasonTitle: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#0066cc',
  },

  // Contact Section
  contact: {
    padding: '40px 0',
    backgroundColor: '#003d99',
    color: 'white',
    textAlign: 'center',
  },
  contactTitle: {
    fontSize: 'clamp(24px, 6vw, 42px)',
    fontWeight: 'bold',
    marginBottom: '12px',
    lineHeight: '1.2',
  },
  contactSubtitle: {
    fontSize: 'clamp(14px, 4vw, 18px)',
    marginBottom: '24px',
    color: '#cce5ff',
  },
  contactBox: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '30px 20px',
    borderRadius: '10px',
    maxWidth: '500px',
    margin: '0 auto',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  contactInfo: {
    marginBottom: '24px',
  },
  phoneNumber: {
    fontSize: 'clamp(28px, 8vw, 48px)',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  contactHours: {
    fontSize: 'clamp(14px, 3.5vw, 16px)',
    color: '#cce5ff',
  },
  contactButton: {
    fontSize: '16px',
    padding: '14px 28px',
    minHeight: '48px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },

  // Footer
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ccc',
    padding: '40px 0 20px',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #444',
  },
  footerTitle: {
    color: 'white',
    marginBottom: '12px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  footerList: {
    listStyle: 'none',
    fontSize: '14px',
  },
  footerLink: {
    color: '#0099ff',
  },
  footerText: {
    fontSize: '14px',
    color: '#999',
  },
  footerBottom: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#777',
  },
};
