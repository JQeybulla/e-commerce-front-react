import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import Navbar from '../../Navbar';


import './register.css';

export default function Register() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    // const username = null;
    const iconStyles = {
        width: '30px',
        height: '30px',
    };

    const handleSubmit = (e) => {
        const data = {
            username: email,
            email,
            password1: password,
            password2: confirmPassword,
        };

        axios.post('https://ecommerce.pythonanywhere.com/dj-rest-auth/registration/', data).then(
            (res) => {
                console.log(res.statusText);
            },
        ).catch(
            (error) => {
                console.log(error.response.data);
            },
        );
        e.preventDefault();
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="registration">
                {/* <Navbar /> */}
                <div className="form">
                    <div className="switch">
                        <Link to="/login" className="signin">Daxil ol</Link>
                        <Link to="/register" className="register">Hesab ac</Link>
                    </div>
                    <TextField className="text-area" required id="outlined-required" label="Email" variant="outlined" onChange={(e) => { return setEmail(e.target.value); }} />
                    <TextField className="text-area" required id="outlined-required" type="password" label="Password" variant="outlined" onChange={(e) => { return setPassword(e.target.value); }} />
                    <TextField className="text-area" id="outlined-password-input" label="Confirm password" type="password" autoComplete="current-password" variant="outlined" onChange={(e) => { return setConfirmPassword(e.target.value); }} />
                    <Button type="submit" className="submit" variant="contained">Hesab ac</Button>

                    <div className="socials">
                        <div className="facebook"><FacebookIcon className="icon" style={iconStyles} /> Facebook</div>
                        <div className="google"><FacebookIcon className="icon" style={iconStyles} /> Google</div>
                    </div>
                </div>
            </div>
        </form>
    );
}
