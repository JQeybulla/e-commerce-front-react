import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
    return (
        <Router>
            <div className="App">

                <div className="content">
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
