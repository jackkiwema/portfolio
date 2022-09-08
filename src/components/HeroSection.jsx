import React from 'react'

function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className="text-center">
            <h1 className='2xl md:text-4xl md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Hi, This is Jack</h1>
            <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>skilled System Administrator in maintaining, supporting networks, systems and computing resources.</p>
            <a href="#works"className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>See works</a>
        </div>
    </div>
  )
}

export default HeroSection