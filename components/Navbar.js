import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button onClick={() => alert('Request Consultation')}>Request Consultation</button>
        </nav>
    );
};

export default Navbar;