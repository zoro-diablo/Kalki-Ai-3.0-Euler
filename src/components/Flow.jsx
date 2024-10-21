// import Score from './Score';
import { motion } from 'framer-motion';

const Flow = () => {
  return (
    <div className=' mx-auto flex justify-center mt-[200px] mb-[400px]'>
      <div className='glow'></div>
      <div className='grid w-full justify-center '>
        <div className=''>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='text-[51.2px] text-[#b1a2ff] font-bold mb-[-12px] text-center '
          >
            Forex Data Synergy
            <br />
          </motion.div>
          <motion.span
            whileInView={{ y: 0, opacity: 1, rotate: -20 }}
            initial={{ y: 100, opacity: 0, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className='not-italic text-sky-blue text-[13px] relative left-[90px]  inline-block rotate'
          >
            (Not so)
          </motion.span>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='text-[40px] text-white font-semibold leading-snug mb-3'
          >
            Your Ultimate Forex Advantage 
          </motion.div>
        </div>
        <motion.p
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='text-[16px] text-light-gray text-center'
        >
          We analyze 62 forex-specific  data points
          <br />
          and generate indicators based on the interactions of
         
          <br />
           these data points over time to optimize your forex trading strategy.
          <br />
        </motion.p>
      </div>
      <div className='relative'>
        <div className='glow-three'></div>
        {/* <Score /> */}
      </div>
    </div>
  );
};
export default Flow;
