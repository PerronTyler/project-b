import React from 'react'
// import BathImgs from '../images/GalleryAssets/BathImgs'
// import DeckImgs from '../images/GalleryAssets/DeckImgs'
// import KitchenImgs from '../images/GalleryAssets/KitchenImgs'
// import RemodelImgs from '../images/GalleryAssets/RemodelImgs'
import { BATHS, DECKS, KITCHENS, REMODELS } from './Images.js'

const Gallery = () => {

    return (
        <>
            <h1 className='text-center text-4xl mt-10'>Our Showcase</h1>
            <hr className='gallery-line' />
            <p className='ml-24 mr-24 text-zinc-400'>When Apex Construction takes on a project, it's personal. It's about listening and understanding your desires and then delivering the best service, quality, and value throughout your experience. All our remodeling services are one of a kind because they are built with you in mind. We welcome you to discover a selection of remodeled projects our clients have entrusted us to build here in South Shore Massachusetts.</p>
            <div className='gallery-container'>
                <div className='grid grid-cols-4 gap-4 items-center justify-items-center mt-4 mb-4'>
                    {
                        BATHS && BATHS.map((item) =>
                        <div key={item.id}>
                            <img className='gallery-pic gallery-effect' src={item.image} alt="pic" />
                            <p className='text-center text-stone-500 mt-2'>{item.name}</p>
                        </div>
                        )
                    }
                    {
                        KITCHENS && KITCHENS.map((item) =>
                        <div key={item.id}>
                            <img className='gallery-pic gallery-effect' src={item.image} alt="pic" />
                            <p className='text-center text-stone-500 mt-2'>{item.name}</p>
                        </div>
                        )
                    }
                    {
                        DECKS && DECKS.map((item) =>
                        <div key={item.id}>
                            <img className='gallery-pic gallery-effect' src={item.image} alt="pic" />
                            <p className='text-center text-stone-500 mt-2'>{item.name}</p>
                        </div>
                        )
                    }
                    {
                        REMODELS && REMODELS.map((item) =>
                        <div key={item.id}>
                            <img className='gallery-pic gallery-effect' src={item.image} alt="pic" />
                            <p className='text-center text-stone-500 mt-2'>{item.name}</p>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery