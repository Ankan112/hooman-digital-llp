import React from 'react';
import customer1 from '../../../images/assets/customer1.png'
import customer2 from '../../../images/assets/customer2.png'
import customer3 from '../../../images/assets/customer3.png'
import customer4 from '../../../images/assets/customer4.png'
import customer6 from '../../../images/assets/customer6.png'

const HappyCustomer = () => {
    return (
        <section style={{ backgroundColor: '#02081D' }}>
            <div className='max-w-screen-xl w-11/12 mx-auto py-14'>
                <div>
                    <h2 className='text-center font-bold text-2xl md:text-5xl pt-14 text-white'>Trusted by over <span style={{ color: '#0377FF' }}>200+</span> happy customers, including</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 md:mt-20 pb-16 text-white'>
                    <div>
                        <img src={customer1} alt="" />
                    </div>
                    <div>
                        <img src={customer2} alt="" />
                    </div>
                    <div>
                        <img src={customer3} alt="" />
                    </div>
                    <div className='bg-white w-56 h-56 flex items-center'>
                        <img src={customer4} alt="" />
                    </div>
                    <div className='bg-white w-56 h-56 flex items-center justify-center'>
                        <img src={customer6} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HappyCustomer;