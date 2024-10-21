import CountUp from 'react-countup';

const StatsCounter = () => {
  return (
    <div className='stats-container'>
      <div className='stat-block'>
        <span className='stat-value'>
          <CountUp end={60} duration={4} suffix='+' />
        </span>
        <div className='stat-title'> DATA <br /> Indicators</div>
      </div>
      <div className='stat-block'>
        <span className='stat-value'>
          <CountUp end={1000} duration={3} suffix='+' />
        </span>
        <div className='stat-title'>
          TRADES <br /> Per Minute
        </div>
      </div>
      <div className='stat-block'>
        <span className='stat-value'>
          <CountUp end={95} duration={3} suffix='%' />
        </span>
        <div className='stat-title'>CLIENT <br /> Retention Rate</div>
      </div>
    </div>
  );
};

export default StatsCounter;
