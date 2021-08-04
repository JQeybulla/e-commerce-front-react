import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { styled } from '@material-ui/core/styles';
import axios from 'axios';
import './css/navbar.css';

const Navbar = (props) => {
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
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [user, setUser] = useState(null);

    const nullVariable = null;

    useEffect(() => {
        // const config = {
        //     headers: {
        //         Authorization: `Token ${localStorage.getItem('token')}`,
        //     },
        // };
        // axios.get('https://ecommerce.pythonanywhere.com/dj-rest-auth/user/', config).then(
        //     (res) => {
        //         setUser(res.data);
        //         setIsAuthenticated(true);
        //     },
        //     (err) => {
        //         console.log(err.response);
        //     },
        // );
        const url = 'https://ecommerce.pythonanywhere.com/categories/first/';
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
                            {props.auth ? <Link className="link" to="/profile"><span>{props.user.email}</span></Link> : <Link className="link" to="/login" ><PersonIcon /><span>Daxil ol</span></Link>}

                            {/* <Link to="/register" className="link" ><AccountCircleIcon /> Hello</Link> */}
                            <a href="/profile" className="link"><ShoppingCartIcon size="large" /><span>Sebetim</span></a>
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
