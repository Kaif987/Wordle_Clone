import React from 'react'

export default function Login(){
    return (
        <div className='container text-center flex flex-col items-center'>
            <h1 className='text-xl py-4 font-bold border-gray-800 '>The NewYork Times</h1>
            <hr></hr>
            <div className='max-w-md'>
                <h3 className='text-3xl py-4 font-mono'>Log in or create an account</h3>
                <div className='flex flex-col gap-4 mb-8'>
                    <div className='flex flex-col'> 
                        <label htmlFor="email" className='text-sm font-bold text-start mb-1'>Email Address</label>
                        <input type="text" className='border border-gray-700 py-1 rounded-sm px-2'/>
                    </div>
                    <button className='bg-black text-white font-bold py-2 rounded-sm'>Continue</button>
                    <h1 className='border-b border-gray-300 leading-taco'><span className='font-semibold bg-white px-2'>or</span></h1>
                </div>
                <div className='text-sm font-semibold mb-4'>
                    <p>By continuing, you agree to the <a href = "#" className='underline'>Terms of Service</a> and acknowledge our <a href = "#" className='underline'>Privacy Policy.</a></p>
                </div>
                <div className='font-bold'>
                    <div className='border border-black py-3 px-4 mb-1 rounded'>
                        <a href="#"><img src="" /></a>
                        <p>Continue with Google</p>
                    </div>
                    <div className='border border-black py-3 px-4 mb-1 rounded'>
                        <a href="#"><img src="" /></a>
                        <p>Continue with Facebook</p>
                    </div>
                    <div className='border border-black py-3 px-4 mb-1 rounded'>
                        <a href="#"><img src="" /></a>
                        <p>Continue with Apple</p>
                    </div>
                </div>
            </div>
        </div>
    )
}