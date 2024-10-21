import { Button, Flex, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { CustomCard } from '../../../chakra/CustomCard';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Graph from './Graph';

const PriceSection = () => {

  return (
    <CustomCard>
      <Flex justify='space-between' align='start'>
        <Stack>
          <HStack color='black.80'>
            <Text fontSize='sm'>Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: 'flex-start',
              sm: 'center',
            }}
            flexDir={{
              base: 'column',
              sm: 'row',
            }}
          >
            <HStack>
              <Text textStyle='h2' fontWeight='medium'>
                22.39401000
              </Text>{' '}
              <HStack fontWeight='medium' color='green.500'>
                <Icon as={BsArrowUpRight} />
                <Text fontSize='sm' fontWeight='medium'>
                  22%
                </Text>
              </HStack>{' '}
            </HStack>
          </HStack>
        </Stack>
        {/* <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack> */}
      </Flex>
      <Graph />
    </CustomCard>
  );
};

export default PriceSection;
