/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './chartBox.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const ChartBox = (props) => {
  return (
    <div className='chartBox'>
      <div className='boxInfo'>
        <div className='title'>
          <img src={props.icon} alt='' />
          <span className='font-semibold'>{props.title}</span>
        </div>
        <h1 className='flex justify-end font-semibold text-gray-600 text-[30px]'>
          {props.number}
        </h1>

        <div className='chartInfo'>
          <div className='chart'>
            <ResponsiveContainer width='99%' height='100%'>
              <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: 'transparent', border: 'none' }}
                  labelStyle={{ display: 'none' }}
                  position={{ x: 10, y: 70 }}
                />
                <Line
                  type='monotone'
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='texts'>
            <span
              className='percentage text-xl'
              style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}
            >
              {props.percentage}%
            </span>
            <Link
              className='flex items-end'
              to='/admin/home'
              style={{ color: props.color }}
            >
              View all
            </Link>

            <span className='duration'>this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
