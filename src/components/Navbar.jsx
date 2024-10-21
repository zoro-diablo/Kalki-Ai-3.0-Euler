import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='w-screen h-[65px] gradient-black-to-dark fixed z-10 pt-[10px]'>
      <div className='flex justify-between mx-[5%] h-full'>
        {/* Left Part */}
        <div className='flex items-center'>
          <Link to='/'>
            <div className='flex items-center'>
              <img
                className='h-[90px] w-[100px] absolute'
                src='/kalki-logo.png'
                alt='kalki-logo'
              />
              <div className='flex gap-2 relative left-[70px]'>
                <p className='font-extrabold text-2xl text-white'>Kalki</p>
                <p className='font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600'>
                  Ai
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Center Part */}
        <div className='flex gap-[30px] ml-[80px] items-center'>
          <p
            href='#section1'
            onClick={handleClick}
            className='text-[14px] text-light-gray transition duration-300 opacity-100 hover:scale-110 hover:text-[#bbb7fa] hover:opacity-100 cursor-pointer'
          >
            Top Performer
          </p>
          <p
            href='#section2'
            onClick={handleClick}
            className='text-[14px] text-light-gray transition duration-300 opacity-100 hover:scale-110 hover:text-[#bbb7fa] hover:opacity-100 cursor-pointer'
          >
            Why Kalki AI?
          </p>
          <Link to='/dashboard'>
            <p className='text-[14px] z-10 text-light-gray transition duration-300 opacity-100 hover:scale-110 hover:text-[#bbb7fa] hover:opacity-100 cursor-pointer'>
              Dashboard
            </p>
          </Link>
        </div>

        {/* Right Part */}
        <div className='flex items-center gap-6'>
          <div>
            {user && (
              <p className='font-medium text-light-gray  hover:text-light-cyan pt-1'>
                30 Days Remaining
              </p>
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
      </div>
    </div>
  );
};

export default Navbar;
