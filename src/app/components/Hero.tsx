import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div className="flex flex-wrap md:flex-nowrap w-full h-auto md:h-[845px] border-b-2">
     
      <div className="w-full md:w-[50%] border-b-2 md:border-b-0 md:border-r-2 flex flex-col items-center justify-center gap-6 p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left w-full md:w-[75%]">
          Learn new skills online with ease
        </h1>
        <p className="text-center md:text-left w-full md:w-[75%]">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="text-white bg-black py-2 px-4 rounded-md">Start learning now</button>
          <button className="border-2 py-2 px-4 border-black rounded-md">Explore Courses</button>
        </div>
      </div>

    
      <div className="w-full md:w-[50%] flex justify-center items-center p-6">
        <Image src={'/images/heroImage.png'} width={1000} height={100} alt="Hero Image" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Hero;
