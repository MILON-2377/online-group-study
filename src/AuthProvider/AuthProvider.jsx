import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FirebaseConfig/Firebase.Config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isDarkeMode, setIsDarkMode] = useState(false);

  //user create in with email and password
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user wiht email and password
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  };

  //   login wiht google
  const logInUserWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // user logout
  const userLogOut = () => {
    setUser(null);
    return signOut(auth);
  };

  //iUser logged in
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser && setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUserWithEmail,
    user,
    logInUser,
    logInUserWithGoogle,
    userLogOut,
    isDarkeMode,
    setIsDarkMode,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
