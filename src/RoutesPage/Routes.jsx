import { createBrowserRouter } from "react-router-dom";
import RooPage from "../RootPage/RooPage";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RooPage></RooPage>,
        children: [
            {
                path: "/createassignment",
                element: <CreateAssignment></CreateAssignment>
            }
        ]
    }
])