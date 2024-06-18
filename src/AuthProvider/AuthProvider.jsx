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
import usePublicApi from "../Hooks/PublicApi/usePublicApi";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isDarkeMode, setIsDarkMode] = useState(false);
  const publicApi = usePublicApi();

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
      if (currentUser) {
        setUser(currentUser);

        const email = currentUser.email;

        publicApi
          .post("/jwt", { email })
          .then((res) => {
            console.log(res);
            const token = res?.data?.token;
            localStorage.setItem("user-token", token);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setUser(null);
        localStorage.setItem("user-token", null);
      }
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
