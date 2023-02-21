import React from 'react';
import imageWebDesign from '../../../images/assets/web-design.png'
import imageWebDevelopment from '../../../images/assets/web-development.png'
import imageContent from '../../../images/assets/content.png'
import imageContentCreation from '../../../images/assets/content-creation.png'

const Offer = () => {
    return (
        <section style={{ backgroundColor: '#1E1E1E' }}>
            <div className='max-w-screen-xl w-11/12 mx-auto'>
                <div>
                    <h2 className='text-center font-bold text-2xl md:text-6xl pt-14 text-white'>What We Offer</h2>
                    <p className='w-10/12 mx-auto text-center mt-8 md:mt-16 text-white text-lg md:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et exercitationem ullam nemo iure atque natus vel eum. Voluptatibus labore qui velit vero, dolor ab laudantium doloribus cumque beatae ullam!</p>
                </div>
                <div className='md:flex-row md:flex mt-10 md:mt-24 pb-4 text-white'>
                    <div style={{ backgroundColor: '#000F5F' }} className='rounded-3xl pt-6 pl-5 md:pl-12 pb-16 pr-5 md:w-1/2'>
                        <div>
                            <img src={imageWebDesign} alt="imageWebDesign" />
                        </div>
                        <h2 className='font-bold text-3xl md:text-5xl my-9'>Web Design</h2>
                        <p className='text-lg md:text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vitae repudiandae nulla eos unde doloribus.</p>
                    </div>
                    <div className='flex justify-center items-center ml-2 mt-4 md:ml-10 text-lg md:text-3xl md:w-1/2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam, culpa quis necessitatibus hic enim deserunt modi facere. Delectus fugit alias, obcaecati voluptatem totam facilis temporibus soluta adipisci vitae officiis Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='md:flex-row-reverse md:flex mt-10 md:mt-24 pb-4 text-white'>
                    <div style={{ backgroundColor: '#0377FF' }} className='rounded-3xl pt-6 pl-5 md:pl-12 pb-16 pr-5 md:w-1/2'>
                        <div>
                            <img src={imageWebDevelopment} alt="imageWebDesign" />
                        </div>
                        <h2 className='font-bold text-3xl md:text-5xl my-9'>Web Development</h2>
                        <p className='text-lg md:text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vitae repudiandae nulla eos unde doloribus.</p>
                    </div>
                    <div className='flex justify-center items-center ml-2 mt-4 md:mr-10 text-lg md:text-3xl md:w-1/2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam, culpa quis necessitatibus hic enim deserunt modi facere. Delectus fugit alias, obcaecati voluptatem totam facilis temporibus soluta adipisci vitae officiis Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='md:flex-row md:flex mt-10 md:mt-24 pb-4 text-white'>
                    <div style={{ backgroundColor: '#4F5FEB' }} className='rounded-3xl pt-6 pl-5 md:pl-12 pb-16 pr-5 md:w-1/2'>
                        <div>
                            <img src={imageContent} alt="imageWebDesign" />
                        </div>
                        <h2 className='font-bold text-3xl md:text-5xl my-9'>Content Creation</h2>
                        <p className='text-lg md:text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vitae repudiandae nulla eos unde doloribus.</p>
                    </div>
                    <div className='flex justify-center items-center ml-2 mt-4 md:ml-10 text-lg md:text-3xll md:w-1/2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam, culpa quis necessitatibus hic enim deserunt modi facere. Delectus fugit alias, obcaecati voluptatem totam facilis temporibus soluta adipisci vitae officiis Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='md:flex-row-reverse md:flex mt-10 md:mt-24 pb-4 text-white'>
                    <div style={{ backgroundColor: '#FFFFFF' }} className='rounded-3xl text-black pt-6 pl-5 md:pl-12 pb-16 pr-5 md:w-1/2'>
                        <div>
                            <img src={imageContentCreation} alt="imageWebDesign" />
                        </div>
                        <h2 className='font-bold text-3xl md:text-5xl my-9'>Content Creation</h2>
                        <p className='text-lg md:text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vitae repudiandae nulla eos unde doloribus.</p>
                    </div>
                    <div className='flex justify-center items-center ml-2 mt-4 md:mr-10 text-lg md:text-3xl md:w-1/2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam, culpa quis necessitatibus hic enim deserunt modi facere. Delectus fugit alias, obcaecati voluptatem totam facilis temporibus soluta adipisci vitae officiis Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Offer;