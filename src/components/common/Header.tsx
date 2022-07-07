import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src="/dnd-logo.png" alt="DND Icon" />
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Header;
