import { motion } from 'framer-motion';

const Cards = () => {
  const staggerVariants = (index) => ({
    hidden: { rotateY: 90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 1, delay: index * 0.4 },
    },
  });

  return (
    <div className='flex flex-col mt-[100px] mb-[200px] h-full mx-[20px] items-center'>
      <motion.h1
        whileInView={{ scale: 1.2 }}
        transition={{ duration: 0.8 }}
        className='mx-auto mb-[64px] text-[#cfcfec] text-[26px] font-semibold'
      >
        Now Go Get Some Sweet{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end'>
          Profits
        </span>
      </motion.h1>
      <div className=' items-center flex '>
        {[...Array(3).keys()].map((index) => (
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={staggerVariants(index)}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.02 }}
            key={index}
            className={`flex items-center ${index !== 0 ? '-ml-4' : ''}`}
          >
            <div className='bg-gradient-to-b from-[#363bb6] to-[#0b9bac] rounded-3xl my-[20px] py-[20px] px-[24px] h-full w-full'>
              <div className='flex justify-center gap-x-[5%] items-center'>
                <p className='text-[34px] text-[#6ba0ff] font-bold'>
                  {index + 1}
                </p>
                <div className='text-[22px] text-white font-medium '>
                  {
                    [
                      'Let AI trader for you',
                      'Watch Your Profits Grow',
                      'Cash Out + Reinvest',
                    ][index]
                  }
                </div>
              </div>
              <p className='text-[#77ddff] text-center w-[70%] my-[19px] mx-auto'>
                {
                  [
                    'Trust them with the trading, they are actual pros!',
                    'When they win, you keep over 70% of the profits!',
                    'Pocket some, leave some in the moonbags!',
                  ][index]
                }
              </p>
              <img
                src={['/profile_cards.png', 'chart-pic.png', 'tro.png'][index]}
                alt='pic'
                className='h-40 flex mx-auto my-[27px]'
              />
            </div>
            {index !== 2 && (
              <img src='/point.png' alt='>' className='h-[120px] z-[10]' />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
