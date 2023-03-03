import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='text-center mt-10 mb-10'>
            <ul className='inline-flex -space-x-px'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => paginate(number)} className='relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white'>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination