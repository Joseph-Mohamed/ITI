import React from 'react'
import errorImage from '../../assets/404.png'

export default function NotFound() {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center vh-100'>
            <img src={errorImage} alt="Not Found Image" className='w-50 mx-auto'/>
        </div>
    )
}
