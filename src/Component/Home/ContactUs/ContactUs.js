import React from 'react';
import './ContactUs.css'
import ellipse from '../../../images/assets/Ellipse 1.png'

const ContactUs = () => {
    return (
        <section className='border-b-[4px]' style={{ backgroundColor: '#02081D' }}>
            <div className='max-w-screen-xl pb-12 pt-20 w-11/12 mx-auto'>
                <div className="hero">
                    <div className="flex justify-between items-center px-0 flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">
                            {/* <h2 className='text-xl md:text-4xl mb-8 font-bold text-white'>Why Choose Us</h2> */}
                            <h2 className='text-3xl md:text-7xl text-white font-bold'>Let’s Discuss Your Projects</h2>

                            <p className='text-lg md:text-4xl mt-10 text-white font-semibold'>You can message us or can directly <br /> call us. We will be very happy to help you.</p>
                            <div className='flex  flex-col md:flex-row'>
                                <button style={{ backgroundColor: '#0377FF' }} className='mt-14 text-white font-bold text-3xl py-4 px-8'>Contact Us</button>

                                <button style={{ backgroundColor: '#0377FF' }} className='mt-14 text-white font-bold text-3xl py-4 px-8 md:ml-10'>Message Us</button>
                            </div>
                        </div>
                        <div className=" md:w-1/2 max-w-sm">
                            <div style={{ backgroundColor: '#02081D' }} className="">
                                <img className='w-full' src={ellipse} alt="softwareSolutions" />
                            </div>
                            <div class="circle">
                                <span>C</span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ContactUs;