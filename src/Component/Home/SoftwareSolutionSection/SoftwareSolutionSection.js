import React from 'react';
import image from '../../../images/assets/softwareSolutions.png'

const SoftwareSolutionSection = () => {
    return (
        <section style={{ backgroundColor: '#0377FF' }}>
            <div className='max-w-screen-xl w-11/12 mx-auto'>
                <div className="hero">
                    <div className="hero-content px-0 py-10 flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h2 className='text-3xl md:text-5xl text-white font-bold'>Grow Your Business to new heights with our tailored software <span style={{ color: '#000F5F' }}>solutions</span></h2>

                            <p className='text-sm lg:text-xl mt-10 text-white font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam repudiandae quas officiis possimus aliquid, impedit vel, ut quidem ipsam, perferendis nulla voluptatum illum odio nemo velit animi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-xl">
                            <div style={{ backgroundColor: '#0377FF' }} className="card-body">
                                <img className='w-full' src={image} alt="softwareSolutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoftwareSolutionSection;