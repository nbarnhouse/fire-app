import React from 'react';
import Header from '../Header/Header';

export default function PageLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
