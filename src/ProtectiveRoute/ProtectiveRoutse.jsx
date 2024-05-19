import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../AuthProvider/useAuthProvider";

const ProtectiveRoutse = ({children}) => {

    const {user} = useAuthProvider();
    const location = useLocation();

    if(user){
        return children;
    }else{
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
};

export default ProtectiveRoutse;