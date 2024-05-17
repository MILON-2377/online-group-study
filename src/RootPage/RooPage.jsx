import { Outlet } from "react-router-dom";


const RooPage = () => {
    return (
        <div>
            <h1 className="text-5xl">this is root page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default RooPage;