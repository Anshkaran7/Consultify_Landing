'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

function Home() {
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <div className='relative bg-white h-screen overflow-hidden py-2 px-3 md:px-10'>
      <motion.div
        className='mt-6 relative top-1 z-10 flex flex-row items-center justify-between rounded-xl'
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <h1 className='font-playfair-display-sc font-medium  text-white  text-2xl'>Consultify</h1>
        <div className="font-open-sans text-xs md:text-base">
          <motion.a href="/home" whileHover={{ scale: 1.1 }}>Home
          </motion.a>
          <motion.a href="/contact" className="ml-4" whileHover={{ scale: 1.1 }}>Contact Us
          </motion.a>
        </div>
      </motion.div>
      <div className=" pt-3 flex flex-col justify-center items-center m-0 md:m-4 rounded-xl absolute inset-0">
        <Image
          src="/assets/main.png"
          alt="image"
          width={2000}
          height={2000}
          className="absolute  inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="flex flex-col justify-center items-center text-white z-10 md:w-[80%] lg:w-[60%]">
          <motion.h1
            className="font-playfair-display-sc text-2xl md:text-[48px] font-semibold mb-4 leading-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
          >
            Expert Legal Consultancy at Your Fingertips
          </motion.h1>
          <motion.p
            className="font-open-sans text-center text-xs md:text-[14px] lg:text-[16px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
          >
            Welcome to Consultify, where legal guidance meets convenience. Our
            platform connects you with experienced lawyers ready to provide
            personalized advice tailored to your specific needs. Whether you're
            facing a complex legal issue or simply need clarification on a legal
            matter, we're here to help.
          </motion.p>
        </div>

        <motion.div
          className='z-10 absolute flex flex-row w-full gap-x-5 items-center justify-center mt-4 bottom-3'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
        >
          <motion.button
            className="mt-6 bg-transparent border-[#D9D9D9] border-[1px] uppercase text-[11px] md:text-xs w-[30%] lg:w-[18%] text-black font-open-sans px-6 py-3 rounded-md"
            whileHover="hover"
            variants={buttonVariants}
          >
            Go to the APP
          </motion.button>
          <motion.button
            className="mt-6 bg-transparent border-[#D9D9D9] border-[1px] uppercase text-[11px] md:text-xs w-[30%] lg:w-[18%] text-black font-open-sans px-6 py-3 rounded-md"
            whileHover="hover"
            variants={buttonVariants}
          >
            Go to the web
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
