import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import { useEffect, useState } from "react";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import useRefreshing from "../Hooks/RefreshHandling/useRefreshing";

const fakeAuthChcek = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2200);
  });
};

const ProtectiveRoutse = ({ children }) => {
  const [isAuthentiCate, setIsAuthentiCate] = useState(false);
  const [laodingPage, setLoadingPage] = useState(true);
  const { user } = useAuthProvider();
  const location = useLocation();
  const isRefresh = useRefreshing();

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

  if (!isAuthentiCate || !user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default ProtectiveRoutse;
