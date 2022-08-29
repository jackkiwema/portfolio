import React from 'react'
import SectionTitle from './SectionTitle'

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptas quas aliquid odio fugit! Incidunt adipisci, nesciunt laboriosam cum voluptatem, corporis amet sint fugit voluptas minima eius sed debitis dolores.
        </p>
        <a href="mailto:jackkiwema@gmail.com" className='block mt-3 text-md md:text-lg   text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'>jackkiwema@gmail.com</a>
        </div>
        
        <img src={'https://avatars.githubusercontent.com/u/38496311?v=4'} alt="Jack Kiwema" className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About