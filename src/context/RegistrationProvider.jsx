/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isApiRegistered, setIsApiRegistered] = useState(false);

  return (
    <RegistrationContext.Provider value={{ isProfileComplete, setIsProfileComplete, isApiRegistered, setIsApiRegistered }}>
      {children}
    </RegistrationContext.Provider>
  );
};
