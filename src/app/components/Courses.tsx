import Image from 'next/image';
import React from 'react';

const Courses = () => {
  return (
    <div className="mt-20 px-4">
      
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Explore Courses By Category</h1>
        <p className="mt-4 text-sm md:text-base">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      
        <div className="flex flex-col gap-6 items-center">
          <Image src={'/images/courses1.png'} width={400} height={50} alt="courses" />
          <Image src={'/images/courses2.png'} width={400} height={50} alt="courses" />
          <Image src={'/images/courses3.png'} width={400} height={50} alt="courses" />
        </div>

        
        <div className="flex flex-col gap-6 items-center">
          <Image src={'/images/courses4.png'} width={400} height={50} alt="courses" />
          <Image src={'/images/courses5.png'} width={400} height={50} alt="courses" />
          <Image src={'/images/courses6.png'} width={400} height={50} alt="courses" />
        </div>

        <div className="flex flex-col gap-6 items-center">
          <Image src={'/images/courses7.png'} width={400} height={50} alt="courses" />
          <Image src={'/images/courses8.png'} width={400} height={50} alt="courses" />
          <Image src={'/images/courses9.png'} width={400} height={50} alt="courses" />
        </div>
      </div>

      
      <div className="mt-10 flex items-center justify-center">
        <button className="border-2 border-gray-600 py-3 px-6 rounded-md">View All Courses</button>
      </div>
    </div>
  );
};

export default Courses;
