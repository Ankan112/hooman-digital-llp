import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../ChooseUs/ChooseUs';
import Offer from '../Offer/Offer';
import SoftwareSolutionSection from '../SoftwareSolutionSection/SoftwareSolutionSection';

const Home = () => {
    return (
        <section>
            <SoftwareSolutionSection></SoftwareSolutionSection>
            <Offer></Offer>
            <AboutUs></AboutUs>
            <ChooseUs></ChooseUs>
        </section>
    );
};

export default Home;