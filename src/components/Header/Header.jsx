import React from 'react';
import './Header.css';
import NavBar from '../elements/NavBar/NavBar';
import FireAppLogo from '../elements/FireAppLogo/FireAppLogo';

export default function Header() {
  return (
    <header className="header-overlay">
      <div className="header-logo">
        <FireAppLogo />
      </div>
      <div className="header-nav">
        <NavBar />
      </div>
    </header>
  );
}
