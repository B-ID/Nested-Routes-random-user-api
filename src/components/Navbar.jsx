import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar__links">
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/users">USERS</Link>
        </div>
        <div>
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>
    </div>
  );
}
