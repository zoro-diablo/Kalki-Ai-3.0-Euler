import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  IconButton,
  Input,
  VStack,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  MenuItemOption,
  MenuOptionGroup,
} from '@chakra-ui/react';
import {
  CheckIcon,
  CloseIcon,
  ViewIcon,
  DeleteIcon,
  SettingsIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import { useState } from 'react';
import React from 'react';

const tableData = [
  {
    user: 'KAIT-205',
    balance: '1155.519',
    availableBalance: '873.188',
    unrealizedProfit: '7.954',
    from: '01-03-2024',
    to: '04-05-2024',
  },
  {
    user: 'KAIT-206',
    balance: '1041.614',
    availableBalance: '786.963',
    unrealizedProfit: '7.081',
    from: '01-03-2024',
    to: '04-05-2024',
  },
  {
    user: 'KAIT-207',
    balance: '742.936',
    availableBalance: '561.421',
    unrealizedProfit: '5.051',
    from: '01-03-2024',
    to: '04-05-2024',
  },
];

import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';

const DataTable = () => {
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending',
  });
  const [visibleColumns, setVisibleColumns] = useState([
    'user',
    'balance',
    'availableBalance',
    'unrealizedProfit',
    'from',
    'to',
    'actions',
    'approve',
  ]);
  const bgColor = useColorModeValue('white', 'gray.800');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [actionType, setActionType] = useState('');

  const handleActionClick = (type) => {
    setActionType(type);
    onOpen();
  };

  const confirmAction = () => {
    console.log(`${actionType} confirmed.`);
    onClose();
  };

  const sortedData = React.useMemo(() => {
    let sortableItems = [...tableData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems.filter((data) =>
      data.user.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const SortIcon = ({ columnName }) => {
    if (sortConfig.key !== columnName) return null;
    return sortConfig.direction === 'ascending' ? (
      <ChevronUpIcon />
    ) : (
      <ChevronDownIcon />
    );
  };

  const handleColumnVisibility = (value) => {
    setVisibleColumns(value);
  };

  return (
    <div>
     
      <Menu closeOnSelect={false}>
        <div className='flex justify-end gap-3'>
        <div className='flex justify-start items-start pl-4 '>
        <Input
          placeholder='Filter by user...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          width={200}
          style={{ background: 'white', color: 'black' }}
        />
      </div>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Adjust Columns
          </MenuButton>
        </div>
        <MenuList minWidth='240px'>
          <MenuOptionGroup
            defaultValue={visibleColumns}
            type='checkbox'
            onChange={handleColumnVisibility}
          >
            <MenuItemOption value='user'>User</MenuItemOption>
            <MenuItemOption value='balance'>Balance</MenuItemOption>
            <MenuItemOption value='availableBalance'>Available Balance</MenuItemOption>
            <MenuItemOption value='unrealizedProfit'>Unrealized Profit</MenuItemOption>
            <MenuItemOption value='from'>From</MenuItemOption>
            <MenuItemOption value='to'>To</MenuItemOption>
            <MenuItemOption value='actions'>Actions</MenuItemOption>
            <MenuItemOption value='approve'>Approve/Disapprove</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <VStack
        spacing={4}
        className='m-5 bg-white rounded-md shadow-md'
        bg={bgColor}
      >
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                {visibleColumns.includes('user') && <Th>User</Th>}
                {visibleColumns.includes('balance') && (
                  <Th cursor='pointer' onClick={() => requestSort('balance')}>
                    Balance ($) <SortIcon columnName='balance' />
                  </Th>
                )}
                {visibleColumns.includes('availableBalance') && (
                  <Th
                    cursor='pointer'
                    onClick={() => requestSort('availableBalance')}
                  >
                    Available Balance ($){' '}
                    <SortIcon columnName='availableBalance' />
                  </Th>
                )}
                {visibleColumns.includes('unrealizedProfit') && (
                  <Th
                    cursor='pointer'
                    onClick={() => requestSort('unrealizedProfit')}
                  >
                    Unrealized Profit ($){' '}
                    <SortIcon columnName='unrealizedProfit' />
                  </Th>
                )}
                {visibleColumns.includes('from') && <Th>From</Th>}
                {visibleColumns.includes('to') && <Th>To</Th>}
                {visibleColumns.includes('actions') && <Th>Actions</Th>}
                {visibleColumns.includes('approve') && <Th>Approve</Th>}
              </Tr>
            </Thead>
            <Tbody>
              {sortedData.map((row, index) => (
                <Tr key={index}>
                  {visibleColumns.includes('user') && <Td>{row.user}</Td>}
                  {visibleColumns.includes('balance') && (
                    <Td isNumeric>{row.balance}</Td>
                  )}
                  {visibleColumns.includes('availableBalance') && (
                    <Td isNumeric>{row.availableBalance}</Td>
                  )}
                  {visibleColumns.includes('unrealizedProfit') && (
                    <Td isNumeric>{row.unrealizedProfit}</Td>
                  )}
                  {visibleColumns.includes('from') && <Td>{row.from}</Td>}
                  {visibleColumns.includes('to') && <Td>{row.to}</Td>}
                  {visibleColumns.includes('actions') && (
                    <Td>
                      <Menu>
                        <MenuButton as={Button} size='sm' colorScheme='teal'>
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem icon={<SettingsIcon />}>GET PNL</MenuItem>
                          <MenuItem icon={<ViewIcon />}>OPEN ORDER</MenuItem>
                          <MenuItem icon={<DeleteIcon />}>DELETE</MenuItem>
                          <MenuItem icon={<ViewIcon />}>VIEW</MenuItem>
                          <MenuItem icon={<SettingsIcon />}>TASK</MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  )}
                  {visibleColumns.includes('approve') && (
                    <Td>
                      <IconButton
                        icon={<CheckIcon />}
                        colorScheme='green'
                        aria-label='Approve'
                        size='sm'
                        mr={2}
                        onClick={() => handleActionClick('approve')}
                      />
                      <IconButton
                        icon={<CloseIcon />}
                        colorScheme='red'
                        aria-label='Reject'
                        size='sm'
                        onClick={() => handleActionClick('reject')}
                      />
                    </Td>
                  )}
                </Tr>
              ))}
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    {actionType === 'approve' ? 'Approve' : 'Reject'} User
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {`Are you sure you want to ${actionType} this user?`}
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={confirmAction}>
                      Yes
                    </Button>
                    <Button variant='ghost' onClick={onClose}>
                      No
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </div>
  );
};

export default DataTable;
