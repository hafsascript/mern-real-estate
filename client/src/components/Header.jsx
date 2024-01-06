import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

export default function Header() {
  const { currentUser } = useSelector(state => state.user)
  return (
    <header className='bg-emerald-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
              <span className='text-black text-3xl mt-1'>Hafsa</span>
              <span className='text-black text-xl mt-2'>Estate</span>
            </h1>
           </Link>
          <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder="Search..."
             className='bg-transparent focus:outline-none w-24 sm:w-64'/>
             <FaSearch className='text-slate-600' />
          </form>
          <ul className='flex gap-4' >
            <Link to='/'>
              <li className='hidden sm:inline text-slate-900 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='hidden sm:inline text-slate-900 hover:underline'>About</li>
            </Link>
            <Link to='/profile'>
              {currentUser ? (<img className='rounded-full h-8 w-8 object-cover' src={currentUser.avatar} alt='Profile'/>)  : (<li className=' sm:inline text-slate-900 hover:underline'>Sign in</li>)}
              
            </Link>
          </ul>
        
        </div>
     </header>
  )
}
