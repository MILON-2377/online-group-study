import axios from "axios";
import useAuthProvider from "../../AuthProvider/useAuthProvider";
import { useNavigate } from "react-router-dom";

const secureApi = axios.create({
  baseURL: "https://online-group-study-server-site-phi.vercel.app/",
});

const useAxiosSecureApi = () => {
  const { userLogOut } = useAuthProvider();
  const navigate = useNavigate();

  secureApi.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("user-token");

      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  secureApi.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      const status = error.res.status;

      if (status === 401 || status === 403) {
        userLogOut();
        return navigate("/login");
      }
    }
  );

  return secureApi;
};

export default useAxiosSecureApi;
