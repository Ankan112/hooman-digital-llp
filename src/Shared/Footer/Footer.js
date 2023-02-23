import React from 'react';

const Footer = () => {
    return (
        <section style={{ backgroundColor: '#02081D' }} className='py-8 md:py-14'>
            <div className='text-white text-xl md:text-3xl font-semibold flex flex-col md:flex-row justify-between items-center max-w-screen-xl w-11/12 mx-auto text-center'>
                <h2>&copy; 2023 All Rights Reserved Hooman Digital LLP</h2>
                <div className='mt-6 md:mt-0'>
                    <span>Service</span>
                    <span className='mx-4'>About</span>
                    <span>Blog</span>
                    <span className='ml-4'>Contact</span>
                </div>
            </div>
        </section>
    );
};

export default Footer;