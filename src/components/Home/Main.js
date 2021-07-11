import React from 'react';
import slide3 from './static/media/slide3.png';
import './main.css';

const Main = () => {
    const styles = {
        backgroundImage: `url(${slide3})`,
    };
    return (
        <div className="main" style={styles}>
            {/* <img className="img" src={slide3} alt="main" /> */}
            <h1>Hello</h1>
        </div>
    );
};

export default Main;
