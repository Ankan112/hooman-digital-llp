import React from 'react';

const HappyCustomer = () => {
    return (
        <>
            <section style={{ backgroundColor: '#02081D' }}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#green" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,218.7C840,245,960,267,1080,234.7C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg> */}
                <div className='max-w-screen-xl w-11/12 mx-auto py-14'>
                    <div>
                        <h2 className='text-center font-bold text-2xl md:text-5xl pt-14 text-white'>Trusted by over <span style={{ color: '#0377FF' }}>200+</span> happy customers, including</h2>
                    </div>
                    <div className='md:flex-row md:flex mt-10 md:mt-24 pb-4 text-white'>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HappyCustomer;