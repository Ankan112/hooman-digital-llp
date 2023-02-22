import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Achievement from '../Achievement/Achievement';
import ChooseUs from '../ChooseUs/ChooseUs';
import Creative from '../Creative/Creative';
import Offer from '../Offer/Offer';
import SoftwareSolutionSection from '../SoftwareSolutionSection/SoftwareSolutionSection';

const Home = () => {
    return (
        <section>
            <SoftwareSolutionSection></SoftwareSolutionSection>
            <Offer></Offer>
            <Creative></Creative>
            <AboutUs></AboutUs>
            <Achievement></Achievement>
            <ChooseUs></ChooseUs>
        </section>
    );
};

export default Home;