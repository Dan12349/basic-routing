import './header.scss'
import React from 'react';
import About from './about/about.js';
import { Routes, Route, Link } from 'react-router-dom';


function Header () {
    return (
    <><div className="Header">
            <Link to="/">Название</Link>
            <Link to="/about">О нас</Link>
        </div><Routes>
                <Route path="/about" element={<About />} />
            </Routes></>
    );
}

export default Header;