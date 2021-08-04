import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Logout/Profile';
import Navbar from './Navbar';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        };
        axios.get('https://ecommerce.pythonanywhere.com/dj-rest-auth/user/', config).then(
            (res) => {
                setUser(res.data);
                setIsAuthenticated(true);
            },
            (err) => {
                console.log(err.response);
            },
        );
    }, []);
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Navbar user={user} auth={isAuthenticated} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
