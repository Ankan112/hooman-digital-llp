import React from 'react';


const Review = () => {
    const style = {
        line2: {
            backgroundColor: 'white',
            height: '3px',
            width: '50%',
            position: 'absolute',
            bottom: '35px',
            right: '70px'
        },
        line3: {
            backgroundColor: 'black',
            height: '3px',
            width: '20%'
        }
    }
    return (
        <section style={{ backgroundColor: '#0377FF' }}>
            <div className='max-w-screen-xl w-11/12 mx-auto'>
                <div className='flex flex-col md:flex-row justify-center items-center py-20'>
                    <div className='relative md:w-1/2'>
                        <h2 className='text-7xl font-bold text-white'>Client’s Kind Words</h2>
                        <div className='md:block hidden' style={style.line2}></div>
                    </div>
                    <div className='md:w-1/2'>
                        <p className='font-semibold text-white text-3xl'>find effective reach for your business, powered by human behavior, driven by data.</p>
                    </div>
                </div>
                <div className='text-white grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pb-14'>
                    <div className='border-t-[3px]'>
                        <p className='text-3xl font-semibold mt-5'>“Our Ecommerce Platform. They contribute enourmously to our growth with an excellent return on.”</p>
                        <div className='flex justify-between items-center mt-5'>
                            <div style={style.line3} className=''>
                            </div>
                            <div className='text-3xl font-semibold'>
                                <h2>Sakib Mahamud</h2>
                                <h2>UI/UX designer</h2>
                            </div>
                        </div>
                    </div>
                    <div className='border-t-[3px]'>
                        <p className='text-3xl font-semibold mt-5'>“From Web dev to production, the team has always gone beyond expectations.”</p>
                        <div className='flex justify-between items-center mt-5'>
                            <div style={style.line3} className=''>
                            </div>
                            <div className='text-3xl font-semibold'>
                                <h2>Juale ahmad</h2>
                                <h2>UI designer</h2>
                            </div>
                        </div>
                    </div>
                    <div className='border-t-[3px]'>
                        <p className='text-3xl font-semibold mt-5'>“Excellent Agency. They keep their promise to customer needs. They provide excellent service to our website.”</p>
                        <div className='flex justify-between items-center mt-5'>
                            <div style={style.line3} className=''>
                            </div>
                            <div className='text-3xl font-semibold'>
                                <h2>Robert Fischer</h2>
                                <h2>Web developer</h2>
                            </div>
                        </div>
                    </div>
                    <div className='border-t-[3px]'>
                        <p className='text-3xl font-semibold mt-5'>“My experience with Hooman Digital is excellent. They affordable services with no quality been compromised.”</p>
                        <div className='flex justify-between items-center mt-5'>
                            <div style={style.line3} className=''>
                            </div>
                            <div className='text-3xl font-semibold'>
                                <h2>Jake</h2>
                                <h2>Project Manager</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Review;