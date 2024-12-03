import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-[230px] h-auto w-full bg-gray-100 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between px-4 lg:px-20 space-y-6 lg:space-y-0">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Subscribe to our newsletter</h2>
          <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mt-6 lg:mt-0">
          <input
            className="border-2 border-gray-500 w-full lg:w-[350px] h-12 px-3 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-gray-800 text-white py-3 px-6 rounded-md mt-4 lg:mt-0">
            Subscribe
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4 lg:mt-0">
          By subscribing you agree to our <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 lg:px-20 mt-12">
        <div className="flex flex-col items-center lg:items-start">
          <Image src={'/images/logo.png'} width={170} height={100} alt="logo" />
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 text-center lg:text-left">Courses</h1>
          <ul className="space-y-2 text-center lg:text-left">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 text-center lg:text-left">Resources</h1>
          <ul className="space-y-2 text-center lg:text-left">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 text-center lg:text-left">About Us</h1>
          <ul className="space-y-2 text-center lg:text-left">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-12">
        <div className="w-full border-t border-gray-300 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
            <p>2023 Ddsgnr. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="underline">Privacy Policy</a>
              <a href="#" className="underline">Terms of Service</a>
              <a href="#" className="underline">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
