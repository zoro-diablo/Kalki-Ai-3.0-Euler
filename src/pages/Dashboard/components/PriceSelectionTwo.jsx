import { Flex, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { CustomCard } from '../../../chakra/CustomCard';
import { BsArrowUpRight } from 'react-icons/bs';
import LineGraph from './LineGraph';

const PriceSectionTwo = () => {

  return (
    <CustomCard>
      <Flex justify='space-between' align='start' >
        <Stack>
          <HStack color='black.80'>
            <Text fontSize='sm'>Top Performance</Text>
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
                42.39401000
              </Text>{' '}
              <HStack fontWeight='medium' color='green.500'>
                <Icon as={BsArrowUpRight} />
                <Text fontSize='sm' fontWeight='medium'>
                  52%
                </Text>
              </HStack>{' '}
            </HStack>
          </HStack>
        </Stack>
        {/* <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Add</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Delete</Button>
        </HStack> */}
      </Flex>
      <div className='mt-10'>
          <LineGraph />
      </div>
    </CustomCard>
  );
};

export default PriceSectionTwo;
