import React from 'react';
import banner from '../../../images/assets/banner.png'

const Banner = () => {
    return (
        <section style={{ backgroundColor: '#0377FF' }}>
            <div className='max-w-screen-xl pb-12 pt-20 w-11/12 mx-auto'>
                <div className="hero">
                    <div className="flex justify-between items-center px-0 flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">
                            {/* <h2 className='text-xl md:text-4xl mb-8 font-bold text-white'>Why Choose Us</h2> */}
                            <h2 className='text-3xl md:text-7xl text-white font-bold'>Elevate Your Online Presence </h2>

                            <p className='text-lg md:text-4xl mt-10 text-white font-semibold'>At Hooman Digital, we specialize in delivering powerful and effective services that enhances your business’s online presence, making it more robust and impactful.</p>
                            <div className='flex  flex-col md:flex-row'>
                                <button style={{ backgroundColor: '#000F5F' }} className='mt-14 text-white font-bold text-3xl py-4 px-8'>Get Started</button>

                                <button style={{ backgroundColor: '#000F5F' }} className='mt-14 text-white font-bold text-3xl py-4 px-8 md:ml-10'>See Pricing</button>
                            </div>
                        </div>
                        <div className=" md:w-1/2 max-w-xl">
                            <div style={{ backgroundColor: '#0377FF' }} className="">
                                <img className='w-full' src={banner} alt="softwareSolutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#02081D" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,122.7C840,117,960,171,1080,176C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </section >
    );
};

export default Banner;