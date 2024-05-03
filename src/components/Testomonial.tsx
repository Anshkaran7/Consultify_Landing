import React from 'react'
import TestimonialSlider from './TestomonialCard'

function Testomonial() {
    return (
        <div className='bg-white flex w-full mt-40 items-center flex-col'>
            <div>
                <h1 className='text-black font-open-sans font-semibold text-2xl md:text-[32px] '>
                    Client Testimonials
                </h1>
            </div>
            <div className='flex items-center mt-10 w-full justify-center'>
                <TestimonialSlider />
            </div>
            <button className=" mt-40 md:mt-10 lg:mt-6 bg-black rounded-[15px]  capitalize  hover:bg-opacity-80 duration-500 text-white text-sm font-open-sans px-8 py-4 ">
                Get Expert Advice Now !
            </button>
        </div>
    )
}

export default Testomonial