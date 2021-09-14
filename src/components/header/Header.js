import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://images.pexels.com/photos/219957/pexels-photo-219957.jpeg" alt="notfound" className="headerImg"/>
        </div>
    );
};

export default Header;