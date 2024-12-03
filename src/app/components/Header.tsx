import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="flex flex-wrap items-center bg-[#F7F7F7] border-b-2 border-gray-300 py-4 px-6">
      
      <div className="flex-shrink-0">
        <Image src={'/images/logo.png'} width={130.6} height={40} alt="Logo" />
      </div>

     
      <nav className="flex-1 flex justify-center mt-4 md:mt-0">
        <ul className="flex flex-wrap gap-4 md:gap-10 bg-white py-3 px-4 rounded-sm font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Courses</Link></li>
          <li><Link href="/">Services</Link></li>
          <li><Link href="/">Achievement</Link></li>
          <li><Link href="/">About Us</Link></li>
          <li><Link href="/">Testimonial</Link></li>
        </ul>
      </nav>

      
      <div className="mt-4 md:mt-0 flex gap-2">
        <button className="text-black bg-white border-2 border-black py-2 px-4 rounded-md">Login</button>
        <button className="bg-black text-white py-2 px-4 rounded-md">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
