import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return <header>
                <ul>
                    <li>
                        <Link to='/login'>login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>signup</Link>
                    </li>
                    <li>
                        <Link to='/profile'>profile</Link>
                    </li>
                </ul>
    </header>
};

export default Header;
