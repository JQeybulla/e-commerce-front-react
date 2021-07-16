import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { styled } from '@material-ui/core/styles';
import axios from 'axios';
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
    const liStyles = {
        width: '15%',
    };

    const [navbars, setNavbars] = useState(null);

    const nullVariable = null;

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/categories/first/';
        axios.get(url)
            .then((response) => {
                setNavbars(response.data);
            });
    }, []);

    if (navbars) {
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
                        <ul>
                            {
                                navbars.map((navbar) => {
                                    return (
                                        <div className="category-item" style={liStyles} key={navbar.id}>
                                            <a href={navbar.slug} >{navbar.title}</a>
                                            <div className="category-menu" id="kisi" >
                                                <h1>{navbar.title}</h1>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
    return <h1>{nullVariable}</h1>;
};

export default Navbar;
