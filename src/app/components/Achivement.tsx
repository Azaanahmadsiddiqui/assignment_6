import Image from 'next/image';
import React from 'react';

function Achivement() {
  return (
    <div className="w-full mt-[200px] px-4">

      <h1 className="text-3xl md:text-5xl font-bold text-center">Our Achievements</h1>
      <p className="mt-3 text-center text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
      <p className="text-center text-sm md:text-base">
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 mt-12">
        <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
          <Image src={'/images/achive1.png'} width={320} height={100} alt="achiveImages" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
          <Image src={'/images/achive2.png'} width={320} height={100} alt="achiveImages" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
          <Image src={'/images/achive3.png'} width={320} height={100} alt="achiveImages" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
          <Image src={'/images/achive4.png'} width={320} height={100} alt="achiveImages" />
        </div>
      </div>
    </div>
  );
}

export default Achivement;
