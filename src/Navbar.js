import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './css/navbar.css';


const Navbar = () => {
    const placeholder = 'Search';
    return (
        <div>
            <nav className="navbar">
                <div className="upper-nav">
                    <h1 className="logo">Navbar name</h1>
                    <div className="search" >
                        <input type="text" className="search-box" placeholder={placeholder} />
                        <SearchIcon />
                    </div>
                    <div className="mini-nav">
                        <a href="/login">Login</a>
                        <a href="/signup">Sign up</a>
                        <a href="/profile">Profile</a>
                    </div>
                </div>
                <div className="categories">
                    <a href="/Kisi">Kisi</a>
                    <a href="/Qadin">Qadin</a>
                    <a href="/Usaq">Usaq</a>
                    <a href="/Ev-yasam">EV ve yasam</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
