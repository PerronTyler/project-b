import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'

const initialState = {
    _id: "", 
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: ""
}

const Contact = () => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/claims/new',
            values
        )
            .then(res => {
                setValues(initialState)
                setErrors(initialState)
                navigate('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.error.errors
                const errorArr = []
                for(const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
            })
    }


    return (
        <>
            <div>
                <h1 className='text-center text-6xl italic text-amber-600 mt-16 mb-16'>Contact Us Today:</h1>
                <h4 className='contact-border text-slate-400 border-l-amber-400 border-t-transparent border-r-transparent border-b-transparent border-4 p-4 mt-16 mb-16'>Your next project's success matters to us. Contact us to find out how our experts can help you take your ideas to the next level.</h4>
            </div>
            <div className='flex justify-evenly flex-wrap'>
                <div className='w-full max-w-md'>
                    <form onSubmit={handleSubmit} className='form-color shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-slate-800 text-sm font-bold mb-2'>Enter Name: </label>
                            <input type="text" name='name' placeholder='full name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline' value={values.name} onChange={handleChange}/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-slate-800 text-sm font-bold mb-2'>Enter Email: </label>
                            <input type="text" name='email' placeholder="email address" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline' value={values.email} onChange={handleChange}/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="phoneNumber" className='block text-slate-800 text-sm font-bold mb-2'>Enter Phone Number: </label>
                            <input type="tel" name='phoneNumber' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="123-456-7890" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline' value={values.phoneNumber} onChange={handleChange}/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="subject" className='block text-slate-800 text-sm font-bold mb-2'>Subject: </label>
                            <input type="text" name='subject' placeholder='ex. kitchen remodel' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline' value={values.subject} onChange={handleChange}/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="message" className='block text-slate-800 text-sm font-bold mb-2'>Enter Message: </label>
                            <textarea type="textarea" name='message' placeholder='description' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline' value={values.message} onChange={handleChange}/>
                        </div>
                        <button className='inline-block align-baseline font-bold text-sm text-white bg-slate-800 p-4 hover:text-amber-200'>Submit</button>
                    </form>
                </div>
                <div className='w-full max-w-md bg-zinc-100 p-4 mb-4'>
                    <div className='p-4 ml-4'>
                        <h2 className='italic text-2xl'>General Inquiries</h2>
                        <p>Have a question? Get in touch at:</p>
                        <p className='text-amber-500'>info@media.com</p>
                        <p className='text-amber-500'>800.800.8888</p>
                    </div>
                    <div className='p-4 ml-4'>
                        <h2 className='italic text-2xl'>Our Location</h2>
                        <p>South Shore, MA</p>
                        <p className='text-yellow-400'>Get Directions</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact