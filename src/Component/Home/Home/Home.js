import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Achievement from '../Achievement/Achievement';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import ContactUs from '../ContactUs/ContactUs';
import Creative from '../Creative/Creative';
import HappyCustomer from '../HappyCustomer/HappyCustomer';
import Offer from '../Offer/Offer';
import Review from '../Review/Review';
import SoftwareSolutionSection from '../SoftwareSolutionSection/SoftwareSolutionSection';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <HappyCustomer></HappyCustomer>
            <SoftwareSolutionSection></SoftwareSolutionSection>
            <Offer></Offer>
            <Creative></Creative>
            <AboutUs></AboutUs>
            <Achievement></Achievement>
            <ChooseUs></ChooseUs>
            <Review></Review>
            <ContactUs></ContactUs>
        </section>
    );
};

export default Home;