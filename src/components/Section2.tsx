'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCardProps {
    children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className="md:w-[28%] py-10 flex flex-col items-center"
        >
            {children}
        </motion.div>
    );
};

const Section2: React.FC = () => {
    return (
        <div className='px-4 flex items-center flex-col mt-20'>
            <div className='flex items-center flex-col'>
                <h1 className='text-black font-open-sans text-center font-semibold text-base md:text-[32px] '>
                    Start Your Consultation Journey Today!
                </h1>
                <p className='text-[#1C1C1C]/40 text-sm md:text-[20px] font-open-sans mt-4'>With simple steps</p>
            </div>
            <Image
                src="/assets/line.png"
                alt="image"
                layout="responsive"
                width={700}
                height={700}
                className="w-full h-full mt-20"
            />
            <div className='flex flex-col md:flex-row relative bottom-20 mt-2 justify-evenly gap-x-5 items-start'>
                <AnimatedCard>
                    <Image src="/assets/1.png" alt="image" width={1000} height={1000} className="h-16 w-16" />
                    <p className='font-open-sans text-[20px] mt-6 font-semibold'>Submit Your Inquiry</p>
                    <p className='text-justify text-[#1C1C1C]/40 font-medium capitalize mt-3 text-[14px] font-open-sans'>
                        Fill out a brief form outlining your legal question or concern. Provide any relevant details to help our experts understand your situation.
                    </p>
                </AnimatedCard>
                <Image
                src="/assets/line.png"
                alt="image"
                layout="responsive"
                width={700}
                height={700}
                className="w-full md:hidden flex h-full mt-20"
            />
                <AnimatedCard>
                    <Image src="/assets/2.png" alt="image" width={1000} height={1000} className=" md:hidden flex relative bottom-20 mt-2 h-16 w-16" />
                    <Image src="/assets/2.png" alt="image" width={1000} height={1000} className="md:flex hidden h-16 w-16" />

                    <p className='font-open-sans text-[20px] mt-6 font-semibold'>Connect with a Legal Expert</p>
                    <p className='text-justify text-[#1C1C1C]/40 font-medium capitalize mt-3 text-[14px] font-open-sans'>
                        Our platform matches you with a qualified lawyer based on your inquiry. You'll receive instant access to schedule a consultation at a time convenient for you.
                    </p>
                </AnimatedCard>
                <Image
                src="/assets/line.png"
                alt="image"
                layout="responsive"
                width={700}
                height={700}
                className="w-full flex md:hidden h-full mt-20"
            />
                <AnimatedCard>
                    <Image src="/assets/3.png" alt="image" width={1000} height={1000} className=" md:hidden flex relative bottom-20 mt-2 h-16 w-16" />
                    <Image src="/assets/3.png" alt="image" width={1000} height={1000} className=" hidden md:flex h-16 w-16" />

                    <p className='font-open-sans text-[20px] mt-6 font-semibold'>Receive Tailored Advice</p>
                    <p className='text-justify text-[#1C1C1C]/40 font-medium capitalize mt-3 text-[14px] font-open-sans'>
                        During your consultation, discuss your legal issue directly with the expert. Receive personalized advice and guidance to help you navigate your legal challenges effectively.
                    </p>
                </AnimatedCard>
            </div>
        </div>
    );
};

export default Section2;
