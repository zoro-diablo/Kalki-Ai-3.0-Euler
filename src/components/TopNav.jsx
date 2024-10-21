/* eslint-disable react/prop-types */
import { Box, HStack, Heading, Icon } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const TopNav = ({ title, onOpen }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box px='4' bg='white'>
      <HStack maxW='70rem' h='16' justify='space-between' mx='auto'>
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: 'block',
            lg: 'none',
          }}
        />
        <Heading fontWeight='medium' fontSize='28px'>
          {title}
        </Heading>
        <div className='flex items-center gap-6'>
          <div>
            {user && (
              <p className='font-medium text-black   pt-1'>30 Days Remaining</p>
            )}
          </div>
          {user ? (
            <div className='text-white text-[14px]'>
              <button id='btn-message' className='button-message'>
                <div className='content-avatar'>
                  <div className='status-user'></div>
                  <div className='avatar'>
                    <img src={user.picture} alt='prf' />
                  </div>
                </div>
                <div className='notice-content'>
                  <div className='username'>{user.name}</div>
                  <div className='lable-message'>{user.name}</div>
                  <div className='user-id'>{user.email}</div>
                </div>
              </button>
            </div>
          ) : (
            <>
              <button className='btn bg-gradient-button-one w-[109px] h-[39px] text-[13px] font-semibold text-white rounded-md'>
                <Link to='/signup' className='z-20'>
                  SIGN UP
                </Link>
              </button>
              <button className='text-bright-cyan text-[14px]'>
                <Link to='/login'>Log in</Link>
              </button>
            </>
          )}
          {user && (
            <button
              className='btn bg-gradient-button-one w-[109px] h-[39px] text-[13px] font-semibold text-white rounded-md'
              onClick={handleLogout}
            >
              <p className='z-10'>Sign Out</p>
            </button>
          )}
        </div>
      </HStack>
    </Box>
  );
};

export default TopNav;
