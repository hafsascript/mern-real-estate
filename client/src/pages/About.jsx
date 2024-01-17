import React from 'react'
import estate from "../assets/estate.png"

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto '>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Us</h1>
      <p className='mb-4 text-gray-700'>
        Hafsa Estate is a web application i built for practice and learning purposes. I made this with a lot of love and i hope that it becomes apparent to you as you navigate your way through this app.
      </p>
      <p className='mb-4 text-blue-900 font-semibold'>
      Disclaimer: <span className='text-gray-700 font-normal'>This is not an actual real estate website.</span>
      
      </p>
      <img className='rounded-lg object-cover self-center mt-7 h-[230px] sm:h-[400px] w-full'src={estate}></img>
        
    </div>
  )
}

