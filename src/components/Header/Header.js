import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black'>
            <h1 className='text-2xl lg:text-4xl font-semibold font-serif py-5 text-white'>Book Vault</h1>
            <h3 className='text-sm lg:text-lg font-light italic text-white'>"Unlock Worlds, One Page at a Time."</h3>
            <nav className='pb-3 flex justify-end pr-8'>
                <Link to="/about" className='text-white hover:text-gray-300 text-sm'>About Us</Link>
            </nav>
        </div>
    );
};

export default Header;