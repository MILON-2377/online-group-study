import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://online-group-study-server-site-phi.vercel.app/",
});

const usePublicApi = () => {
  return axiosPublic;
};

export default usePublicApi;
