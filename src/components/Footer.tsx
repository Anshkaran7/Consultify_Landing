'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
    children: React.ReactNode;
    delay: number;
  }
  
  const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay }) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
    });

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
        >
            {children}
        </motion.div>
    );
};

function Footer() {
    return (
        <div className='p-4 mt-40'>
            <div className='flex flex-col lg:flex-row rounded-[15px] relative bg-[#1C1C1C] space-y-5 p-2 md:p-6'>
                <div className='lg:w-[50%] items-start space-y-8 p-5'>
                    <AnimatedText delay={0.3}>
                        <div>
                            <h1 className='text-white font-open-sans'>About Us</h1>
                            <p className='text-white/40 mt-2 text-[13px] text-justify font-open-sans'>
                                Consultify is dedicated to revolutionizing the way people access legal advice. Our mission is to make expert legal guidance accessible to everyone, regardless of their location or financial resources. We are committed to upholding the highest standards of professionalism, integrity, and client satisfaction.
                            </p>
                        </div>
                    </AnimatedText>
                    <AnimatedText delay={0.6}>
                        <div>
                            <h1 className='text-white font-open-sans'>Our Mission</h1>
                            <p className='text-white/40 mt-2 text-[13px] text-justify font-open-sans'>
                                Our mission is simple: to make expert legal advice accessible to everyone, regardless of their location, background, or financial resources. We are dedicated to empowering individuals and businesses alike with the knowledge and support they need to address their legal challenges confidently.
                            </p>
                        </div>
                    </AnimatedText>
                    <AnimatedText delay={0.9}>
                        <div>
                            <h1 className='text-white font-open-sans'>Our Commitment</h1>
                            <p className='text-white/40 mt-2 text-[13px] text-justify font-open-sans'>At Consultify, we are committed to upholding the highest standards of professionalism, integrity, and client satisfaction. We are constantly striving to improve and enhance our platform to better serve the needs of our users and exceed their expectations.</p>
                        </div>
                    </AnimatedText>
                    <AnimatedText delay={1.2}>
                        <div>
                            <h1 className='text-white font-open-sans'>Get in Touch</h1>
                            <p className='text-white/40 mt-2 text-[13px] text-justify font-open-sans'>Have questions or need assistance? Our friendly and knowledgeable team is here to help. Contact us today to learn more about how Consultify can help you navigate your legal challenges with confidence.</p>
                        </div>
                    </AnimatedText>
                </div>
                <div className='lg:w-[50%] flex flex-col h-full justify-between px-4 pb-2 md:px-8'>
                    <div className=' flex flex-col space-y-5 md:space-y-0 md:flex-row  justify-between w-full '>
                    <div className='space-y-1 flex flex-col'>
                            <AnimatedText delay={1.5}>
                            <h1 className='text-white font-open-sans'>Contact</h1>
                            <p className='text-white text-[13px] text-justify font-open-sans'>
                                Email:
                                <span className='text-white/40 ml-2 text-[13px] text-justify font-open-sans'>
                                    karan@gmail.com
                                </span>
                            </p>
                            </AnimatedText>
                            <AnimatedText delay={1.8}>
                            <p className='text-white  text-[13px] text-justify font-open-sans'>
                                Phone:
                                <span className='text-white/40 ml-2 text-[13px] text-justify font-open-sans'>
                                    1234567890
                                </span>
                            </p>
                            </AnimatedText>
                        </div>
                        <div className='space-y-1 flex flex-col'>
                            <AnimatedText delay={2.1}>
                            <h1 className='text-white font-open-sans'>Other Links</h1>
                            <p className='text-white/40  text-[13px] text-justify font-open-sans'>Terms Of Service</p>
                            <p className='text-white/40  text-[13px] text-justify font-open-sans'>Privacy Policy</p>
                            <p className='text-white/40  text-[13px] text-justify font-open-sans'>FAQs</p>
                            <p className='text-white/40  text-[13px] text-justify font-open-sans'>Cookies Policy</p>
                            </AnimatedText>
                        </div>

                        <div className='space-y-1 flex flex-col'>
                            <AnimatedText delay={2.4}>
                            <h1 className='text-white font-open-sans'>Social Media</h1>
                            <p className='text-white/40  text-[13px] text-justify font-open-sans'>Instagram</p>
                            <p className='text-white/40  text-[13px] text-justify font-open-sans'>Facebook</p>
                            <p className='text-white/40  text-[13px] text-justify font-open-sans'>Twitter</p>
                            </AnimatedText>
                        </div>

                    </div>

                    <div className='flex flex-col space-y-6 items-start  mt-10 lg:mt-0 lg:absolute bottom-10'>
                    <AnimatedText delay={2.7}>
                        <div className='flex flex-col space-y-6 items-start'>
                        <h1 className='text-white font-open-sans'
                        >Get in touch and for regular update / any inquiries</h1>
                        <input type="text" placeholder="Enter your email" className='outline-none bg-transparent font-open-sans text-sm border-b-[1px] border-gray-100/20 duration-500 w-[100%] focus:border-white' />
                        <input type="text" placeholder="Enter your message" className='outline-none bg-transparent font-open-sans text-sm border-b-[1px] border-gray-100/20 duration-500 w-[100%] focus:border-white' />
                        <button className='bg-white rounded-[10px]  capitalize  hover:bg-opacity-80 duration-500 text-black text-sm font-open-sans px-6 py-2'
                        >Submit</button>
                        </div>
                    </AnimatedText>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
