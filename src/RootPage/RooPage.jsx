import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import useAuthProvider from "../AuthProvider/useAuthProvider";

const RooPage = () => {
  const {isDarkeMode} = useAuthProvider();


  return (
    <div className={isDarkeMode ? "bg-black text-white " : ""}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default RooPage;
