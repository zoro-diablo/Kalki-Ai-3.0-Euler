/* eslint-disable react/prop-types */
import DashboardLayout from '../../components/DashboardLayout';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import Message from './Message';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegistrationContext } from '../../context/RegistrationProvider';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export default function Package() {
  const [isSelected, setIsSelected] = useState();

  const { isProfileComplete, isApiRegistered } =
    useContext(RegistrationContext);
  const navigate = useNavigate();
  const handleClick = () => {
    if (isProfileComplete && isApiRegistered) {
      navigate('/packages');
    } else {
      setIsSelected(true);
    }
  };

  return (
    <DashboardLayout title='Packages'>
      {isSelected ? <Message /> : ''}
      <Box py={10}>
        <VStack spacing={2} textAlign='center'>
          <Heading as='h1' fontSize='30'>
            Plans that fit your need
          </Heading>
          <Text fontSize='xl' color={'gray.500'}>
            Begin your crypto journey with our tailored plans.
          </Text>
        </VStack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign='center'
          justify='center'
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight='500' fontSize='2xl'>
                Basic
              </Text>
              <HStack justifyContent='center'>
                <Text fontSize='3xl' fontWeight='600'>
                  $
                </Text>
                <Text fontSize='5xl' fontWeight='900'>
                  5,000
                </Text>
                <Text fontSize='3xl' color='gray.500'>
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign='start' px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w='80%' pt={7}>
                <Button w='full' colorScheme='blue' variant='outline'>
                  Coming soon!
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position='relative'>
              <Box
                position='absolute'
                top='-16px'
                left='50%'
                style={{ transform: 'translate(-50%)' }}
              >
                <button
                className='btn px-2 font-medium text-white text-[15px]'
                >
                  <p className='z-10'>Most Popular</p>
                </button>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight='500' fontSize='2xl'>
                  Trial
                </Text>
                <HStack justifyContent='center'>
                  <Text fontSize='3xl' fontWeight='600'>
                    $
                  </Text>
                  <Text fontSize='5xl' fontWeight='900'>
                    10,000
                  </Text>
                  <Text fontSize='3xl' color='gray.500'>
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}
              >
                <List spacing={3} textAlign='start' px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='green.500' />
                    Projected Returns: 26.9%
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='green.500' />
                    Risk Level: Low (2%)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='green.500' />
                    Ai - powered
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='green.500' />
                    Assured Trade
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='green.500' />
                    Professional Support
                  </ListItem>
                </List>
                <Box w='80%' pt={7}>
                  <button className="w-full btn text-white py-2 font-semibold" onClick={handleClick}>
                    <p className='z-10'>Let&apos;s Go</p>
                  </button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight='500' fontSize='2xl'>
                Pro
              </Text>
              <HStack justifyContent='center'>
                <Text fontSize='3xl' fontWeight='600'>
                  $
                </Text>
                <Text fontSize='5xl' fontWeight='900'>
                  25,000
                </Text>
                <Text fontSize='3xl' color='gray.500'>
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign='start' px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color='green.500' />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w='80%' pt={7}>
                <Button w='full' colorScheme='blue' variant='outline'>
                  Coming soon!
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
    </DashboardLayout>
  );
}
