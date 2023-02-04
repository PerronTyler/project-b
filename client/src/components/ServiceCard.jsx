import React from 'react'


const ServiceCard = (props) => {

    return (
        <div className={`ml-4 mr-4 max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${props.imageurl}`}>
            <h5 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
            <p className='text-center'><a className='browse-now-button' href="/#">Browse Now<svg
                className="ml-2 -mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg></a></p>
        </div>
    )
}

export default ServiceCard