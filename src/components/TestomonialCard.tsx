'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I was impressed by the depth of knowledge and professionalism of the lawyer I consulted through Consultify. They provided me with clear and actionable advice that helped me navigate a complex legal issue.",
    author: "Mr. Rohan"
  },
  {
    quote: "Consultify exceeded my expectations. The lawyer I connected with was highly knowledgeable and approachable. I received excellent guidance that helped me resolve my legal matter quickly.",
    author: "Ms. Priya"
  },
  {
    quote: "Using Consultify was a game-changer for me. I appreciated the convenience of being able to consult with a lawyer from the comfort of my own home. The advice I received was invaluable.",
    author: "Mr. Singh"
  },
  {
    quote: "I highly recommend Consultify to anyone in need of legal assistance. The platform is user-friendly, and the lawyers are top-notch. I received prompt and insightful advice that helped me address my legal concerns effectively.",
    author: "Ms. Patel"
  },
  {
    quote: "Consultify provided me with a stress-free experience. The lawyer I consulted with was patient and understanding, and they provided me with practical solutions to my legal issues. I am grateful for the support I received.",
    author: "Mr. Khan"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  return (
    <div className='relative lg:w-[60%] h-44 flex flex-col justify-between p-4'>
      <div className='relative'>
        <h1 className='text-[200px] -top-20 absolute text-[#1C1C1C]/20'>“</h1>
        <motion.p className='text-[#404040] mt-6 px-5 text-justify capitalize' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {testimonials[currentSlide].quote}
        </motion.p>
      </div>
      <div className='flex flex-col mt-2  md:flex-row justify-between px-4 items-center'>
        <div className='flex flex-row md:justify-start justify-between  w-full items-center gap-x-2'>
          <motion.div  whileTap={{ scale: 0.8 }} onClick={goToPrevSlide}>
            <Image src="/assets/LeftArrow.png" alt="image" width={1000} height={1000} className="h-3 w-full cursor-pointer" />
          </motion.div>
          <motion.div  whileTap={{ scale: 0.8 }} onClick={goToNextSlide}>
            <Image src="/assets/rightArrow.png" alt="image" width={1000} height={1000} className="h-3 cursor-pointer w-full" />
          </motion.div>
        </div>
        <h1 className='text-black w-full flex justify-end mt-3 font-open-sans font-semibold'>{testimonials[currentSlide].author}</h1>
      </div>
    </div>
  );
};

export default TestimonialSlider;
