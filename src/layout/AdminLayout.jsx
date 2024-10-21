// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import Navbar from '../admin-componets/navbar/Navbar'
import Menu from '../admin-componets/menu/Menu'
import '../styles/global.scss'
// import Footer from '../admin-componets/footer/Footer'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AdminLayout = () => {
  return (
    <div className="main">
    <Navbar />
    <div className="container w-screen">
      <div className="menuContainer h-screen">
        <Menu />
      </div>
      <div className="contentContainer ">
        {/* <QueryClientProvider client={QueryClient}> */}
          <Outlet />
        {/* </QueryClientProvider> */}
      </div>
    </div>
    {/* <Footer /> */}
  </div>
  );
};

export default AdminLayout;
