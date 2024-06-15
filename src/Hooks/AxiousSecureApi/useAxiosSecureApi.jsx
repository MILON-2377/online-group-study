import axios from "axios";



const secureApi = axios.create({
    baseURL: 'http://localhost:5000/',
})

const useAxiosSecureApi = () => {
    return secureApi;
};

export default useAxiosSecureApi;