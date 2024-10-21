import AdminBargraph from '../../admin-componets/admin-graphs/AdminBargraph';
import AdminGraph from '../../admin-componets/admin-graphs/AdminGraph';
// import BarChartBox from '../../admin-componets/barChartBox/BarChartBox';
// import BigChartBox from '../../admin-componets/bigChartBox/BigChartBox';
import ChartBox from '../../admin-componets/chartBox/ChartBox';
import TopBox from '../../admin-componets/topBox/TopBox';
import {
  // barChartBoxRevenue,
  // barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxUser,
} from '../../data';

const SecondHome = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3  gap-5 p-5 w-[85vw] '>
      <div className=' lg:col-span-1 md:col-span-1 row-span-2 bg-white rounded-lg shadow p-5 '>
        <TopBox />
      </div>
      <div className=' xl:col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-lg shadow p-5'>
        <ChartBox {...chartBoxUser} />
      </div>
      <div className='xl:col-span-1 lg:col-span-1 bg-white rounded-lg shadow p-5'>
        <ChartBox {...chartBoxProduct} />
      </div>

      <div className='xl:col-span-1 lg:col-span-2 md:col-span-2 bg-white rounded-lg shadow p-5'>
        <ChartBox {...chartBoxConversion} />
      </div>

      <div className='xl:col-span-3 md:col-span-2 lg:col-span-4 bg-white rounded-lg shadow p-5'>
        <AdminGraph />
      </div>
      <div className='xl:col-span-4 md:col-span-2  lg:col-span-4   bg-white rounded-lg shadow p-5'>
        {/* <BarChartBox {...barChartBoxRevenue} /> */}
        <AdminBargraph />
      </div>
    </div>
  );
};

export default SecondHome;
