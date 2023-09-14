import React from 'react'
import Typed from 'react-typed';
import image from '../components/assests/655623.jpg'

export default function Banner() {
    return (
        <div >
            <div className='absolute top-[0] left-0 right-0 bottom-[0] z-[-10]'>
                <img src={image} alt="" className='w-full h-full fixed' />
            </div>
            <div className=' relative text-start font-bold sm:mt-44 mt-44 lg:mt-44 mx-3 lg:mx-24'>
                <div lassName=''>
                    <div className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl md:mb-0 lg:mt-48 md:mx-6 sm:mx-0 mb-1 sm:mb-3 text-white drop-shadow-xl '>
                       Welcome to...
                    </div>
                    <h2 className='text-white text-5xl sm:text-6xl md:text-[60px] lg:text-[90px] drop-shadow-md md:p-[24px]'>Covenant Foreign</h2>
                    <h2 className='text-white text-5xl sm:text-6xl md:text-[60px] lg:text-[90px] drop-shadow-md md:p-[24px]'> Languages</h2>
                    <div className='text-[45px] sm:text-[50px] md:text-[50px] md:p-[24px] text-white'>
                        Learn<Typed className='p-3  text-red-700'
                            strings={['Hindi', 'English', 'Urdu']}
                            typeSpeed={100}
                            backSpeed={100}
                            loop={true}
                        />
                    </div>
                    <a
                    class="mb-2 inline-block sm:mx-0 md:mx-6 mt-3 sm:mt-2 mx-0 rounded bg-danger px-6 sm:px-6 md:px-8 lg:px-12 pt-4 pb-3.5 text-[16px] font-medium uppercase leading-normal text-black bg-blue-500 shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] md:mr-2 md:mb-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                   ENROLL NOW
                  </a>
                </div>
            </div>

        </div>
    )
}
