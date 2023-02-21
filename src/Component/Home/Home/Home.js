import React from 'react';
import Offer from '../Offer/Offer';
import SoftwareSolutionSection from '../SoftwareSolutionSection/SoftwareSolutionSection';

const Home = () => {
    return (
        <section>
            <SoftwareSolutionSection></SoftwareSolutionSection>
            <Offer></Offer>
        </section>
    );
};

export default Home;