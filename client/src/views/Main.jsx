import React from 'react'

const Main = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                <div>01</div>
                <div>02</div>
            </div>
            <div>
                <h1>Over 25 years of experience</h1>
                <a href="#">Get A Quote</a>
                <div className='grid grid-cols-3 gap-4'>
                    <div>1st Service</div>
                    <div>2nd Service</div>
                    <div>3rd Service</div>
                </div>
            </div>
            <div>
                <h1>WHY CHOOSE US</h1>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <h2>The Best Price</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h2>Daily Consultant</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h2>Custom Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h2>Premium Quality</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                    <div>Meet The Team</div>
                    <div>
                        <label>pic 1</label>
                        <label>pic 2</label>
                    </div>
                    <div>Video</div>
                    <div>Meet the experts who are ready to be your partners</div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <p>So, What are you waiting for? Let's talk about you project!</p>
                    </div>
                    <div className='flex flex-col'>
                        <a href="#">Business Email</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    <div>
                        <h1>Operation Hours</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h1>Location</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h1>Resources</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;