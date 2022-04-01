import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link className='nav' to={'/'}>Home</Link>
            <Link className='nav' to={'/grand'}>Grand</Link>
            <Link className='nav' to={'/parent'}>Parent</Link>
        </nav>
    );
};

export default Header;