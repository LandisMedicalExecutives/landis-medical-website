// Updated index.js to add Google Fonts and modify styles
import React from 'react';
import './index.css';

// Load Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const App = () => {
    return (
        <div style={{
            backgroundColor: '#0a1929',
            color: '#d4af37',
            fontFamily: 'Open Sans, sans-serif'
        }}>
            <header style={{
                background: 'linear-gradient(to bottom, #0a1929 0%, #0a1929 100%)',
                padding: '20px',
                textAlign: 'center',
            }}>
                <h1 style={{fontFamily: 'Playfair Display, serif'}}>Welcome to Landis Medical Executives</h1>
            </header>
            <section style={{padding: '30px',}}>
                <p style={{backgroundPosition: 'center center'}}>This is our new sophisticated look!</p>
            </section>
        </div>
    );
};

export default App;