/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { RegistrationContext } from '../../../context/RegistrationProvider';
import { CustomCard } from '../../../chakra/CustomCard';

const InfoCard = ({ inverted, openNotification, isOpen, onOpen, onClose }) => {
  const { isProfileComplete, setIsProfileComplete, isApiRegistered, setIsApiRegistered } = useContext(RegistrationContext);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [exchangeType, setExchangeType] = useState('');

  const handleProfileSubmit = (event) => {
    event.preventDefault();
    console.log('Profile Data:', { name, username, country, region, email, phone });
    setIsProfileComplete(true);
    onClose();
    setName('');
    setUsername('');
    setCountry('');
    setRegion('');
    setEmail('');
    setPhone('');
    onOpen();
  };

  const handleApiRegistration = (event) => {
    event.preventDefault();
    console.log('API Registration Data:', { apiKey, apiSecret, exchangeType });
    setIsApiRegistered(true);
    onClose();
    openNotification();
  };

  return (
    <CustomCard
      className='mb-2'
      style={{
        backgroundColor: inverted ? 'purple' : 'white',
        backgroundImage: isProfileComplete
          ? isApiRegistered
            ? 'url(/abstract-envelope.svg)'
            : 'url(/quantum-gradient.svg)'
          : 'url(/large-triangles.svg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='rounded-full px-2 font-semibold w-fit bg-white shadow-md'>
        {isProfileComplete
          ? isApiRegistered
            ? 'Registration Completed'
            : 'Enter API Key'
          : 'Complete Your Profile'}
      </div>
      <div className='flex justify-between mt-4 mb-6 items-center p-2'>
        <p className={`mt-2 font-medium text-xl ${inverted ? 'text-white' : 'text-gray-800'}`}>
          {isProfileComplete
            ? isApiRegistered
              ? 'Your profile is currently under review!'
              : 'To enable API management, please register your API key.'
            : 'To enable AI management, please finish registering your profile.'}
        </p>
        <button
          className='bg-black text-white py-2 px-4 rounded-md font-semibold disabled:opacity-50'
          onClick={!isProfileComplete || !isApiRegistered ? onOpen : null}
          disabled={isApiRegistered}
        >
          {isProfileComplete
            ? isApiRegistered
              ? 'Please Wait'
              : 'Enter API Key'
            : 'Complete Profile'}
        </button>
      </div>

      {isOpen && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
          <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
            <div className='mt-3 text-center'>
              <h3 className='text-lg pb-2 leading-6 font-semibold text-gray-900'>
                {isProfileComplete
                  ? 'Register Your API Key'
                  : 'Complete Your Profile'}
              </h3>
              <button
                onClick={onClose}
                className='absolute top-0 right-0 p-2 text-black bg-transparent'
              >
                &times;
              </button>
              <form
                className='mt-2 space-y-4'
                onSubmit={isProfileComplete ? handleApiRegistration : handleProfileSubmit}
              >
                {isProfileComplete ? (
                  <>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>API Key</label>
                      <input
                        type='text'
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder='Enter your API Key'
                        className='mt-1 p-2 w-full border rounded-md'
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>API Secret</label>
                      <input
                        type='text'
                        value={apiSecret}
                        onChange={(e) => setApiSecret(e.target.value)}
                        placeholder='Enter your API Secret'
                        className='mt-1 p-2 w-full border rounded-md'
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>Type of Exchange</label>
                      <select
                        value={exchangeType}
                        onChange={(e) => setExchangeType(e.target.value)}
                        className='mt-1 p-2 w-full border rounded-md' required>
                        <option value=''>Select an exchange</option>
                        <option value='binance'>Binance</option>
                        <option value='kraken'>Kraken</option>
                        <option value='bitfinex'>Bitfinex</option>
                        <option value='bittrex'>Bittrex</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>Name</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>Username</label>
                      <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username'
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>Country</label>
                      <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>Region</label>
                      <input
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder='Region'
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>Email</label>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm float-left font-semibold ml-1 text-gray-700'>Phone</label>
                      <input
                        type='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Phone'
                        className='mt-1 p-2 w-full border rounded-md'
                        required
                      />
                    </div>
                  </>
                )}
                <div className='flex items-end justify-end pt-4 border-solid border_gray-300 rounded_b'>
                  <button
                    type='button'
                    className='bg-gray-400 text-white active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='bg-cyan-500 btn text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  >
                    <p className='z-10'>{isProfileComplete ? 'Register' : 'Submit'}</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </CustomCard>
  );
};

export default InfoCard;
