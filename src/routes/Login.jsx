/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePassword } from 'react-icons/md';
import Loader from '../components/loader/Loader';


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  const handleLoginSuccess = (credentialResponse) => {
    setLoading(true);
    console.log(credentialResponse);
    const result = jwtDecode(credentialResponse.credential);
    console.log(result);
    login(result);
    handleNavigate();
  };

  const handleLoginError = () => {
    console.log('Login Failed');
    setLoading(false);
  };

  return (
    <div className='bg-main flex justify-center items-center h-screen w-full bg-dark-blue'>
      <form className='flex flex-col justify-center items-center '>
        <p className='text-[22px] font-semibold text-gray-400'>Log In</p>
        <div className=' flex flex-col gap-y-[10px] mt-[22px] w-[150%]'>
          <p className='text-gray-400'>Email address :</p>
          <div
            type='text'
            className='bg-transparent flex border border-gray-700 rounded-md py-[18px] w-full px-[22px] gap-x-2 text-gray-500 items-center 
            bg-[#101225] '
          >
            <AiOutlineMail className='h-5' />
            <input
              type='text'
              className='w-full bg-transparent outline-none '
              required
            />
          </div>
        </div>
        <div className=' flex flex-col gap-y-[10px] mt-[22px] w-[150%]'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-400'>Password :</p>
            <p className='text-bright-cyan text-[13px]'>Forgot Password?</p>
          </div>
          <div className='bg-transparent flex border border-gray-700 rounded-md py-[4px] w-full px-[22px] gap-x-2 text-gray-500 items-center  bg-[#101225] '>
            <MdOutlinePassword className='h-5' />
            <input
              type='password'
              className='w-full bg-transparent outline-none py-[18px] '
              required
            />
          </div>
        </div>
        {loading && <Loader />} 
        <button className='btn h-[62px] w-[60%] mt-[50px] mb-[30px] '>
          <p className='z-10 font-semibold text-white'>LOG IN</p>
        </button>
        <div className='mb-5'>
          <GoogleLogin
            width={100}
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </div>
        <p className='text-[14px] text-gray-500 font-medium tracking-wider'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-bright-cyan'>
            Sign up
          </Link>{' '}
          now.
        </p>
      </form>
    </div>
  );
};

export default Login;
