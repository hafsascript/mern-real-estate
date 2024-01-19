import React from 'react'
import estate from "../assets/estate.png"

export default function About() {
  return (
    <div className='p-10 max-w-6xl mx-auto '>
      <h1 className='text-3xl font-semibold mb-4 text-slate-700 text-center'>About Us</h1>
      <p className='flex flex-wrap mb-4 text-gray-700'>
        Hafsa Estate is a web application i built for practice and learning purposes. I made this with a lot of love and i hope that it becomes apparent to you as you navigate your way through this app. 
        <br></br><br></br>
        Signing up will make a profile for you which you can customise according to your preference. It will also allow you to create your very own listings which you can freely edit,update,view and delete. 
        Even without signing up, there are a great deal of features that you have access to. The home page introduces Hafsa Estate and shows all the latest offers and listings. You can get more details about any property by simply clicking on it and you can go as far as contacting the landlord of that particular property. 
        There is a great search engine which you can use if you are looking for any specific kind of listing. Searching without typing in anything will show you all available listings by default and you can also limit your results by choosing between different options. Now go check it all for yourself. Enjoy!!
      </p>
      <p className='mb-4 text-blue-900 font-semibold'>
      Disclaimer: <span className='text-gray-700 font-normal'>This is not an actual real estate website.</span>
      
      </p>
      <img className='rounded-lg object-cover self-center mt-5 h-[210px] sm:h-[340px] w-full'src={estate}></img>
        
    </div>
  )
}

