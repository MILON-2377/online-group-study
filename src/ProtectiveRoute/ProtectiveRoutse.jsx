import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import { useEffect, useState } from "react";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";

const fakeAuthChcek = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

const ProtectiveRoutse = ({ children }) => {
  const [isAuthentiCate, setIsAuthentiCate] = useState(false);
  const [laodingPage, setLoadingPage] = useState(true);
  const { user } = useAuthProvider();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await fakeAuthChcek();
      setIsAuthentiCate(auth);
      setLoadingPage(false);
    };

    checkAuth();
  }, []);

  if (laodingPage) {
    return <LoadingPage></LoadingPage>;
  }

  if (!isAuthentiCate) {
    return <Navigate to="/login"></Navigate>;
  } 

  if(!user){
    return <Navigate to='/login'></Navigate>
  }

return children;
  
};

export default ProtectiveRoutse;
