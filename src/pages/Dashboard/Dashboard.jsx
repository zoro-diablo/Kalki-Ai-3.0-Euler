import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import PortfolioSection from './components/PortfolioSection';
import PriceSection from './components/PriceSection';
import InfoCard from './components/InfoCard';
import Notification from './components/Notification';
import { useDisclosure } from '@chakra-ui/react';
import PriceSectionTwo from './components/PriceSelectionTwo';

const Dashboard = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNotificationDismiss = () => {
    setIsNotificationOpen(false);
  };
  const openNotification = () => {
    setIsNotificationOpen(true);
  };

  return (
    <DashboardLayout title='Dashboard'>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
        {isNotificationOpen && (
          <div className='xl:col-span-2'>
            <Notification onClose={handleNotificationDismiss} />
          </div>
        )}
        <div className='xl:col-span-2'>
          <PortfolioSection onOpen={onOpen} />
        </div>
        <div className='xl:col-span-1 col-span-2'>
          <PriceSection />
        </div>
        <div className='xl:col-span-1 col-span-2'>
          <PriceSectionTwo />
        </div>
        <div className='col-span-2'>
          <InfoCard
            inverted={true}
            openNotification={openNotification}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
