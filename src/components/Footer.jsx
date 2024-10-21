import { FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='bg-[#12152e] '
    >
      <div className='flex pt-[78px] pb-[78px] justify-center gap-[78px]'>
        <div className=' flex-col'>
          <div className='flex gap-[50px]'>
            <div>
              <p className='text-[14.6px] font-semibold text-light-gray mb-[18px]'>
                THE COMPANY
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                About Us
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>Blog</p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                How it Works
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                Referral Program
              </p>
            </div>
            <div>
              <p className='text-[14.6px] font-semibold text-light-gray mb-[18px]'>
                SUPPORT
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                Help Center
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                Security
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>FAQs</p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                Avoiding Scams
              </p>
            </div>
            <div>
              <p className='text-[14.6px] font-semibold text-light-gray mb-[18px]'>
                LEGAL
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                Terms of Service
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                Privacy Policy
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                Risk Disclosure
              </p>
              <p className='text-[14.6px]  text-[#89899a] mb-[12px]'>
                API License
              </p>
            </div>
          </div>
          <div className=''>
            <div className='flex'>
              <div className='flex h-full items-center relative mt-[20px]'>
                <img
                  className='h-[90px] w-[100px] absolute left-[-20px]'
                  src='/kalki-logo.png'
                  alt='kalki-logo'
                />
                <div className='flex gap-2 relative left-[50px]'>
                  <p className='font-extrabold text-2xl text-white'>Kalki</p>
                  <p className='font-extrabold text-2xl  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600'>
                    Ai
                  </p>
                </div>
              </div>
              <p className='ml-[80px] text-[14px] flex items-end text-light-gray'>
                2024 ©
              </p>
              <div className=' ml-[20px] gap-[15px] text-[25px] flex items-end text-light-gray'>
                <FaDiscord />
                <FaXTwitter />
                <FaFacebook />
                <FaReddit />
                <FaTelegram />
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className=' '>
            <p className='absolute left-[70px] top-5 text-[22px] font-medium text-light-gray'>
              Offer your trading service
            </p>
            <p className='absolute left-[150px] top-[80px] text-[14px]  text-light-gray leading-10'>
              Have a profitable trading track <br /> record? Get listed on Kalki
              AI and <br />
              our members can invest with you.
            </p>
          </div>
          <img
            src='/become-trader2optimized.jpeg'
            alt='card'
            className='rounded-3xl w-[450px] h-[291px]'
          />
        </div>
      </div>
    </motion.div>
  );
};
export default Footer;
