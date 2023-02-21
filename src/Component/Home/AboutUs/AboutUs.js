import React from 'react';
import aboutImg from '../../../images/assets/aboutUs.png'

const AboutUs = () => {
    return (
        <section style={{ backgroundColor: '#02081D' }}>
            <div className='max-w-screen-xl w-11/12 mx-auto'>
                <div className="hero">
                    <div className="hero-content px-0 py-10 flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h2 className='text-xl md:text-4xl mb-8 font-bold text-white'>About Us</h2>
                            <h2 className='text-3xl md:text-6xl text-white font-bold'>We are here for Business Solution Ideas</h2>

                            <p className='text-lg md:text-2xl mt-10 text-white font-semibold'>We work systematically to integrate responsibilities in our core business and make our expertise available for the benefit of the society where we operate expertise available.</p>
                            <button style={{ backgroundColor: '#0377FF' }} className='mt-14 text-white font-bold text-2xl p-4'>Discover More</button>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-xl">
                            <div style={{ backgroundColor: '#02081D' }} className="">
                                <img className='w-full' src={aboutImg} alt="softwareSolutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AboutUs;