import React from 'react';

const Achievement = () => {
    return (
        <section className='py-20' style={{ backgroundColor: '#02081D' }}>
            <div style={{ backgroundColor: '#0377FF' }} className='max-w-screen-xl w-11/12 mx-auto text-center md:flex justify-between items-center p-10 rounded-3xl'>
                <div className='pt-10 md:pt-0'>
                    <h2 style={{ color: '#000F5F' }} className="text-5xl font-semibold">40+</h2>
                    <h2 className='text-white text-4xl font-semibold mt-2'>Happy Clients</h2>
                </div>
                <div className='py-20 md:py-0'>
                    <h2 style={{ color: '#000F5F' }} className="text-5xl font-semibold">120+</h2>
                    <h2 className='text-white text-4xl font-semibold mt-2'>Projects Completed</h2>
                </div>
                <div>
                    <h2 style={{ color: '#000F5F' }} className="text-5xl font-semibold">100</h2>
                    <h2 className='text-white text-4xl font-semibold mt-2'>Awards Win</h2>
                </div>
                <div className='py-10 md:py-0'>
                    <h2 style={{ color: '#000F5F' }} className="text-5xl font-semibold">18</h2>
                    <h2 className='text-white text-4xl font-semibold mt-2'>Team Members</h2>
                </div>
            </div>
        </section>
    );
};

export default Achievement;