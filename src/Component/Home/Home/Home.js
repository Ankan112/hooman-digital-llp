import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Offer from '../Offer/Offer';
import SoftwareSolutionSection from '../SoftwareSolutionSection/SoftwareSolutionSection';

const Home = () => {
    return (
        <section>
            <SoftwareSolutionSection></SoftwareSolutionSection>
            <Offer></Offer>
            <AboutUs></AboutUs>
        </section>
    );
};

export default Home;