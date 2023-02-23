import React from 'react'
import { useState } from 'react'
import { GALLERYDATA } from './Images.js'
import Footer from './Footer.jsx'

const Gallery = () => {
    const [products, setProducts] = useState(GALLERYDATA)

    const filterCategory = (categoryItem) => {
        const result = GALLERYDATA.filter((currentCategory) => {
            return currentCategory.category === categoryItem;
        });
        setProducts(result);
    }

    return (
        <>
            <h1 className='text-center text-4xl mt-10'>Our Showcase</h1>
            <hr className='gallery-line' />
            <p className='mt-10 mb-10 ml-24 mr-24 text-zinc-400'>When Apex Construction takes on a project, it's personal. It's about listening and understanding your desires and then delivering the best service, quality, and value throughout your experience. All our remodeling services are one of a kind because they are built with you in mind. We welcome you to discover a selection of remodeled projects our clients have entrusted us to build here in South Shore Massachusetts.</p>
            <div className='text-center mt-10 mb-10'>
                <h4>Filter by Category</h4>
                <div className='p-4'>
                    <button className='btns' onClick={() => setProducts(GALLERYDATA)}>All</button>
                    <button className='btns' onClick={() => filterCategory('Baths')}>Baths</button>
                    <button className='btns' onClick={() => filterCategory('Kitchens')}>Kitchens</button>
                    <button className='btns' onClick={() => filterCategory('Decks')}>Decks</button>
                    <button className='btns' onClick={() => filterCategory('Remodels')}>Remodels</button>
                </div>
            </div>
            <div className='gallery-container'>
                <div className='grid grid-cols-4 gap-4 items-center justify-items-center p-4 mt-4 mb-4'>
                    {
                        products.map((product) =>
                        <div key={product.id}>
                            <img className='gallery-pic gallery-effect' src={product.image} alt="pic" />
                            <p className='text-center text-stone-500 mt-2'>{product.name}</p>
                        </div>
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery