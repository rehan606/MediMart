import React from 'react';
import Slider from './Slider';
import Category from './Category';
import Service from './Service';
import Discount from './Discount';
import DiscountAdd from './DiscountAdd';
import About from './About';
import { Helmet } from 'react-helmet-async';
import OurService from './OurService';
import NewsletterSection from './NewsletterSection';
import ArticlesSection from './ArticlesSection';
import Consultation from './Consultation';
import UploadPrescription from './UploadPrescription';
import FaqSection from './FaqSection';


const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home - MediMart</title>
            </Helmet>
            <Slider></Slider>
            <Category></Category>
            <Discount></Discount>
            <OurService></OurService>
            <NewsletterSection></NewsletterSection>
            <Consultation></Consultation>
            <UploadPrescription></UploadPrescription>
            <DiscountAdd></DiscountAdd>
            <ArticlesSection/>
            <About></About>
            <FaqSection></FaqSection>
            <Service></Service>
        </div>
    );
};

export default Home;