'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface KeyFeature {
  title: string;
  description: string;
}

const data: KeyFeature[] = [
  {
    title: "Diverse Expertise",
    description: "Access a diverse network of legal professionals specializing in various fields.",
  },
  {
    title: "Instant Consultation",
    description: "Get immediate answers to your legal queries, anytime, anywhere.",
  },
  {
    title: "Confidentiality",
    description: "Your privacy is our priority. Consult with confidence."
  },
  {
    title: "Secure Payments",
    description: "Transparent pricing and secure payment methods ensure peace of mind."
  }
];

const KeyFeatures: React.FC = () => {
  return (
    <div className='mt-40 flex flex-col justify-center items-center'>
        <h1 className='text-black font-open-sans font-semibold text-[32px] '>
            What We Offer 
        </h1>
        <p className='text-[#1C1C1C]/40 text-[20px] font-open-sans'>Our Key Features</p>
        <div className='flex flex-col space-y-10 w-full justify-center items-center mt-10'>
          {data.map((item, index) => (
            <KeyFeatureCard key={index} title={item.title} description={item.description} index={index} />
          ))}
        </div>
    </div>
  );
}

interface KeyFeatureCardProps {
  title: string;
  description: string;
  index: number;
}

const KeyFeatureCard: React.FC<KeyFeatureCardProps> = ({ title, description, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1 // Adjust threshold as needed
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.3 }} // Delay each card animation
      className=' w-[90%] lg:w-[50%] relative'
    >
      <Image src="/assets/keyFeatureLine.png" alt="image" width={1000} height={1000} className="h-2 w-full " />
      <div className='flex flex-row justify-between items-start mt-2 w-full text-black'>
        <h1 className='text-[#1C1C1C] font-open-sans text-sm md:text-[18px] font-semibold'>{title}</h1>
        <p className='text-[#1C1C1C]/40 font-open-sans w-[50%] text-justify text-xs md:text-[16px] font-medium'>{description}</p>
      </div>
    </motion.div>
  );
}

export default KeyFeatures;
