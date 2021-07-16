import React from 'react';
import Button from '@material-ui/core/Button';
import slide3 from './static/media/slide3.png';


import './main.css';

const Main = () => {
    const styles = {
        backgroundImage: `url(${slide3})`,
    };
    const stylesButton = {
        width: '50%',
        marginLeft: '25%',
        backgroundColor: 'black',
        color: 'white',
    };
    return (
        <div className="main" style={styles}>
            {/* <img className="img" src={slide3} alt="main" /> */}
            <div className="first_content">
                <h1>Yeni-yeni endirimler</h1>
                <Button variant="contained" color="red" width="50%" style={stylesButton}>
                    Endirimi elde et
                </Button>
            </div>
        </div>
    );
};

export default Main;
