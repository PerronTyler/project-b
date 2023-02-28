import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    
    return (
        <div className='flex flex-wrap justify-evenly items-center justify-items-center p-4 mt-4 mb-4'>
            {
                posts.map((post) =>
                <div key={post.id}>
                    <img className='gallery-pic gallery-effect' src={post.image} alt="pic" />
                    <p className='text-center text-stone-500 mt-2 mb-4'>{post.name}</p>
                </div>
                )
            }
        </div>
    )
}

export default Posts