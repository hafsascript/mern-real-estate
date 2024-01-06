import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {signInStart, signInSuccess, signInFailiure} from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx';

export default function SignIn() {
  const [formData, setformData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (data.success === false) {
      dispatch(signInFailiure(data.message));
      return;}
    

    dispatch(signInSuccess(data));
    navigate('/');} catch (error) {
      dispatch(signInFailiure(error.message));}}
    
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center  my-7 text-neutral-900 font-semibold '>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type=" email" placeholder='email'
        className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password'
        className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-rose-400 text-white mt-4 font-semibold p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
          </button>
          <OAuth/>
        

      </form>
      <div className='flex gap-2 mt-5'>
        <p>Do Not Have An Account?</p>
        <Link to={"/sign-up"}>
          <span className='text-pink-600'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-600 mt-4'>{error}</p>}

      
    </div>
  )
}
