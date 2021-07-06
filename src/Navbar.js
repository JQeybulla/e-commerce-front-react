import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { styled } from '@material-ui/core/styles';

import './css/navbar.css';


const Navbar = () => {
    const placeholder = 'Search';
    const brandName = 'Pioneer';
    const StyledSearchIcon = styled(SearchIcon)({
        color: 'black',
        backgroundColor: 'white',
        height: '30px',
        borderRadius: '0px 10px 10px 0px',
    });
    return (
        <div>
            <nav className="navbar">
                <div className="upper-nav">
                    <h1 className="logo">{brandName}</h1>
                    <div className="search" >
                        <input type="text" className="search-box" placeholder={placeholder} />
                        <StyledSearchIcon />
                    </div>
                    <div className="mini-nav">
                        <Link to="/login" >Log in</Link>

                        <Link to="/register" >Sign up</Link>
                        <a href="/profile">Profile</a>
                    </div>
                </div>
                <div className="categories">
                    <a href="/Kisi">Kisi</a>
                    <a href="/Qadin">Qadin</a>
                    <a href="/Usaq">Usaq</a>
                    <a href="/Ev-yasam">EV ve yasam</a>
                    <a href="/aksessuar">Aksessuar</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
