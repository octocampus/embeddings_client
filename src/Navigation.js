import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Admin</Link>
        </li>
        <li>
          <Link to="/chat">User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
