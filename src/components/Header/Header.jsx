import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav>

            <Link to="/mounting">Mounting </Link>

            <Link to="/updating">Updating </Link>

            <Link to="/unmounting">Unmounting </Link>

        </nav>
    );
};

export default Header;
