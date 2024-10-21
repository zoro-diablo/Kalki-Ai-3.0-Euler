import React from 'react';
import ApexCharts from 'apexcharts';
import { options } from '../../../utils/data';
import { Tabs, Tab, TabList } from '@chakra-ui/react';

class Graph extends React.Component {
  chart = null;
  state = { activeButton: '' };

  componentDidMount() {
    if (!this.chart) {
      this.chart = new ApexCharts(
        document.querySelector('#chart-timeline'),
        options
      );
      this.chart.render();
    }
  }

  handleButtonClick = (e, timeFrame) => {
    this.setState({ activeButton: timeFrame });

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
        <div className='flex mt-4 mx-4 justify-end '>
          <Tabs variant='unstyled'>
            <TabList bg='black.5'>
              {buttons.map((btn) => (
                <Tab
                  _selected={{ bg: 'white' }}
                  key={btn.id}
                  fontSize='sm'
                  p='6px'
                  borderRadius='4'
                  onClick={(e) => this.handleButtonClick(e, btn.id)}
                  bg={this.state.activeButton === btn.id ? 'white' : 'transparent'}
                  color={this.state.activeButton === btn.id ? 'black' : 'gray.500'}
                >
                  {btn.label}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </div>
        <div id='chart-timeline'></div>
      </div>
    );
  }
}

export default Graph;
