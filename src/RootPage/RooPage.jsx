import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import useAuthProvider from "../AuthProvider/useAuthProvider";


const RooPage = () => {
    const { isDarkMode,} = useAuthProvider();
    // console.log(isDarkMode);
    return (
        <div className={isDarkMode ? "bg-black text-white " : ""}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RooPage;