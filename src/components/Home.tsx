import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div className='relative bg-white h-screen overflow-hidden py-2 px-10'>
    <div className='mt-6 relative top-1 z-10 flex flex-row justify-between '>
        <h1 className='font-playfair-display-sc font-medium text-2xl'>Consultify</h1>
    <div className="font-open-sans ">
            <Link href="/about">Home</Link>
            <Link href="/about" className="ml-4">Contact Us</Link>
          </div>
    </div>
      <div className="px-4 pt-3 flex flex-col justify-center items-center absolute inset-0">
        <Image
          src="/assets/main.png"
          alt="image"
          layout="responsive"
          width={2000}
          height={2000}
          className="absolute inset-0 w-full h-full object-cover p-4"
        />
        
        <div className="flex flex-col justify-center items-center text-white z-10 w-[60%]">
          <h1 className="font-playfair-display-sc text-[48px] font-semibold mb-4 text-center">
            Expert Legal Consultancy at Your Fingertips
          </h1>
          <p className="font-open-sans  text-center text-[16px]">
            Welcome to Consultify, where legal guidance meets convenience. Our
            platform connects you with experienced lawyers ready to provide
            personalized advice tailored to your specific needs. Whether you're
            facing a complex legal issue or simply need clarification on a legal
            matter, we're here to help.
          </p>
        </div>
        <div className='z-10 absolute flex flex-row w-full gap-x-5 items-center justify-center mt-4 bottom-32'>
            <button className="mt-6 bg-transparent border-[#D9D9D9] border-[1px] uppercase text-xs w-[14%] text-black font-open-sans px-6 py-3 rounded-md">
                Go to the APP
            </button>
            <button className="mt-6 bg-transparent border-[#D9D9D9] border-[1px] uppercase text-xs w-[14%] text-black font-open-sans px-6 py-3 rounded-md">
            Go to the web
            </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
