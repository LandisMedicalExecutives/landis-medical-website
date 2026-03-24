import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <>
      <Head>
        <title>Landis Medical - Advanced Pain Management</title>
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
          font-family: 'Segoe UI', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #2c3e50;
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
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-align: center;
          cursor: pointer;
          -webkit-user-select: none;
          user-select: none;
          letter-spacing: 0.5px;
        }

        .btn-blue {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.2);
        }

        .btn-blue:hover {
          background: linear-gradient(135deg, #0052a3 0%, #003d7a 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.3);
        }

        .btn-white {
          background-color: white;
          color: #0066cc;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-white:hover {
          background-color: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .service-card:active {
          transform: translateY(-8px);
        }

        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
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
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.2);
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
          box-shadow: 0 6px 20px rgba(0, 102, 204, 0.15);
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
          <h2 style={styles.sectionTitle}>About Landis Medical</h2>
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
                Innovative and minimally invasive procedures designed to provide relief from acute conditions subsequent to motor vehicle accidents.
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
              <h3 style={styles.serviceTitle}>Strategic Med-Legal Support</h3>
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
            <p style={{fontSize: '13px'}}>&copy; 2026 Landis Medical. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#ffffff',
    color: '#0066cc',
    padding: '16px 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    borderBottom: 'none',
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
    maxHeight: '100px',
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
  hero: {
  backgroundImage: 'url("/hero-doctor.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    padding: '60px 20px',
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
    fontSize: 'clamp(32px, 6vw, 56px)',
    fontWeight: 700,
    marginBottom: '16px',
    textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
    lineHeight: '1.2',
    letterSpacing: '-0.5px',
  },
  heroSubtitle: {
    fontSize: 'clamp(18px, 4.5vw, 24px)',
    marginBottom: '30px',
    textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
    fontWeight: 300,
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
  sectionTitle: {
    fontSize: 'clamp(32px, 6vw, 42px)',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '50px',
    color: '#1a3a52',
    lineHeight: '1.2',
    letterSpacing: '-0.5px',
  },
  about: {
    padding: '60px 0',
    backgroundColor: '#f8fafc',
  },
  aboutText: {
    fontSize: 'clamp(16px, 4vw, 18px)',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#555',
    fontWeight: 400,
  },
  services: {
    padding: '60px 0',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  },
  serviceTitle: {
    fontSize: 'clamp(20px, 4.5vw, 24px)',
    fontWeight: 700,
    marginBottom: '12px',
    color: '#1a3a52',
    lineHeight: '1.3',
  },
  serviceDescription: {
    fontSize: 'clamp(14px, 3.5vw, 16px)',
    color: '#666',
    lineHeight: '1.7',
  },
  whyChoose: {
    padding: '60px 0',
    backgroundColor: '#f0f4f8',
  },
  reasonsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',
  },
  reasonCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  },
  reasonTitle: {
    fontSize: 'clamp(18px, 4vw, 20px)',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#1a3a52',
  },
  contact: {
    padding: '60px 0',
    backgroundColor: '#0d2438',
    color: 'white',
    textAlign: 'center',
  },
  contactTitle: {
    fontSize: 'clamp(28px, 6vw, 42px)',
    fontWeight: 700,
    marginBottom: '12px',
    lineHeight: '1.2',
    letterSpacing: '-0.5px',
  },
  contactSubtitle: {
    fontSize: 'clamp(16px, 4vw, 18px)',
    marginBottom: '30px',
    color: '#b0c4de',
    fontWeight: 300,
  },
  contactBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: '40px 30px',
    borderRadius: '12px',
    maxWidth: '500px',
    margin: '0 auto',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
  },
  contactInfo: {
    marginBottom: '24px',
  },
  phoneNumber: {
    fontSize: 'clamp(28px, 8vw, 48px)',
    fontWeight: 700,
    marginBottom: '10px',
  },
  contactHours: {
    fontSize: 'clamp(14px, 3.5vw, 16px)',
    color: '#b0c4de',
  },
  contactButton: {
    fontSize: '16px',
    padding: '14px 28px',
    minHeight: '48px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ccc',
    padding: '50px 0 20px',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: '1px solid #333',
  },
  footerTitle: {
    color: 'white',
    marginBottom: '12px',
    fontWeight: 700,
    fontSize: '16px',
  },
  footerList: {
    listStyle: 'none',
    fontSize: '14px',
  },
  footerLink: {
    color: '#64b5f6',
  },
  footerText: {
    fontSize: '14px',
    color: '#999',
  },
  footerBottom: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#666',
  },
};
