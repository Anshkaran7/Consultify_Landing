import Image from 'next/image'
import React from 'react'

function Section3() {
    return (
        <div className=' px-4 flex items-center flex-col '>
            <div className='flex items-center flex-col'>
                <h1 className='text-black font-open-sans font-semibold text-[32px] '>
                    Access to Expert Legal Guidance
                </h1>
                <p className='text-[#1C1C1C]/40 text-[20px] font-open-sans'>Anytime, Anywhere</p>
            </div>

            <div className='flex  flex-col lg:flex-row w-full lg:h-[80vh] gap-x-5 mt-20 items-start'>
                <div className='bg-black lg:w-[50%] w-full h-[80vh] rounded-2xl overflow-hidden relative'>
                    <h1 className='font-open-sans text-xl capitalize text-center mt-10'>Personalized Solutions for Individual Needs</h1>
                    <Image src="/assets/iPad.png" alt="image" width={2000} height={2000} className=" w-full h-full object-cover aspect-square absolute -bottom-10 mt-20" />
                </div>
                <div className='flex flex-col w-full bg-transparent   lg:h-full mt-5 lg:mt-0 lg:w-[50%]  space-y-5 '>
                    <div className=' rounded-2xl md:h-[40vh] lg:h-[80%] overflow-hidden relative'>
                        <Image src="/assets/guider.png" alt="image" width={2000} height={2000} className=" w-full h-[80vh] object-cover aspect-auto absolute -bottom-10 " />
                        <div className='relative px-10 '> 
                            <h1 className='font-open-sans text-xl text-start capitalize mt-5 md:mt-10 z-10'>On-Demand Legal Consultation</h1>
                            <p className='font-open-sans text-[#A4A4A4] text-justify text-[14px] mt-5'>Our platform provides immediate access to experienced lawyers, allowing users to seek advice and guidance at their convenience, regardless of their location or time zone. Say goodbye to long wait times and scheduling conflicts with traditional legal consultations.</p>
                        </div>
                    </div>
                    <div className='bg-black  rounded-2xl lg:h-[20%] overflow-hidden relative'>
                        <h1 className='font-open-sans capitalize text-sm md:text-xl text-center my-10 lg:mt-10'>Navigate Legal Matters with Ease</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Section3