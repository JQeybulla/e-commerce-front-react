import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
// import Collapse from '@material-ui/core/Collapse';
import { styled } from '@material-ui/core/styles';
// import DropDown from './components/DropDown/DropDown';

import './css/navbar.css';


const Navbar = () => {
    // const [isShown, setIsShown] = useState(false);
    // const [variable, setVariable] = useState(false);
    //
    // const handleChange = () => {
    //     setIsShown((prev) => { return !prev; });
    // };
    // const handleChange = () => {
    //     setChecked((prev) => { return !prev; });
    // };

    // const variable = false;

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
    // let menuStyle;
    // if (variable) {
    //     menuStyle = {
    //         transition: '0.4s',
    //         backgroundColor: 'red',
    //         height: '60%',
    //         width: '80%',
    //         position: 'absolute',
    //         left: '10%',
    //         overflow: 'hidden',
    //     };
    // } else {
    //     menuStyle = {
    //         transition: '0.4s',
    //         backgroundColor: 'red',
    //         height: '0%',
    //         width: '80%',
    //         position: 'absolute',
    //         overflow: 'hidden',
    //         left: '10%',
    //     };
    // }
    // const changeVariable = () => {
    //     document.getElementById('kisi').height = '60%';
    //     // eslint-disable-next-line no-console
    //     console.log(variable);
    //     if (!variable) {
    //         // console.log('Hello');
    //         // eslint-disable-next-line no-const-assign
    //         setVariable(true);
    //     }
    //     // eslint-disable-next-line no-console
    //     console.log(variable);
    // };

    // const dropdownStyles = {
    //     width: '100%',
    //     backgroundColor: 'green',
    // };
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
                        <div className="category-item" style={liStyles}>
                            <a href="/Kisi" >Kisi</a>
                            <div className="category-menu" id="kisi" >
                                <h1>Kisi menu</h1>
                            </div>
                        </div>
                        <div className="category-item" style={liStyles}>
                            <a href="/Qadin" >Qadin</a>
                            <div className="category-menu" >
                                <h1>Qadin menu</h1>
                            </div>
                        </div>

                        <div className="category-item" style={liStyles}>
                            <a href="/Usaq" >Usaq</a>
                            <div className="category-menu" >
                                <h1>Usaq menu</h1>
                            </div>
                        </div>

                        <div className="category-item" style={liStyles}>
                            <a href="/Ev-yasam">EV ve yasam</a>
                            <div className="category-menu" >
                                <h1>Ev-usaq menu</h1>
                            </div>
                        </div>

                        <div className="category-item" style={liStyles}>
                            <a href="/aksessuar" >Aksessuar</a>
                            <div className="category-menu" >
                                <h1>Aksessuar menu</h1>
                            </div>
                        </div>
                        <div className="category-item" style={liStyles}>
                            <a href="/aksessuar" >Canta</a>
                            <div className="category-menu" >
                                <h1>Aksessuar menu</h1>
                            </div>
                        </div>
                        <div className="category-item" style={liStyles}>
                            <a href="/aksessuar" >Hello</a>
                            <div className="category-menu" >
                                <h1>Aksessuar menu</h1>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>

            {/* { isShown && (<h2>Hello</h2>)} */}
        </div>
    );
};

export default Navbar;
