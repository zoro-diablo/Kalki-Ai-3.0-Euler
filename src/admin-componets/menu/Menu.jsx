import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { FaMoneyBillTransfer } from "react-icons/fa6";

import './menu.scss';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='item'>
        <span className='title'>main</span>
        <NavLink to='/admin/home' className='listItem'>
          <IoHome className='h-5' />
          <span className='listItemTitle'>Homepage</span>
        </NavLink>
        <NavLink to='/admin/profile' className='listItem'>
          <MdAdminPanelSettings className='h-5' />
          <span className='listItemTitle'>Profile</span>
        </NavLink>
        <NavLink to='/admin/transfer' className='listItem'>
          <FaMoneyBillTransfer className='h-5' />
          <span className='listItemTitle'>Transfer</span>
        </NavLink>
      </div>
      <div className='item'>
        <span className='title'>lists</span>
        <NavLink to='/admin/users' className='listItem'>
          <FaUserFriends  className='h-5' />
          {/* <img src="user.svg" alt="" /> */}
          <span className='listItemTitle'>Users</span>
        </NavLink>
        {/* <NavLink to='/products' className='listItem'>
          <img src='product.svg' alt='' />
          <span className='listItemTitle'>Products</span>
        </NavLink>
        <NavLink to='/orders' className='listItem'>
          <img src='order.svg' alt='' />
          <span className='listItemTitle'>Orders</span>
        </NavLink>
        <NavLink to='/posts' className='listItem'>
          <img src='post2.svg' alt='' />
          <span className='listItemTitle'>Posts</span>
        </NavLink> */}
      </div>
      {/* <div className='item'>
        <span className='title'>general</span>
        <NavLink to='/' className='listItem'>
          <img src='element.svg' alt='' />
          <span className='listItemTitle'>Elements</span>
        </NavLink>
        <NavLink to='/' className='listItem'>
          <img src='note.svg' alt='' />
          <span className='listItemTitle'>Notes</span>
        </NavLink>
        <NavLink to='/' className='listItem'>
          <img src='form.svg' alt='' />
          <span className='listItemTitle'>Forms</span>
        </NavLink>
        <NavLink to='/' className='listItem'>
          <img src='calendar.svg' alt='' />
          <span className='listItemTitle'>Calendar</span>
        </NavLink>
      </div>
      <div className='item'>
        <span className='title'>Maintenance</span>
        <NavLink to='/' className='listItem'>
          <img src='setting.svg' alt='' />
          <span className='listItemTitle'>Settings</span>
        </NavLink>
        <NavLink to='/' className='listItem'>
          <img src='backup.svg' alt='' />
          <span className='listItemTitle'>Backups</span>
        </NavLink>
      </div>
      <div className='item'>
        <span className='title'>analytics</span>
        <NavLink to='/' className='listItem'>
          <img src='chart.svg' alt='' />
          <span className='listItemTitle'>Charts</span>
        </NavLink>
        <NavLink to='/' className='listItem'>
          <img src='log.svg' alt='' />
          <span className='listItemTitle'>Logs</span>
        </NavLink>
      </div> */}
    </div>
  );
};

export default Menu;
