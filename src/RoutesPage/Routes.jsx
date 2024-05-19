import { createBrowserRouter } from "react-router-dom";
import RooPage from "../RootPage/RooPage";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import LogIn from "../Pages/LogInRegister/LogIn/LogIn";
import Register from "../Pages/LogInRegister/Register/Register";
import Assignment from "../Pages/DisplayAssignments/Assignment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RooPage></RooPage>,
        children: [
            {
                path: "/createassignment",
                element: <CreateAssignment></CreateAssignment>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/createassignment",
                element: <CreateAssignment></CreateAssignment>
            },
            {
                path: "/assignemnts",
                element: <Assignment></Assignment>
            }
        ]
    }
])