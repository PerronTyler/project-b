import React from 'react'
import { useState, useEffect } from 'react'
import { GALLERYDATA } from './Images.js'
import Footer from './Footer.jsx'
import Pagination from './Pagination.js'
import Posts from './Posts.js'

const Gallery = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)
    let kitchenData = {}
    let decksData = {}
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const result = GALLERYDATA
            setPosts(result)
            setLoading(false)
        }
        fetchPosts();
    }, [])

    const filterCategory = (categoryItem) => {
        const result = GALLERYDATA.filter((currentCategory) => {
            return currentCategory.category === categoryItem;
        });
        setPosts(result);
    }

    const intializeKitchenData = (GALLERYDATA) => {
        for (let index in GALLERYDATA) {
            if(index[category] == "Kitchen") {
                kitchenData[index] = GALLERYDATA[index] 
            }
        }
    }
    intializeKitchenData(GALLERYDATA)
    
    const intializeDecksData = (GALLERYDATA) => {
        for (let index in GALLERYDATA) {
            if(index[category] == "Decks") {
                decksData[index] = GALLERYDATA[index] 
            }
        }
    }
    intializeDecksData(GALLERYDATA)

    if (loading) {
        return <h2>Loading...</h2>
    }

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <h1 className='text-center text-4xl mt-10'>Our Showcase</h1>
            <hr className='gallery-line' />
            <p className='mt-10 mb-10 ml-24 mr-24 text-zinc-400'>When Apex Construction takes on a project, it's personal. It's about listening and understanding your desires and then delivering the best service, quality, and value throughout your experience. All our remodeling services are one of a kind because they are built with you in mind. We welcome you to discover a selection of remodeled projects our clients have entrusted us to build here in South Shore Massachusetts.</p>
            <div className='text-center mt-10 mb-10'>
                <h4>Filter by Category</h4>
                <div className='p-4'>
                    <button className='btns' onClick={() => setPosts(GALLERYDATA)}>All</button>
                    <button className='btns' onClick={() => setPosts(kitchenData)}>Kitchens</button>
                    <button className='btns' onClick={() => filterCategory('Baths')}>Baths</button>
                    <button className='btns' onClick={() => filterCategory('Decks')}>Decks</button>
                    <button className='btns' onClick={() => filterCategory('Remodels')}>Remodels</button>
                </div>
            </div>
            <div className='gallery-container'>
                <div>
                    <Posts posts={currentPosts} loading={loading}/>
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery