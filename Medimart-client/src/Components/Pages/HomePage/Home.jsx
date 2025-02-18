import React from 'react';
import Slider from './Slider';
import Category from './Category';
import Service from './Service';
import Discount from './Discount';
import DiscountAdd from './DiscountAdd';
import About from './About';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - MediMart</title>
            </Helmet>
            <Slider></Slider>
            <Category></Category>
            <DiscountAdd></DiscountAdd>
            <Discount></Discount>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;