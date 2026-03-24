import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Landis Medical Executives - Advanced Pain Management</title>
        <meta name="description" content="Professional pain management and healthcare solutions" />
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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          cursor: pointer;
          border: none;
          font-family: inherit;
        }

        img {
          max-width: 100%;
          height: auto;
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
        }

        .btn-primary {
          background-color: #0066cc;
          color: white;
        }

        .btn-primary:hover {
          background-color: #0052a3;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 102, 204, 0.3);
        }

        .btn-white {
          background-color: white;
          color: #0066cc;
        }

        .btn-white:hover {
          background-color: #f0f0f0;
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
        }

        .reason-icon i {
          font-size: 35px;
          color: white;
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
          <a href="tel:856-213-2737" className="btn btn-white" style={styles.navButton}>
            <i className="fas fa-phone" style={{marginRight: '8px'}}></i>
            856-213-2737
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div className="container" style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Advanced Pain Management Solutions</h1>
          <p style={styles.heroSubtitle}>Delivering expert care through innovation, precision, and compassion</p>
          <a href="tel:856-213-2737" className="btn btn-white" style={{...styles.heroButton, fontSize: '18px', padding: '15px 40px'}}>
            <i className="fas fa-phone" style={{marginRight: '8px'}}></i>
            Call Now: 856-213-2737
          </a>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.about}>
        <div className="container">
          <h2 style={styles.sectionTitle}>About Landis Medical Executives</h2>
          <p style={styles.aboutText}>
            With years of experience and a dedicated team of professionals, Landis Medical is committed to improving patient outcomes through evidence-based practices and innovative treatments. Our mission is to provide exceptional medical care that combines cutting-edge technology with compassionate patient support.
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
            <a href="tel:856-213-2737" className="btn btn-white" style={{fontSize: '16px', padding: '12px 30px'}}>
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
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                <img 
                  src="/images/logo.png (Landis Medical logo).png" 
                  alt="Landis Medical Logo"
                  style={{height: '50px', marginRight: '10px'}}
                />
                <h4 style={{...styles.footerTitle, margin: 0}}>Landis Medical Executives</h4>
              </div>
              <p>Delivering advanced pain management solutions with innovation and compassion.</p>
            </div>
            <div>
              <h4 style={styles.footerTitle}>Quick Links</h4>
              <ul style={styles.footerList}>
                <li><a href="#about"><i className="fas fa-chevron-right" style={{marginRight: '8px'}}></i>About Us</a></li>
                <li><a href="#services"><i className="fas fa-chevron-right" style={{marginRight: '8px'}}></i>Services</a></li>
                <li><a href="#contact"><i className="fas fa-chevron-right" style={{marginRight: '8px'}}></i>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={styles.footerTitle}>Contact</h4>
              <p><a href="tel:856-213-2737" style={styles.footerLink}><i className="fas fa-phone" style={{marginRight: '8px'}}></i>856-213-2737</a></p>
              <p style={styles.footerText}><i className="fas fa-clock" style={{marginRight: '8px'}}></i>Hours: Mon-Fri, 9AM-5PM EST</p>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p>&copy; 2026 Landis Medical Executives. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles = {
  // Navbar
  navbar: {
    backgroundColor: '#0066cc',
    color: 'white',
    padding: '20px 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '80px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  logoImg: {
    height: '75px',
    width: 'auto',
    objectFit: 'contain',
  },
  navButton: {
    padding: '12px 25px',
    marginLeft: 'auto',
  },

  // Hero Section
  hero: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
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
    fontSize: '56px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '24px',
    marginBottom: '30px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
  },
  heroButton: {
    marginTop: '20px',
  },

  // Section Titles
  sectionTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '50px',
    color: '#0066cc',
  },

  // About Section
  about: {
    padding: '60px 0',
    backgroundColor: '#f9f9f9',
  },
  aboutText: {
    fontSize: '18px',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#555',
  },

  // Services Section
  services: {
    padding: '60px 0',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
  },
  serviceTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#0066cc',
  },
  serviceDescription: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
  },

  // Why Choose Us
  whyChoose: {
    padding: '60px 0',
    backgroundColor: '#e6f0ff',
  },
  reasonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  reasonCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
  },
  reasonTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#0066cc',
  },

  // Contact Section
  contact: {
    padding: '60px 0',
    backgroundColor: '#003d99',
    color: 'white',
    textAlign: 'center',
  },
  contactTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  contactSubtitle: {
    fontSize: '18px',
    marginBottom: '40px',
    color: '#cce5ff',
  },
  contactBox: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '40px',
    borderRadius: '10px',
    maxWidth: '500px',
    margin: '0 auto',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  contactInfo: {
    marginBottom: '30px',
  },
  phoneNumber: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  contactHours: {
    fontSize: '16px',
    color: '#cce5ff',
  },

  // Footer
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ccc',
    padding: '50px 0 20px',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: '1px solid #444',
  },
  footerTitle: {
    color: 'white',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  footerList: {
    listStyle: 'none',
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
    fontSize: '14px',
    color: '#777',
  },
};
