import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className='bg h-screen relative '>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
