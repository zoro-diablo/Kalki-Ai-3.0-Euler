import './navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { IoIosApps } from 'react-icons/io';
import { FaExpand } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdMessage } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='navbar bg-white'>
      <div className='logo'>
        <div className='flex items-center'>
          <Link to='/'>
            <div className='flex items-center'>
              <img
                className='h-[90px] w-[100px] absolute'
                src='/kalki-logo.png'
                alt='kalki-logo'
              />
              <div className='flex gap-2 relative left-[70px]'>
                <p className='font-bold text-xl text-gray-700'>Kalki</p>
                <p className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600'>
                  Admin
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='icons'>
        {/* <img src="/search.svg" alt="" className="icon" /> */}
        <FaSearch className='cursor-pointer' />
        {/* <img src="/app.svg" alt="" className="icon" /> */}
        <IoIosApps className='cursor-pointer' />
        {/* <img src="/expand.svg" alt="" className="icon" /> */}
        <FaExpand className='cursor-pointer' />
        <div className='notification flex'>
          {/* <img src="/notifications.svg" alt="" /> */}
          <MdMessage className='h-6' />
          <span>1</span>
        </div>
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
            alt=''
          />
          <span>John</span>
        </div>
        <img src='/settings.svg' alt='' className='icon' />
      </div>
    </div>
  );
};

export default Navbar;
