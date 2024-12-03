import Image from 'next/image';
import React from 'react';

function Container() {
  return (
    <div className="flex flex-wrap bg-[#F7F7F7] h-auto w-full items-center border-b-2 border-black p-4">
     
      <div className="flex flex-wrap gap-4 md:gap-6 w-full md:w-auto justify-center md:justify-start">
        <p className="border-r-2 border-black px-4">Phone Number: 956 742 455 678</p>
        <p>Email: info@ddsgnr.com</p>
      </div>

      <div className="flex gap-4 md:gap-6 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end ">
        <Image src={'/images/facebook.png'} width={30} height={20} alt="Facebook" className="rounded-md bg-black" />
        <Image src={'/images/insta.png'} width={30} height={20} alt="Instagram" className="rounded-md bg-black" />
        <Image src={'/images/twitter.png'} width={30} height={20} alt="Twitter" className="rounded-md bg-black" />
        <Image src={'/images/linkedin.png'} width={30} height={20} alt="LinkedIn" className="rounded-md bg-black" />
      </div>
    </div>
  );
}

export default Container;
