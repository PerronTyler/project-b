import React from 'react'

const Main = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <h1 className='font-medium leading-tight text-5xl mt-0 mb-2 text-white'>
                        We help to <br />
                        build your <br />
                        dream.</h1>
                    <p className='text-white'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sstandard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make Aldus PageMaker including version of Lorem Ipsum.</p>
                </div>
                <div>
                    <img src="" alt="pic" />
                </div>
            </div>
            <div className='bg-green-500'>
                <h1>Over 25 years of experience</h1>
                <a href="/#">Get A Quote</a>
                <div className='grid grid-cols-3 gap-4'>
                    <div>1st Service</div>
                    <div>2nd Service</div>
                    <div>3rd Service</div>
                </div>
            </div>
            <div className='bg-white'>
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
                <div className=''></div>
                <div className='grid grid-cols-3 gap-2 bg-slate-900'>
                    <div>
                        <h1 className='text-white'>Operation Hours</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h1 className='text-white'>Location</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h1 className='text-white'>Resources</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;