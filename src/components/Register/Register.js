import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

// import Navbar from '../../Navbar';


import './register.css';

export default function Register() {
    const iconStyles = {
        width: '30px',
        height: '30px',
    };

    return (
        <div className="registration">
            {/* <Navbar /> */}
            <div className="form">
                <div className="switch">
                    <Link to="/login" className="signin">Daxil ol</Link>
                    <Link to="/register" className="register">Hesab ac</Link>
                </div>
                <TextField className="text-area" required id="outlined-required" label="Email" variant="outlined" />
                <TextField className="text-area" required id="outlined-required" type="password" label="Password" variant="outlined" />
                <TextField className="text-area" id="outlined-password-input" label="Confirm password" type="password" autoComplete="current-password" variant="outlined" />
                <Button className="submit" variant="contained" >Hesab ac</Button>
                <div className="socials">
                    <div className="facebook"><FacebookIcon className="icon" style={iconStyles} /> Facebook</div>
                    <div className="google"><FacebookIcon className="icon" style={iconStyles} /> Google</div>
                </div>
            </div>
        </div>
    );
}
