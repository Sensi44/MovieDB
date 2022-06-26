import React, { useContext, useState } from 'react';

const AlertContext = React.createContext();
const AlertToggleContext = React.createContext();

export const useAlert = () => useContext(AlertContext);
export const useAlertToggle = () => useContext(AlertToggleContext);

// eslint-disable-next-line react/prop-types
export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const toggle = () => setAlert((prev) => !prev);
  console.log(alert);

  return (
    <AlertContext.Provider value={alert}>
      <AlertToggleContext.Provider value={toggle}>
        {children}
      </AlertToggleContext.Provider>
    </AlertContext.Provider>
  );
};
