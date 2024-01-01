import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center  my-7 text-neutral-900 font-semibold '>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type=" text" placeholder='username'
        className='border p-3 rounded-lg' id='username' />
        <input type=" email" placeholder='email'
        className='border p-3 rounded-lg' id='email' />
        <input type=" password" placeholder='password'
        className='border p-3 rounded-lg' id='password' />
        <button className='bg-rose-400 text-white my-4 font-semibold p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign Up</button>
        

      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have An Account?</p>
        <Link to={"/sign-in"}>
          <span className='text-pink-600'>Sign In</span>
        </Link>
      </div>

      
    </div>
  )
}
