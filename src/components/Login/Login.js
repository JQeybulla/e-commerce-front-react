import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
// import {  } from 'react-router-dom';
import axios from 'axios';

// import Navbar from '../../Navbar';

import './login.css';


export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const iconStyles = {
        width: '30px',
        height: '30px',
    };
    // const history = useHistory();
    const handleSubmit = (e) => {
        const data = {
            email,
            password,
        };
        // const path = '/';


        axios.post('http://ecommerce.pythonanywhere.com/dj-rest-auth/login/', data).then(
            (res) => {
                localStorage.setItem('token', res.data.key);
                if (localStorage.getItem('token')) {
                    // history.push('/');
                    window.location.href = '/';
                }
                // console.log(res);
                // window.redirect(path);
                // history.push(path);
            },
        ).catch(
            (error) => {
                console.log(error);
            },
        );
        e.preventDefault();
        // // const history = useHistory();

        // window.location.href = '/';
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="login">
                {/* <Navbar /> */}
                <div className="form">
                    <div className="switch">
                        <Link to="/login" className="signin">Daxil ol</Link>
                        <Link to="/register" className="register">Hesab ac</Link>
                    </div>
                    <TextField className="text-area" required id="outlined-required" label="Email" variant="outlined" onChange={(e) => { return setEmail(e.target.value); }} />
                    <TextField type="password" className="text-area" required id="outlined-required" label="Password" variant="outlined" onChange={(e) => { return setPassword(e.target.value); }} />
                    <p><a href="facebook.com">Sifremi unutdum</a></p>
                    <Button type="submit" className="submit" variant="contained" >Daxil ol</Button>
                    <div className="socials">
                        <div className="facebook"><FacebookIcon className="icon" style={iconStyles} /> Facebook</div>
                        <div className="google"><FacebookIcon className="icon" style={iconStyles} /> Google</div>
                    </div>
                </div>
            </div>
        </form>
    );
}
