import { useContext } from "react";
import { authContext } from "./AuthProvider";

const useAuthProvider = () => {
  const authPro = useContext(authContext);

  return authPro;
};

export default useAuthProvider;
