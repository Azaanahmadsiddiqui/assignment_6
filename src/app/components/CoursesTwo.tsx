import Image from 'next/image';
import React from 'react';

function CoursesTwo() {
  return (
    <div className="w-full mt-[250px] px-4">
  
      <h1 className="text-3xl md:text-5xl font-bold text-center">Courses</h1>
      <p className="text-sm md:text-base text-center mt-4">Your Ultimate Guide to learning</p>

      <div className="w-full flex items-center justify-center gap-8 mt-8">
        <button className="border-b border-black text-sm md:text-base">Popular</button>
        <button className="text-sm md:text-base">Recommended</button>
        <button className="text-sm md:text-base">Best Price</button>
      </div>

    
      <div>
        <div className="flex flex-wrap justify-center gap-7 mt-16">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
            <Image src={'/images/Card1.png'} width={426} height={100} alt="cardsOfCourse" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
            <Image src={'/images/Card2.png'} width={426} height={100} alt="cardsOfCourse" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
            <Image src={'/images/Card3.png'} width={426} height={100} alt="cardsOfCourse" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-7 mt-16">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
            <Image src={'/images/Card4.png'} width={426} height={100} alt="cardsOfCourse" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
            <Image src={'/images/Card5.png'} width={426} height={100} alt="cardsOfCourse" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
            <Image src={'/images/Card6.png'} width={426} height={100} alt="cardsOfCourse" />
          </div>
        </div>
      </div>

      
      <div className="w-full flex justify-center items-center h-[250px]">
        <button className="border-2 border-black py-2 px-3 rounded-md text-sm md:text-base">
          View All Courses
        </button>
      </div>
    </div>
  );
}

export default CoursesTwo;
