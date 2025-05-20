import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
          <nav className='bg-purple-400 p-5 flex gap-5 items-center justify-center font-bold text-2xl'>
             <Link to="/"> Home</Link>
             <Link to="/AboutUs"> About Us</Link>
             <Link to="/Contact">Contact</Link>
          </nav>
    );
};

export default Header;