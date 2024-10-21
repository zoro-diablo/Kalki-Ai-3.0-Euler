import { Link } from "react-router-dom";

const NavbarAuth = () => {
  return (
    <div className='w-screen h-[65px] gradient-black-to-dark fixed z-10'>
      <div className='flex w-[85%] h-full justify-between items-center mx-auto'>
        <div>
          <div className='flex h-full items-center relative'>
            <img
              className='h-[90px] w-[100px] absolute'
              src='/kalki-logo.png'
              alt='kalki-logo'
            />
            <div className='flex gap-2 relative left-[70px]'>
              <p className='font-extrabold text-2xl text-white'><Link to='/'>Kalki</Link></p>
              <p className='font-extrabold text-2xl  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600'>
                Ai
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className='flex gap-[30px]'></div>

        <div className='flex gap-6'>
          <button className='btn bg-gradient-button-one w-[109px] h-[39px] text-[13px] font-semibold text-white rounded-md'>
            <div className='z-20'>SIGN UP</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavbarAuth;
