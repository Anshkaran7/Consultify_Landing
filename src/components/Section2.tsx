import React from 'react'
import Image from 'next/image'

function Section2() {
    return (
        <div className=' px-4 flex items-center flex-col '>
            <div className='flex items-center flex-col'>
                <h1 className='text-black font-open-sans font-semibold text-[32px] '>
                    Start Your Consultation Journey Today !
                </h1>
                <p className='text-[#1C1C1C]/40 text-[20px] font-open-sans'>With simple steps</p>
            </div>
            <Image
                src="/assets/line.png"
                alt="image"
                layout="responsive"
                width={700}
                height={700}
                className=" w-full h-full mt-20"
            />
            <div className='flex flex-row relative bottom-20 mt-2 justify-evenly gap-x-5 items-start'>
                <Card
                    imageSrc="/assets/1.png"
                    title="Submit Your Inquiry"
                    description="Fill out a brief form outlining your legal question or concern. Provide any relevant details to help our experts understand your situation."
                />
                <Card
                    imageSrc="/assets/2.png"
                    title="Connect with a Legal Expert"
                    description="Our platform matches you with a qualified lawyer based on your inquiry.You'll receive instant access to schedule a consultation at a time convenient for you."
                />
                <Card
                    imageSrc="/assets/3.png"
                    title="Receive Tailored Advice"
                    description='During your consultation, discuss your legal issue directly with the expert.Receive personalized advice and guidance to help you navigate your legal challenges effectively.'
                />
            </div>
        </div>
    )
}

export default Section2


interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className=' text-black w-[28%] py-10  flex flex-col items-center'>
            <Image src={imageSrc} alt="image" width={1000} height={1000} className="h-16 w-16" />
            <p className='font-open-sans text-[20px] mt-6 font-semibold'>{title}</p>
            <p className='text-justify text-[#1C1C1C]/40 font-medium capitalize mt-3 text-[14px] font-open-sans'>{description}</p>
        </div>
    );
}

