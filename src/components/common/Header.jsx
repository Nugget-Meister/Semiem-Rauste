import React from 'react';
import { Link } from 'react-router-dom';
// import "/src/App.css"
import "./Header.css"


const Header = () => {
    return (
        <div className='Header'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/regions">Regions</Link>
                </li>
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
