import React from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './Navbar';
import Carousel from './components/Carousel/Carousel';
import Main from './components/Home/Main';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Main />
            <Carousel />
        </div>
    );
};

export default Home;
