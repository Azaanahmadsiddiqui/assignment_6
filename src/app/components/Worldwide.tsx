import Image from 'next/image';
import React from 'react';

function Worldwide() {
  return (
    <div className="bg-[#F7F7F7] flex flex-wrap sm:grid sm:grid-cols-2 w-full h-auto sm:h-[228px] items-center p-4">
      
      <span className="w-full sm:w-auto text-center sm:text-left font-bold text-2xl sm:text-lg">
        Trusted by 2000+ companies worldwide.
      </span>

      
      <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-4 sm:mt-0">
        <Image
          src={'/images/Logos.png'}
          width={500}
          height={100}
          alt="worldwide"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Worldwide;
