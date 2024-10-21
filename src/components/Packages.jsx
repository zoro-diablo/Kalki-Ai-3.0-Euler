import Box from './Box';
import { motion } from 'framer-motion';
import BoxTwo from './BoxTwo';

const Packages = () => {
  return (
    <motion.div
      id="section1"
      className='mt-[100px] w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className='flex justify-center'
        whileInView={{ scale: 1.2 }}
        transition={{ duration: 0.8 }}
      >
        <p className='text-[32.48px] font-medium text-[#cfcfec]'>Our Package</p>
      </motion.div>
      <motion.div
        className='mt-[143px] mx-[150px] pb-[200px] flex gap-[40px] justify-center items-center'
       
      >
        <motion.div   whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.8 }}>
          <Box  />
        </motion.div>
        <div className="relative w-[2px] h-[25rem] mx-1">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-400 to-transparent"></div>
        </div>
        <motion.div   whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 0.8 }}>
          <BoxTwo />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Packages;
