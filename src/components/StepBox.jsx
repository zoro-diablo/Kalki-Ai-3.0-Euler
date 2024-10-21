import { motion } from 'framer-motion';

const StepBox = () => {
  const cards = [
    {
      title: 'High Trading Accuracy',
      description:
        'Maintains a 98% accuracy rate on trades, ensuring reliable investment decisions.',
      image: '/8365171.png',
      height: 'h-[60px]',
    },
    {
      title: 'Extensive Data Analysis',
      description:
        'Employs 62 different data indicators to analyze market trends deeply and accurately.',
      image: '/cal.png',
      height: 'h-[50px]',
    },
    {
      title: 'Transparent Operations',
      description:
        'Offers clear insights into AI strategies and performance, supported by excellent customer service.',
      image: '/7001726.png',
      height: 'h-[55px]',
    },
    {
      title: 'TIME-TESTED PLATFORM',
      description: 'We’ve been up and running since 2018',
      image: '/risk.png',
      height: 'h-[50px]',
    },
    {
      title: 'Minimal Monthly Fees',
      description: 'Maximize your returns with our competitively low fees',
      image: '/wall.png',
      height: 'h-[50px]',
    },
    {
      title: 'FUNDS ARE SAFU',
      description: 'We partner with Binance for asset custody',
      image: '/lok.png',
      height: 'h-[50px]',
    },
  ];

  return (
    <div
      id='section2'
      className='w-full grid justify-center mt-[100px] pb-[200px] '
    >
      <motion.div
        whileInView={{ scale: 1.2 }}
        transition={{ duration: 0.8 }}
        className='text-[24.48px] flex justify-center mb-[96px] font-semibold text-[#cfcfec]'
      >
       Why Trust KalkiAI for Forex?
      </motion.div>
      <div className='grid grid-cols-3 gap-x-[58px] gap-y-[98px] mt-5'>
        {cards.map((card, index) => (
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={index}
            className='flex gap-[20px]'
          >
            <img src={card.image} alt={card.title} className={card.height} />
            <div className='glow-two'></div>
            <div className=''>
              <p className='text-[#bcfdfd] text-[16px] font-semibold uppercase mb-2'>
                {card.title}
              </p>
              <p className='text-light-gray text-[14px] w-[264px]'>
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StepBox;
