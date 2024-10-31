import React from 'react'
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[150px] text-center'>
            <h1 className='text-[40px]'>Thank You!</h1>
            <p className='text-[37px]'>Your application has been received.</p>
            <Link to='/' className='mt-[50px] underline'>Back to home</Link>
        </div>
    )
}

export default ThankYou