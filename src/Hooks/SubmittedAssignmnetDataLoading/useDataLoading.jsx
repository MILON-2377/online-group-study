import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../AxiousSecureApi/useAxiosSecureApi";


const useDataLoading = (api, dataName,name) => {
    const axiosSecureApi = useAxiosSecureApi();
    const email = name;

    const fetchDataLoading = async () => {
        const res = await axiosSecureApi.get(api);
        return res.data;
    }

    return useQuery({
        queryKey: [dataName, dataName],
        queryFn: () => fetchDataLoading(),
        enabled: !!email,
    })
};

export default useDataLoading;