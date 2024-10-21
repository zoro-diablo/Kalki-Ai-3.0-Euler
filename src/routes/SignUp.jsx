import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePassword } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };
  return (
    <div className='bg-main bg-dark-blue'>
      <div className='px-[200px] py-[150px] flex justify-between gap-x-[142px]'>
        <div className='flex flex-col gap-y-[60px]'>
          <div className='flex items-center '>
            <Link to='/'>
              <div className='flex items-center '>
                <div className='flex '>
                  <p className='font-extrabold text-2xl text-white'>Kalki</p>
                  <p className='font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600'>
                    Ai
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <p className='text-[25px] w-full text-light-gray font-medium'>
              Invest together with the top traders through{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r-blue from-gradient-start to-gradient-end font-semibold'>
                Profit Sharing
              </span>
            </p>
          </div>
          <div className='flex flex-col gap-y-[40px]'>
            <div className='flex gap-x-[26px]'>
              <img src='/person-icon.svg' alt='person' />
              <div className='w-full'>
                <p className='text-[20px] font-bold text-light-gray'>
                  Deploy State-of-the-Art AI
                </p>
                <p className='text-[16px] w-full text-dark-gray '>
                  Partner with our powerful AI systems, designed to outperform
                  market indices through advanced data analytics and real-time
                  decision-making.
                </p>
              </div>
            </div>
            <div className='flex  gap-x-[26px]'>
              <img src='/percent-icon.svg' alt='percentage' />
              <div className='w-full'>
                <p className='text-[20px] font-bold text-light-gray'>
                  Fixed Management Fees
                </p>
                <p className='text-[16px] w-full text-dark-gray '>
                  Enjoy clear, straightforward costs with a fixed fee structure,
                  independent of your investment&apos;s performance.
                </p>
              </div>
            </div>
            <div className='flex  gap-x-[26px]'>
              <img src='/dollar-icon.svg' alt='dollar' />
              <div className='w-full'>
                <p className='text-[20px] font-bold text-light-gray'>
                  Investment Entry Point
                </p>
                <p className='text-[16px] w-full text-dark-gray '>
                  Begin your investment journey with a minimum of $10,000,
                  tailored to ensure substantial growth potential and serious
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className='bg-[#070819] w-[80%] rounded-md flex flex-col justify-between  border-[0.2px] border-gray-800'>
          <div>
            <div className='flex flex-col text-light-gray justify-center items-center my-[32px] gap-y-[10px]'>
              <p className='text-[22px] font-medium'>Create a free account</p>
              <p className='text-[18px] '>
                You&apos;re{' '}
                <span className='font-semibold underline underline-offset-8'>
                  2 mins away
                </span>{' '}
                from investing
              </p>
            </div>
            <div className='mx-[32px] flex flex-col gap-y-[10px] pt-[22px]'>
              <p className='text-gray-400'>Email address :</p>
              <div
                type='text'
                className='bg-transparent flex border border-gray-700 rounded-md py-[18px] w-full px-[22px] gap-x-2 text-gray-500 items-center'
              >
                <AiOutlineMail className='h-5' />
                <input
                  type='text'
                  className='w-full bg-transparent outline-none'
                  required
                />
              </div>
            </div>
            <div className='mx-[32px] flex flex-col gap-y-[10px] pt-[22px]'>
              <p className='text-gray-400'>Password :</p>
              <div className='bg-transparent flex border border-gray-700 rounded-md py-[4px] w-full px-[22px] gap-x-2 text-gray-500 items-center'>
                <MdOutlinePassword className='h-5' />
                <input
                  type='password'
                  className='w-full bg-transparent outline-none py-[18px]'
                  required
                />
              </div>
            </div>
          </div>
          <div className='mx-[32px] justify-center items-center flex flex-col gap-y-[24px] pt-[22px] my-[15px] '>
            <p className='text-[13px] w-[95%] text-gray-400 text-center'>
              By continuing, you accept our{' '}
              <span className='text-bright-cyan'>Terms and Conditions</span> and{' '}
              <span className='text-bright-cyan'>Privacy Policy</span>.
            </p>
            <button className='btn h-[60px]  w-[95%]'>
              <p className='z-10 text-[18px] text-white font-semibold '>
                GET STARTED
              </p>
            </button>
            <div className='w-[100%] flex justify-center'>
              <GoogleLogin
                buttonText='Sign Up'
                width={95}
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  const result = jwtDecode(credentialResponse.credential);
                  console.log(result);
                  login(result);
                  handleNavigate();
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
            <div>
              <div className='flex gap-2 items-center justify-center'>
                <FaLock size={15} className=' text-gray-500' />
                <p className='text-[14px] text-gray-400 font-medium'>
                  We take the protection of your data seriously
                </p>
              </div>
            </div>
            <div>
              <p className='text-bright-cyan text-[13px]'>
                <Link to='/login'>Log In</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
