import React from 'react';
import ApexCharts from 'apexcharts';
import { optionTwo } from '../../../utils/dateTwo';
import { Tabs, Tab, TabList } from '@chakra-ui/react';

class LineGraph extends React.Component {
  chart = null;
  state = { activeButton: '' };

  componentDidMount() {
    if (!this.chart) {
      this.chart = new ApexCharts(
        document.querySelector('#chart-timeline-two'),
        optionTwo
      );
      this.chart.render();
    }
  }

  render() {
    return (
      <div className='w-full '>
        <div id='chart-timeline-two'></div>
      </div>
    );
  }
}

export default LineGraph;
