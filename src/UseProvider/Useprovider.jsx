import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../firbase/firbase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const Useprovider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading]= useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const sinINGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const singInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unSubcribe();
    }
  }, [])


  const authInfo = { user, createUser, singInUser, logOut, loading, sinINGoogle }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Useprovider;

Useprovider.propTypes = {
  children: PropTypes.node
}