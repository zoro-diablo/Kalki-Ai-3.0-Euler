/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

const cards = [
  {
    url: '/fin-risk.webp',
    title:
      ' Measures financial risk using metrics like maximum drawdown and Sharpe ratio to ensure stability.',
    id: 1,
    heading: 'Risk'
  },
  {
    url: '/2150970185.jpg',
    title:
      ' Indicates profitability performance, quantifying the earnings generated over time',
    id: 2,
    heading: 'Profits'
  },
  {
    url: '/5068.jpg',
    title:
      ' Demonstrates the ability to outperform market benchmarks consistently',
    id: 3,
    heading: 'Beats the Market'
  },
  {
    url: '/27528.jpg',
    title:
      ' Tracks the number of days the trading strategies have been profitable, emphasizing consistency',
    id: 4,
    heading: 'Days in Profit'
  },
  {
    url: '/2150727960.jpg',
    title:
      ' Evaluates the diversity and quality of assets managed to assess investment health.',
    id: 5,
    heading: 'Assets'
  },
  {
    url: '27507.jpg',
    title:
      ' Reflects the efficiency and reliability of returning profits to investors',
    id: 6,
    heading: 'Timely Payouts'
  },
  {
    url: '/2151113265.jpg',
    title:
      ' Shows the growth rate of assets under management, indicating successful capital accumulation.',
    id: 7,
    heading: 'Asset Growth'
  },
  {
    url: '/2151228153.jpg',
    title:
      ' Highlights a conservative investment strategy by operating without leverage, reducing financial exposure.',
    id: 8,
    heading: 'Zero Leverage'
  },
];

const Score = () => {
  return (
    <div>
      <div className='glow'></div>
      <HorizontalScrollCarousel cards={cards} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [lastCardVisible, setLastCardVisible] = useState(false);

  const x = useTransform(scrollYProgress, [0, 0.8], ['0%', '-2200%']);
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const unsubscribeX = x.onChange((latestX) => {
      if (parseInt(latestX, 10) <= -800) {
        setLastCardVisible(true);
      } else {
        setLastCardVisible(false);
      }
    });

    return () => {
      unsubscribeX();
    };
  }, [x]);

  return (
    <section ref={targetRef} className='relative h-[400vh]'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x: xSpring }} className='flex gap-4'>
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
      {lastCardVisible && (
        <div className='h-[100vh] flex justify-center items-center'>
          <p>Now scrolling vertically...</p>
        </div>
      )}
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md'
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 grid place-content-end'>
        <p className='bg-gradient-to-br  from-white/20 to-white/0  text-md font-medium py-2 h-[80px] px-2 text-center text-white backdrop-blur-lg'>
          {card.title}
        </p>
       
      </div>
      <div className='absolute inset-0 z-10 grid place-content-start'>
      <p className='bg-gradient-to-br  from-white/20 to-white/0  text-md font-medium py-2 px-2 text-center text-white backdrop-blur-lg'>
          {card.heading}
        </p>
       
      </div>
    </motion.div>
  );
};

export default Score;
