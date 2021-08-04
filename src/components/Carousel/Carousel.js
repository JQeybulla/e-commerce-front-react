import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import './carousel.css';

const Carousel = () => {
    const [elements, setElements] = useState(null);
    const nullVariable = null;

    useEffect(() => {
        const url = 'https://ecommerce.pythonanywhere.com/core/carousel/';
        axios.get(url)
            .then((response) => {
                setElements(response.data);
            });
    }, []);

    if (elements) {
        return (
            <div>
                <OwlCarousel className="owl-theme" loop margin={10} autoplay dots={false} items={1} lazyLoad autoplayTimeout={2000}>
                    {elements.map((element) => {
                        return (
                            <div className="item" key={element.id}>
                                <img height="300px" width="90%" alt="alt" src={element.image} />
                            </div>
                        );
                    })

                    }
                </OwlCarousel>
            </div>
        );
    }
    return <h1>{nullVariable}</h1>;
};

export default Carousel;
