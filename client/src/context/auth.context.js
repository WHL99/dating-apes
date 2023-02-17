import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const verifyStoredToken = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      if (storedToken) {
        const response = await axios.get(`/auth/verify`, { headers: { Authorization: `Bearer ${storedToken}` } });
        const user = response.data;
        setUser(user);
        setIsLoggedIn(true);
      }
      else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };


  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  const logOutUser = () => {
    removeToken();
    verifyStoredToken();
  };

  useEffect(() => {
    verifyStoredToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, verifyStoredToken, logOutUser }}>{props.children}</AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
