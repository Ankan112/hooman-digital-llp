import React from 'react';
import chooseUsImage from '../../../images/assets/chooseUs.png'
import expertTeamImage from '../../../images/assets/expert-team.png'
import technologyImage from '../../../images/assets/technologies.png'
import pricingImages from '../../../images/assets/pricing.png'
import featuresImages from '../../../images/assets/features.png'
import approchImages from '../../../images/assets/approch.png'
import IdeasImages from '../../../images/assets/ideas.png'


const ChooseUs = () => {

    const services = [
        {
            _id: '1',
            images: expertTeamImage,
            name: 'Expert Team',
            description: 'Our team of experts is committed to providing exceptional support and training to help you maximize the benefits of our web3-based SaaS solutions.'
        },
        {
            _id: '2',
            images: technologyImage,
            name: 'Brilliant Technologies',
            description: 'With our cutting-edge technology, you can trust that your data is secure, immutable, and accessible only to those who have permission to access it.'
        },
        {
            _id: '3',
            images: pricingImages,
            name: 'Flexible Pricing',
            description: 'Our flexible pricing options allow you to choose the plan that suits your budget and requirements. Whether you are a startup or an enterprise, we have a solution for you.'
        },
        {
            _id: '4',
            images: featuresImages,
            name: 'Latest Features',
            description: 'We understand the importance of staying ahead in the ever-evolving world of web3. That is why we are constantly innovating and updating our software to provide you with the latest tools and features.'
        },
        {
            _id: '5',
            images: approchImages,
            name: 'Intuitive approach',
            description: 'Our user-centric approach ensures that our SaaS solutions are easy to use, intuitive, and designed to meet your specific needs. Say goodbye to complex and confusing interfaces.'
        },
        {
            _id: '6',
            images: IdeasImages,
            name: 'Transform Ideas',
            description: 'By choosing us, you join a community of like-minded individuals and businesses who believe in the power of web3. Together, we can transform the way we interact with data and technology.'
        }
    ]

    return (
        <section style={{ backgroundColor: '#02081D' }}>
            <div className='max-w-screen-xl pb-10 md:pb-24 w-11/12 mx-auto'>
                <div className="hero">
                    <div className="hero-content px-0 md:py-10 flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h2 className='text-2xl md:text-4xl mb-3 md:mb-8 font-bold text-white'>Why Choose Us</h2>
                            <h2 className='text-3xl md:text-6xl text-white font-bold'>We Make your Dreams into Reality</h2>

                            <p className='text-lg md:text-2xl mt-4 md:mt-10 text-white font-semibold'>Choose us for seamless integration with web3 technologies, user-friendly interface, and unparalleled security. Experience the power of blockchain with our innovative SaaS solutions, tailored to your business needs.</p>
                            <button style={{ backgroundColor: '#0377FF' }} className='mt-6 md:mt-14 text-white font-bold  text-lg  md:text-2xl p-4'>Discover More</button>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-xl">
                            <div style={{ backgroundColor: '#02081D' }} className="">
                                <img className='w-full' src={chooseUsImage} alt="softwareSolutions" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24'>
                    {
                        services.map(service => <div
                            key={service._id}
                            className='text-black bg-white py-8 px-5 rounded-3xl'>
                            <div><img src={service.images} alt="" /></div>
                            <h2 className='text-4xl font-bold my-5'>{service.name}</h2>
                            <p className='text-2xl font-bold'>{service.description}</p>
                        </div>)
                    }
                </div>
            </div>
        </section >
    );
};

export default ChooseUs;