import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/'>Main</Link>
        </li>
        <li>
          <Link to='/greating'>Greatin page</Link>
        </li>
        <li>
          <Link to='/content'>Content page</Link>
        </li>
      </ul>
    </nav>
  )
}