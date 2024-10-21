import { useState } from 'react';
import {
  Box,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  Select,
  Radio,
  RadioGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
import { BsArrowDownUp } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { TbPackages } from 'react-icons/tb';
import { IoMdArrowForward } from 'react-icons/io';
import DatePickerDialog from './DatePickerDialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiVoiceprintFill } from 'react-icons/ri';

const Sidenav = () => {
  const location = useLocation();
  const [value, setValue] = useState('1');
  const [sliderValue, setSliderValue] = useState(100);

  const isActiveLink = (link) => location.pathname === link;

  const navLinks = [
    { icon: RxDashboard, text: 'Dashboard', link: '/dashboard' },
    { icon: BsArrowDownUp, text: 'Transactions', link: '/transactions' },
    { icon: TbPackages, text: 'Packages', link: '/packages' },
    { icon: BiSupport, text: 'Support', link: '/support' },
  ];

  const handleSubmitChanges = () => {
    toast(
      <div>
        You have selected <span style={{ color: 'gray' }}>{sliderValue}%</span> of Your income which is <span style={{ color: '#48ca99' }}>${sliderValue * 10}</span>
      </div>,
      {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        className: 'custom-toast',
      }
    );
    toast(
      <div>
        Your most probable return is <span style={{ color: 'gray' }}>{sliderValue}%</span> per ANUM, and your risk exposure is <span style={{ color: 'red' }}>{100 - sliderValue}%</span> of your capital
      </div>,
      {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        className: 'custom-toast',
      }
    );
  };
  return (
    <Stack
      bg='white'
      justify='space-between'
      boxShadow={{ base: 'none', lg: 'lg' }}
      w={{ base: 'full', lg: '16rem' }}
      h='100vh'
    >
      <Box>
        <Heading textAlign='center' fontSize='20px' as='h1' pt='1.5rem'>
          <div className='flex items-center '>
            <Link to='/'>
              <div className='flex items-center'>
                <img
                  className='h-[90px] w-[100px] absolute'
                  src='/kalki-logo.png'
                  alt='kalki-logo'
                />
                <div className='flex gap-2 relative left-[70px]'>
                  <p className='font-extrabold text-2xl text-black'>Kalki</p>
                  <p className='font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600'>
                    Ai
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Heading>
        <Box mt='6' mx='3'>
          <div className='flex flex-col gap-y-4'>
            {navLinks.map((nav) => (
              <Link to={nav.link} key={nav.text}>
                <HStack
                  bg={isActiveLink(nav.link) ? '#F3F3F7' : 'transparent'}
                  color={isActiveLink(nav.link) ? '#171717' : '#797E82'}
                  borderRadius='10px'
                  py='3'
                  px='4'
                  _hover={{ bg: '#F3F3F7', color: '#171717' }}
                >
                  <Icon as={nav.icon} />
                  <Text fontSize='14px' fontWeight='medium'>
                    {nav.text}
                  </Text>
                </HStack>
              </Link>
            ))}
            {location.pathname === '/dashboard' && (
              <div className='flex mx-2 my-4 flex-col gap-y-6'>
                <div>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='row'>
                      <Radio colorScheme='teal' value='1'>
                        Customization
                      </Radio>
                      <Radio colorScheme='teal' value='2'>
                        Default
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </div>
                <div className='flex flex-col gap-y-3'>
                  <div>
                    <h1 className='font-bold text-lg mb-2'>Customization</h1>
                    <div className='flex flex-col gap-y-2'>
                      <p className='font-medium text-gray-600 text-[14px]'>
                        Capital Risk Ratio
                      </p>
                      <p className='text-[14px] text-gray-500 font-medium'>
                        Total Amount{' '}
                        <span className='text-[14px] text-gray-900 font-semibold'>
                          ${sliderValue}
                        </span>
                      </p>
                    </div>
                    <Slider
                      colorScheme='teal'
                      aria-label='slider-ex-1'
                      value={sliderValue}
                      onChange={(val) => setSliderValue(val)}
                      min={0}
                      max={100}
                    >
                      <SliderTrack>
                        <SliderFilledTrack bg='teal' />
                      </SliderTrack>
                      <SliderThumb boxSize={6}>
                        <Box color='teal' as={RiVoiceprintFill} />
                      </SliderThumb>
                    </Slider>
                  </div>
                  <div>
                    <p className='font-medium text-[14px] text-gray-600 my-2 ml-1'>
                      Currency
                    </p>
                    <Select placeholder='Select currency'>
                      <option value='option1'>Currency 1</option>
                      <option value='option2'>Currency 2</option>
                      <option value='option3'>Currency 3</option>
                      <option value='option4'>Currency 4</option>
                    </Select>
                  </div>
                  <div>
                    <p className='font-medium text-[14px] text-gray-600 my-2 mt-2 ml-1 flex items-center gap-x-1'>
                      Hold <IoMdArrowForward /> Advanced
                    </p>
                    <DatePickerDialog />
                  </div>
                  <div>
                    <button
                      className='text-white rounded-md w-full py-2 font-medium text-[14px] btn shadow-md cursor-pointer'
                      onClick={handleSubmitChanges}
                    >
                      <p className='z-10'>Submit Changes</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Box>
      </Box>

      {/* <Box mt='6' mx='3' mb='6'>
        <Link to='/support'>
          <HStack
            borderRadius='10px'
            py='3'
            px='4'
            bg={isActiveLink('/support') ? '#F3F3F7' : 'transparent'}
            color={isActiveLink('/support') ? '#171717' : '#797E82'}
            _hover={{ bg: '#F3F3F7', color: '#171717' }}
          >
            <Icon as={BiSupport} />
            <Text fontSize='14px' fontWeight='medium'>
              Support
            </Text>
          </HStack>
        </Link>
      </Box> */}
      <ToastContainer position='bottom-right' />
    </Stack>
  );
};

export default Sidenav;
