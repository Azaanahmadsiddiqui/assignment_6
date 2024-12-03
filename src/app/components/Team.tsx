import Image from 'next/image';
import React from 'react';

function Team() {
  return (
    <div className="w-full h-auto bg-[#f7f7f7] px-4 py-10">
      
      <div className="w-full mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Our Team</h1>
        <p className="text-sm md:text-base text-center mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>


      <div className="flex flex-wrap justify-center gap-10">
       
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mb-10">
          <Image src={'/images/person1.png'} width={426} height={100} alt="person" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mb-10">
          <Image src={'/images/person2.png'} width={426} height={100} alt="person" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mb-10">
          <Image src={'/images/person3.png'} width={426} height={100} alt="person" />
        </div>

        
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mb-10">
          <Image src={'/images/person4.png'} width={426} height={100} alt="person" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mb-10">
          <Image src={'/images/person5.png'} width={420} height={100} alt="person" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mb-10">
          <Image src={'/images/person6.png'} width={426} height={100} alt="person" />
        </div>
      </div>
    </div>
  );
}

export default Team;
