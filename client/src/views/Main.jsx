import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import WhyCard from '../components/WhyCard';
import logo from '../images/OwnerAssets/owner1.jpg'
import logo2 from '../images/OwnerAssets/owner2.jpg'


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

const Main = (props) => {

    const serviceData = [
        {
            id: 1,
            imageurl: "card-image-1",
            urlName: "gallery",
            name: "Kitchens"
        },
        {
            id: 2,
            imageurl: "card-image-2",
            urlName: "gallery",
            name: "Baths"
        },
        {
            id: 3,
            imageurl: "card-image-3",
            urlName: "gallery",
            name: "Decks"
        },
        {
            id: 4,
            imageurl: "card-image-4",
            urlName: "gallery",
            name: "Remodel"
        },
        {
            id: 5,
            imageurl: "card-image-5",
            urlName: "contact-us",
            name: "Custom"
        },
    ]
    const whyData = [
        {
            id: 1,
            title: "The Best Price",
            description: "No hidden costs or fees - our pricing is straightforward and easy to understand",
            imgurl: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-best-price-cyber-monday-flaticons-lineal-color-flat-icons-2.png"
        },
        {
            id: 2,
            title: "Custom Design",
            description: "A project is defined as a sequence of tasks that must be completed to attain a certain outcome. According to the project with custom designs",
            imgurl: "https://img.icons8.com/officel/256/windows10-personalization.png"
        },
        {
            id: 3,
            title: "Premium Quality",
            description: "Make sure that everything we use is premium quality and taking no longer than deadlines set. This will get the ball rolling and improve your confidence.",
            imgurl: "https://img.icons8.com/external-flatart-icons-flat-flatarticons/256/external-premium-seo-flatart-icons-flat-flatarticons.png"
        },
        {
            id: 4,
            title: "Satisfaction Guarantee",
            description: "We're confident in the quality of our work, and offer a satisfaction guarentee for your peace of mind",
            imgurl: "https://img.icons8.com/external-flaticons-flat-flat-icons/256/external-customer-satisfaction-cleaning-flaticons-flat-flat-icons-2.png"
        }
    ]

    const whyUs = whyData.map((item, index) => <WhyCard key={index} title={item.title} desc={item.description} imgurl={item.imgurl}/>)

    const services = serviceData.map((item, index) => <ServiceCard key={index} imageurl={item.imageurl} name={item.name} urlName={item.urlName}/>);


    return (
        <div>
            <div className='dream-image'></div>
                <div className='dream-border'>
                    <h1 className='font-medium leading-tight text-5xl text-transparent bg-clip-text text-slate-900 text-center'>
                        We help to <br />
                        build your dream.</h1>
                    <p>Building with <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-yellow-500 text-xl'>vision, quality, and pride.</span>
                    </p>
            </div>
            <hr />
            <div className="card-container flex items-center justify-center px-16">
                <div className="relative w-full max-w-5xl">
                    <div className="absolute top-0 -left-4 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
                    <div className="absolute top-20 -right-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-4 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-4000"></div>
                    <div className="m-8 relative space-y-4">
                        <div>
                            <h1 className='text-4xl font-bold text-center p-4'>Over 25 years of <label
                            className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'
                            >experience</label></h1>
                            <p className='text-center'><a className='call-us-button' href="/contact-us">Call us now</a></p>
                        </div>
                        <div>
                            <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]} ssr={true} infinite={true} autoPlaySpeed={10000} autoPlay={props.deviceType !== "mobile" ? true : false} transitionDuration={500}>
                                {services}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='text-center text-xl text-zinc-300'>W H Y &nbsp; U S</p>
                <h1 className='text-center text-2xl font-bold'>A construction company that is <br /><span className='underlined small'>just better</span></h1>
                <p className='text-center text-zinc-500 mt-4'>What makes us different.</p>
                <div className='grid grid-cols-2 gap-4 p-4 mb-8 ml-10 mr-10'>
                    {whyUs}
                </div>
            </div>
            
            <div className='team-container bg-slate-900'>
                <div className='text-white p-4'>
                    <p className='text-6xl text-center mb-4'>Meet the team</p>
                </div>
                <div className='flex justify-between'>
                    <div className='w-2/5 ml-4 p-4'>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dicta. Placeat illo, voluptatum necessitatibus possimus et, repudiandae beatae, pariatur deserunt itaque dolorem eius nobis odit quos maiores voluptate saepe accusamus?</p>
                        <p className='text-white mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cum corrupti consequatur exercitationem maxime, voluptatem doloribus odit atque rerum modi, facere inventore tenetur eaque suscipit quis blanditiis in veritatis iusto?</p>
                    </div>
                    <div className='flex p-4 gap-4 w-3/5'>
                        <div>
                            <p className='text-white text-4xl mb-4'>John Smith</p>
                            <img src={logo} className="owner-shift-1 border-b-8 border-b-stone-200" alt="pic" />
                        </div>
                        <div>
                            <img src={logo2} className="owner-shift-2 border-t-8 border-t-stone-300" alt="pic" />
                            <p className='text-white text-4xl text-right mt-4'>Jane Doe</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='bg-gray-900 text-white'>
                <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                    <h1
                        className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5"
                    >
                        <span className="text-teal-400">So, </span> what are you waiting for?<br />
                    </h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                        />
                        <button
                            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;