import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import FireAppLogo from '../FireAppLogo/FireAppLogo';

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
