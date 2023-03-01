import React from 'react'

const OwnerCard = () => {
    return (
        <div className='body'>
            <div className='card owner-image-1'>
                <div className='card-content'>
                    <h2 className='card-title text-xl'>John Smith</h2>
                    <p className='card-body'>Lorem ipsum dolor sit, amet consectetutatum nam.</p>
                    <a href="/company" className='button'>Learn More</a>
                </div>
            </div>
            <div className='card owner-image-2'>
                <div className='card-content'>
                    <h2 className='card-title text-xl'>Jane Doe</h2>
                    <p className='card-body'>Lorem ipsum dolor sit, amet consectetutatum nam.</p>
                    <a href="/company" className='button'>Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default OwnerCard