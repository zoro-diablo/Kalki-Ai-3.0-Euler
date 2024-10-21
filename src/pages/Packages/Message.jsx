/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Message({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);


  if (!isOpen) return null;
  return (
    <div className='flex justify-between items-center text-white px-4 py-4 rounded-md bg-gradient-to-r from-[#4352ff] to-[#08b4be]'>
      <div className='flex justify-between items-center gap-4'>
        <div>
          <FaRegBell size={25} />
        </div>
        <p className='text-[16px] font-medium'>
          Please register your account first
        </p>
      </div>
      <div className='flex justify-between items-center gap-4 font-semibold'>
        <Link to='/support'>
          <button className='border border-1 p-2 rounded-md bg-white text-black hover:bg-gray-100'>
            Support
          </button>
        </Link>
        <Link to='/dashboard'>
          <button
            className='border border-1 p-2 rounded-md hover:bg-[white] hover:border-black hover:text-black'
            
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Message;
