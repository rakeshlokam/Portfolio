import React from 'react';
import './Footer.css';

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Yago Estévez.</p>

      </div>
    </footer>
  );
};

export default Footer;