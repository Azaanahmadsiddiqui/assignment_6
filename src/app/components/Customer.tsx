import Image from 'next/image'
import React from 'react'

const Customer = () => {
  return (
    <div className='w-full h-auto bg-[#f7f7f7] px-4 py-10'>
     
        <div className='text-center mb-10'>
            <h1 className='text-3xl sm:text-5xl font-bold'>
                Customer testimonials
            </h1>
            <p className='mt-4 text-sm sm:text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

       
        <div className='flex flex-wrap justify-center gap-6 mt-20'>
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <Image src={'/images/customer1.png'} width={400} height={100} alt='customers' />
            </div>
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <Image src={'/images/customer2.png'} width={400} height={100} alt='customers' />
            </div>
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <Image src={'/images/customer3.png'} width={400} height={100} alt='customers' />
            </div>
        </div>

        
        <div className='flex justify-center items-center mt-20'>
            <div className='w-full sm:w-auto flex justify-center'>
                <Image className='ml-[70px]' src={'/images/sliderDots.png'} width={100} height={100} alt='slider' />
            </div>
            <div className='flex justify-center ml-[70px]'>
                <Image className='ml-4' src={'/images/slider.png'} width={100} height={100} alt='slider' />
            </div>
        </div>
    </div>
  )
}

export default Customer
