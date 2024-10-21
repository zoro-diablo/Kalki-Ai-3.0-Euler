/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Notification({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleDismiss = () => {
    setIsOpen(false);
    onClose(); 
  };

  if (!isOpen) return null; 
  return (
    <div className='flex justify-between items-center text-white px-4 py-4 rounded-md bg-gradient-to-r from-[#08b4be] to-[#3f4ef3]'>
      <div className='flex justify-between items-center gap-4'>
        <div>
          <FaRegBell size={25} />
        </div>
        <p className='text-[16px] font-medium'>
          Your account is currently under review by our team. You will receive a
          confirmation email shortly.
        </p>
      </div>
      <div className='flex justify-between items-center gap-4 font-semibold'>
        <Link to='/support'><button className='border border-1 p-2 rounded-md bg-white text-black hover:bg-gray-100'>Support </button></Link>
        <button className='border border-1 p-2 rounded-md hover:bg-[white] hover:border-black hover:text-black' onClick={handleDismiss}>Dismiss</button>
      </div>
    </div>
  );
}

export default Notification;
