import React from 'react';
import creativeImage from '../../../images/assets/creative.png'

const Creative = () => {
    return (
        <section style={{ backgroundColor: '#0377FF' }}>
            <div className='max-w-screen-xl w-11/12 mx-auto'>
                <div className="hero">
                    <div className="hero-content px-0 py-10 flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h2 className='text-4xl md:text-6xl text-white font-bold'>Crafted by creatives, <br /> <span style={{ color: '#000F5F' }}>for creative</span></h2>
                            <p className='text-lg md:text-3xl mt-10 text-white font-semibold'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
                            <button style={{ backgroundColor: '#000F5F' }} className='mt-6 md:mt-14 text-white font-bold  text-lg md:text-2xl py-4 px-8'>Know More</button>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-2xl">
                            <div style={{ backgroundColor: '#0377FF' }} className="">
                                <img className='w-full' src={creativeImage} alt="softwareSolutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Creative;