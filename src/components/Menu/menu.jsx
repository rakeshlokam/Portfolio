import React from 'react';
import './menu.css'
const Menu = props => {
    return (
        <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a  onClick={props.toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
   
};

export default Menu;