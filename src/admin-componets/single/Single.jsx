/* eslint-disable react/prop-types */
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './single.scss';

const Single = (props) => {
  return (
    <div className='single bg-white p-5 rounded-md m-5'>
      <div className='view'>
        <div className='info'>
          <div className='topInfo justify-between flex px-4'>
            <div className='flex items-center gap-2'>
              {props.img && <img src={props.img} alt='' />}
              <h1 className='text-xl'>{props.title}</h1>
            </div>
            <button className='px-2 py-2 bg-[#5646c9] text-white rounded-md hover:bg-[#5646c9]'>
              Update
            </button>
          </div>
          <div className='details ml-4'>
            {Object.entries(props.info).map((item) => (
              <div className='item' key={item[0]}>
                <span className='itemTitle'>{item[0]}</span>
                <span className='itemValue'>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className='chart'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
                data={props.chart.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis
                  dataKey='name'
                  tick={{ fontSize: 14, fontFamily: 'Arial' }}
                />
                <YAxis tick={{ fontSize: 14, fontFamily: 'Arial' }} />
                <Tooltip cursor={{ stroke: '#4149f5', strokeWidth: 2 }} />
                <Legend
                  wrapperStyle={{ fontSize: '14px', fontFamily: 'Arial' }}
                />
                {props.chart.dataKeys.map((dataKey, index) => (
                  <Line
                    key={index}
                    type='monotoneX'
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                    strokeWidth={2}
                    dot={{ stroke: dataKey.color, strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                    isAnimationActive={true}
                    animationDuration={2000}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className='activities'>
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
