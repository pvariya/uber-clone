import React, { useState, createContext } from 'react';
export const UserdataContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <UserdataContext.Provider value={{ user, setUser }}>
      {children}
    </UserdataContext.Provider>
  );
};

export default UserContext;
