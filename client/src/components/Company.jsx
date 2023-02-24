import React from 'react'
import Footer from './Footer'
import pic1 from '../images/CompanyAssets/Company04.jpg'
import pic2 from '../images/CompanyAssets/Company06.jpg'

const Company = () => {
    return (
        <>
            <div className='company-image-1'></div>
            <div className='text-center ml-40 mr-40 mt-20 mb-20'>
                <p className='text-2xl underline mt-4 mb-4'>AN EXTRAORDINARY BUILDING EXPERIENCE</p>
                <hr />
                <p className='text-lg p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi ex, consequatur, mollitia totam pariatur eaque dolorum sint quas ullam assumenda saepe possimus, nihil laudantium? Perspiciatis expedita repellendus repudiandae veniam!</p>
                <p className='text-lg p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto tempora, rem aut numquam molestias, ipsum autem optio impedit praesentium consectetur nesciunt quisquam quia, iure recusandae necessitatibus atque. Tempora, quia?</p>
            </div>
            <div className='bg-teal-200 h-screen'>
                <div className='company-container'>
                    <div className='mosaic mr-10 mt-48'>
                        <div className='mosaic__item'>
                            <img className='border-4 border-white' src={pic2} alt="pic" />
                        </div>
                        <div className='mosaic__item'>
                            <img className='img-reverse border-4 border-white' src={pic1} alt="pic" />
                        </div>
                    </div>
                    <div className='text-center p-4 mt-48 mb-10'>
                        <h1 className='text-2xl p-4 font-bold'>OUR TEAM</h1>
                        <hr />
                        <p className='mt-10 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque tempora optio minima blanditiis eius voluptates nobis, voluptate, tempore ullam numquam autem? Fuga quae cupiditate autem porro aliquid asperiores nobis.</p>
                    </div>
                </div>
            </div>
            <div className='build-w-us'>
                <p className='text-8xl text-center py-48 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-yellow-500 '>Build. With. Us.</p>
            </div>
            <Footer />
        </>
    )
}

export default Company