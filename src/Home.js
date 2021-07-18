import React from 'react';
// import Navbar from './Navbar';
import Carousel from './components/Carousel/Carousel';
import Main from './components/Home/Main';
import Footer from './components/Footer/Footer';
import HomeProducts from './components/HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div className="home">
            {/* <Navbar /> */}
            <Main />
            <Carousel />
            <HomeProducts />
            <Footer />
        </div>
    );
};

export default Home;
