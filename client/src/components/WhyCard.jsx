import React from 'react'

const WhyCard = (props) => {
    return (
        <>
            <section className='custom-container bg-gray-100'>
                <div className='flex flex-col'>
                    <img className='logo-height ml-4 mt-4' src={`${props.imgurl}`} alt='pic' />
                    <div className='p-4'>
                        <h3 className='font-semibold text-lg'>{props.title}</h3>
                        <p className='text-stone-500 mt-2'>{props.desc}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyCard