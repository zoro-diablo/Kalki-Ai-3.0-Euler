import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  VStack,
  Icon,
} from '@chakra-ui/react';
import {
  FaUser,
  FaDollarSign,
  FaArrowRight,
  FaPaperPlane,
} from 'react-icons/fa';

const Transfer = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      m={5}
    >
      <VStack
        spacing={5}
        w='full'
        maxW='xl'
        p={10}
        bg='gray.100'
        rounded='lg'
        shadow='lg'
        m={5}
      >
        <h2 className='text-xl font-bold text-center text-black'>
          Transfer Fund
        </h2>
        <FormControl isRequired>
          <FormLabel>User Name</FormLabel>
          <Input
            type='text'
            placeholder='Enter your username'
            bg='white'
            borderColor='gray.300'
            _hover={{ borderColor: 'gray.400' }}
            size='lg'
            fontSize='lg'
            p={6}
            pl={10}
            leftAddon={<Icon as={FaUser} />}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Amount</FormLabel>
          <Input
            type='number'
            placeholder='Enter amount'
            bg='white'
            borderColor='gray.300'
            _hover={{ borderColor: 'gray.400' }}
            size='lg'
            fontSize='lg'
            p={6}
            pl={10}
            leftAddon={<Icon as={FaDollarSign} />}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Transfer To</FormLabel>
          <Input
            type='text'
            placeholder='Destination username'
            bg='white'
            borderColor='gray.300'
            _hover={{ borderColor: 'gray.400' }}
            size='lg'
            fontSize='lg'
            p={6}
            pl={10}
            leftAddon={<Icon as={FaArrowRight} />}
          />
        </FormControl>
        <Button
          leftIcon={<FaPaperPlane />}
          colorScheme='blue'
          variant='solid'
          w='full'
          py={4}
          size='lg'
          type='submit'
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default Transfer;
