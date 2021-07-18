import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
