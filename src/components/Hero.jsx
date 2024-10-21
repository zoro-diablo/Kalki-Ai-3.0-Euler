/* eslint-disable no-irregular-whitespace */
import StatsCounter from './StatsCounter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='pt-[200px] flex px-[160px] gap-[90px] justify-center w-full '>
     
      <div>
        <motion.img
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.5 }}
          transition={{ duration: 0.3 }}
          src='/forex-transformed.jpeg'
          alt='crypto'
          className='w-[700px] rounded-lg shadow-lg filter brightness-110 glow-gradient'
        />
        <StatsCounter />
      </div>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.9 }}
        className='pt-[40px]'
      >
        <div className='leading-[48.875px] tracking-[0.455px] '>
          <span className='text-white text-[42px] font-semibold'>Harness</span>{' '}
          <br />
          <span className='text-[#bbf8f5] text-[50px] font-semibold '>
           Advanced AI 
          </span>{' '}
          <br />{' '}
          <span className='text-white text-[25px] font-semibold'>
          for Superior Forex Trading
          </span>
        </div>
        <div className='pt-[40px] text-[16px] text-light-cyan leading-[21.328px] tracking-[0.48px]'>
          <span>Our AI-driven technology meticulously manages forex  </span> <br />{' '}
          <span>portfolios,consistently outperforming conventional forex trading strategies.</span>
        </div>
        <div className='glow'></div>
        <div className='pt-[40px] '>
          <button className='btn w-[246px] h-[60px] text-[16px] font-semibold text-white '>
            <div className='z-10'>MAKE MONEY NOW</div>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
export default Hero;
