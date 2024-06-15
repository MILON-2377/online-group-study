import { createBrowserRouter } from "react-router-dom";
import RooPage from "../RootPage/RooPage";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import LogIn from "../Pages/LogInRegister/LogIn/LogIn";
import Register from "../Pages/LogInRegister/Register/Register";
import Assignment from "../Pages/DisplayAssignments/Assignment";
import Home from "../Pages/Home/Home";
import UpdateAssignment from "../Pages/DisplayAssignments/UpdateAssignment/UpdateAssignment";
import AssignmentDetailsPage from "../Pages/AssignementDetailsPage/AssignementDetails";
import MySubmittedAssignment from "../Pages/MySubmittedAssignment/MySubmittedAssignment";
import PendingAssignments from "../Pages/PendingAssignmetsPage/PendingAssignments";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RooPage></RooPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
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
            },
            {
                path: "/updateAssignment",
                element: <UpdateAssignment></UpdateAssignment>
            },
            {
                path: "/assignmentDetails",
                element: <AssignmentDetailsPage></AssignmentDetailsPage>
            },
            {
                path: "/mySubmittedAssignment",
                element: <MySubmittedAssignment></MySubmittedAssignment>
            },
            {
                path: "/pendingAssignments",
                element: <PendingAssignments></PendingAssignments>
            }
        ]
    }
])