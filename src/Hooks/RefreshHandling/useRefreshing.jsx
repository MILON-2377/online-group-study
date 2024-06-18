import { useEffect, useState } from "react";


const useRefreshing = () => {
    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
        const isPageRefreshed = sessionStorage.getItem("isPageRefreshed");

        if(isPageRefreshed){
            setIsRefresh(true);
        }else{
            sessionStorage.setItem("isPageRefreshed", "true");
        }
    },[])
    
    return isRefresh;
};

export default useRefreshing;