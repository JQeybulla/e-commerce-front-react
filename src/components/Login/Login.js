import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';


// import Navbar from '../../Navbar';

import './login.css';

export default function Login() {
    const iconStyles = {
        width: '30px',
        height: '30px',
    };

    return (
        <div className="login">
            {/* <Navbar /> */}
            <div className="form">
                <div className="switch">
                    <Link to="/login" className="signin">Daxil ol</Link>
                    <Link to="/register" className="register">Hesab ac</Link>
                </div>
                <TextField className="text-area" required id="outlined-required" label="Email" variant="outlined" />
                <TextField className="text-area" required id="outlined-required" label="Password" variant="outlined" />
                <p><a href="facebook.com">Sifremi unutdum</a></p>
                <Button className="submit" variant="contained" >Daxil ol</Button>
                <div className="socials">
                    <div className="facebook"><FacebookIcon className="icon" style={iconStyles} /> Facebook</div>
                    <div className="google"><FacebookIcon className="icon" style={iconStyles} /> Google</div>
                </div>
            </div>
        </div>
    );
}
