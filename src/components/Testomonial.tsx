'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TestimonialSlider from './TestomonialCard';

function Testimonial() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3, // Adjust the delay as needed
      },
    },
  };

  return (
    <div className='bg-white flex w-full mt-40 items-center flex-col' ref={ref}>
      <motion.div
        className='bg-white flex w-full mt-40 items-center flex-col'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div>
          <h1 className='text-black font-open-sans font-semibold text-2xl md:text-[32px]'>
            Client Testimonials
          </h1>
        </div>
        <div className='flex items-center mt-10 w-full justify-center'>
          <TestimonialSlider />
        </div>
        <motion.button
          className="mt-40 md:mt-10 lg:mt-6 bg-black rounded-[15px] capitalize hover:bg-opacity-80 duration-500 text-white text-sm font-open-sans px-8 py-4"
          variants={containerVariants}
        >
          Get Expert Advice Now!
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Testimonial;
