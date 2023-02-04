import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ServiceCard from '../components/ServiceCard';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 900 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 900, min: 800 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 1
    }
}

const Main = () => {
    const serviceData = [
        {
            id: 1,
            imageurl: "card-image-1",
            name: "Kitchens"
        },
        {
            id: 2,
            imageurl: "card-image-2",
            name: "Baths"
        },
        {
            id: 3,
            imageurl: "card-image-3",
            name: "Decks"
        },
        {
            id: 4,
            imageurl: "card-image-4",
            name: "Remodel"
        },
        {
            id: 5,
            imageurl: "card-image-5",
            name: "Custom"
        },
    ]

    const services = serviceData.map((item, index) => <ServiceCard key={index} imageurl={item.imageurl} name={item.name} />);


    return (
        <div>
            <div className='grid grid-cols-2 gap-4 bg-teal-200 p-4'>
                <div>
                    <h1 className='font-medium leading-tight text-5xl mt-0 mb-2 pt-11 text-black text-center'>
                        We help to <br />
                        build your dream.</h1>
                    <p className='text-gray-700 text-center'>Building with vision, quality, and pride.
                    </p>
                </div>
                <div className='right-image-1'></div>
            </div>
            <div className="bg-white h-screen flex items-center justify-center px-16">
                <div className="relative w-full max-w-5xl">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="m-8 relative space-y-4">
                    <div>
                        <h1 className='text-4xl font-bold text-center p-4'>Over 25 years of <label
                        className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'
                        >experience</label></h1>
                        <p className='text-center'><a className='call-us-button' href="/#">Call us now</a></p>
                    </div>
                    <div className='p-4'>
                        <Carousel responsive={responsive}>
                            {services}
                        </Carousel>
                    </div>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <label className='text-4xl p-4'><span className='text-6xl align-middle'>&#42;</span> WHY CHOOSE US</label>
                <div className='grid grid-cols-2 gap-2 p-4'>
                    <div>
                        <label>01</label> <span>The Best Price</span>
                        <p>A project is an activity to meet the creation of a unique product of service and thus activities that are under taken to accomodate outline.</p>
                    </div>
                    <div>
                        <label>02</label> <span>Daily Consultant</span>

                        <p>One of the most common competency based on questions for any sequiring some project that make client for easy consulting about the property.</p>
                    </div>
                    <div>
                        <label>03</label> <span>Custom Design</span>
                        <p>A project is defined as a sequence of tasks that must be completed to attain a certain outcome. According to the project with custom designs</p>
                    </div>
                    <div>
                        <label>04</label> <span>Premium Quality</span>
                        <p>Make sure that everything we use is premium quality and taking no longer than deadlines set. This will get the ball rolling and improve your confidence.</p>
                    </div>
                </div>
                <div className='grid grid-rows-2 grid-flow-col gap-4 bg-slate-900'>
                    <div className='text-white'>Meet The Team</div>
                    <div className='flex'>
                        <img src="" alt="pic1" />
                        <img src="" alt="pic2" />
                    </div>
                    <div className='text-white'>Video</div>
                    <div className='text-white'>Meet the experts who are ready to be your partners</div>
                </div>
                <div className='h-6 bg-yellow-400'></div>
                <div className='grid grid-cols-2 gap-4 bg-slate-900'>
                    <div>
                        <p className='text-white'>
                            So, What are you waiting for? <br />
                            Let's talk about you project!
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <a className='text-white' href="/#">Business Email</a>
                        <a className='text-white' href="/#">Contact Us</a>
                    </div>
                </div>
                <footer>
                    <div className='grid grid-cols-3 gap-2 bg-slate-900'>
                        <div className='mb-6'>
                            <h5 className='text-white text-2xl'>Operation Hours</h5>
                            <ul className='list-none mb-0'>
                                <li>
                                    <a className='text-white' href="/#">Mon - Sat : 8AM - 5PM</a>
                                </li>
                            </ul>
                        </div>
                        <div className='mb-6'>
                            <h5 className='text-white'>Links</h5>
                            <ul className='list-none mb-0'>
                                <li>
                                    <a className='text-white' href="/#">Link 1</a>
                                </li>
                            </ul>
                        </div>
                        <div className='mb-6'>
                            <h5 className='text-white'>Links</h5>
                            <ul className='list-none mb-0'>
                                <li>
                                    <a className='text-white' href="/#">Link 1</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Main;