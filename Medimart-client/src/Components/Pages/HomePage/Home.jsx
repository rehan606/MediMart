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
import Testimonials from './Testimonials';
import Certifications from './Certifications';


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
            <UploadPrescription></UploadPrescription>
            <Consultation></Consultation>
            <ArticlesSection/>
            <DiscountAdd></DiscountAdd>
            <About></About>
            <Testimonials></Testimonials>
            <Certifications></Certifications>
            <NewsletterSection></NewsletterSection>
            <FaqSection></FaqSection>
            {/* <Service></Service> */}
        </div>
    );
};

export default Home;