import React from 'react';
import ApexCharts from 'apexcharts';
import { adminOptions } from '../../utils/adminData';
import { Tabs, Tab, TabList } from '@chakra-ui/react';

class AdminGraph extends React.Component {
  chart = null;
  state = { activeButton: '' };

  componentDidMount() {
    if (!this.chart) {
      this.chart = new ApexCharts(
        document.querySelector('#area-datetime-adminOptions'),
        adminOptions
      );
      this.chart.render();
    }
  }

  handleButtonClick = (e, timeFrame) => {
    this.setState({ activeButton: e.currentTarget.id });

    let startDate;
    let endDate = new Date('27 Feb 2013').getTime();
    switch (timeFrame) {
      case 'one_month':
        startDate = new Date('28 Jan 2013').getTime();
        break;
      case 'six_months':
        startDate = new Date('27 Sep 2012').getTime();
        break;
      case 'one_year':
        startDate = new Date('27 Feb 2012').getTime();
        break;
      case 'ytd':
        startDate = new Date('01 Jan 2013').getTime();
        break;
      case 'all':
        startDate = new Date('23 Jan 2012').getTime();
        break;
      default:
        startDate = new Date().getTime();
    }

    this.chart.zoomX(startDate, endDate);
  };

  render() {
    const buttons = [
      { id: 'one_month', label: 'Month' },
      { id: 'six_months', label: '6 Mon' },
      { id: 'one_year', label: '1 Y' },
      { id: 'ytd', label: 'YTD' },
      { id: 'all', label: 'All' },
    ];

    return (
      <div className='w-full'>
        <div className='flex justify-between px-6'>
          <div className='flex items-center gap-3'>
            <p className='text-xl font-semibold'>Company Overview</p>
            <p className='text-xl font-bold text-emerald-500'>102%</p>
          </div>
          <Tabs variant='unstyled'>
            <TabList bg='black.5'>
              {buttons.map((btn) => (
                <Tab
                  _selected={{ bg: this.state.activeButton === btn.id ? 'white' : 'initial' }}
                  key={btn.id}
                  fontSize='sm'
                  p='6px'
                  borderRadius='4'
                  onClick={(e) => this.handleButtonClick(e, btn.id)}
                >
                  {btn.label}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </div>
        <div id='area-datetime-adminOptions'></div>
      </div>
    );
  }
}

export default AdminGraph;
