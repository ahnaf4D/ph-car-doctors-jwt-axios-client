import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log('current user', currentUser);
      // We get a user or not
      setLoading(false);
      console.log(currentUser);
      if (currentUser) {
        axios
          .post('http://localhost:3000/auth/jwt', loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log('token response', res.data);
          });
      } else {
        axios
          .post(`http://localhost:3000/auth/logout`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      }
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
