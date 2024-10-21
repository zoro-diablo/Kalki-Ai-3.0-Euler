/* eslint-disable react/prop-types */
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {  Icon, Tag, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { RegistrationContext } from '../../../context/RegistrationProvider';
import { useContext } from 'react';

const PortfolioSection = ({ onOpen }) => {
  const { isProfileComplete, isApiRegistered } = useContext(RegistrationContext);
  const navigate = useNavigate()
  const handleInvestClick = () => {
    if (isProfileComplete && isApiRegistered) {
      navigate('/packages')
    } else {
      onOpen();
    }
  };

  return (
    <div className="flex flex-col xl:flex-row justify-between bg-white rounded-xl p-6 xl:items-center space-y-4 xl:space-y-0 xl:space-x-0">
      <div className="flex flex-col xl:flex-row xl:space-x-16 items-start xl:items-center space-y-4 xl:space-y-0">
        <div>
          <div className="flex items-center space-x-2 text-black">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </div>
          <Text className="text-2xl font-medium">₹ 112,312.24</Text>
        </div>

        <div>
          <div className="flex items-center text-black">
            <Text fontSize="sm">Wallet Balances</Text>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex items-center space-x-2">
              <Text className="text-2xl font-medium">22.39401000</Text>
              <Tag colorScheme="gray" fontWeight="medium">BTC</Tag>
            </div>
            <div className="flex items-center space-x-2">
              <Text className="text-2xl font-medium">₹ 1,300.00</Text>
              <Tag colorScheme="gray">INR</Tag>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2 text-black">
            <Text fontSize="sm">Base Currency</Text>
            <Icon as={AiOutlineInfoCircle} />
          </div>
          <Text className="text-2xl font-medium">USDT</Text>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className='btn py-2 px-4 text-white font-semibold' onClick={handleInvestClick}><p className='z-10'>INVEST</p></button>
      </div>
    </div>
  );
};

export default PortfolioSection;
