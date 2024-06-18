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
import ProtectiveRoutse from "../ProtectiveRoute/ProtectiveRoutse";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RooPage></RooPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createassignment",
        element: (
          <ProtectiveRoutse>
            {" "}
            <CreateAssignment></CreateAssignment>
          </ProtectiveRoutse>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/assignemnts",
        element: (
          <ProtectiveRoutse>
            <Assignment></Assignment>
          </ProtectiveRoutse>
        ),
      },
      {
        path: "/updateAssignment",
        element: (
          <ProtectiveRoutse>
            {" "}
            <UpdateAssignment></UpdateAssignment>
          </ProtectiveRoutse>
        ),
      },
      {
        path: "/assignmentDetails",
        element: (
          <ProtectiveRoutse>
            {" "}
            <AssignmentDetailsPage></AssignmentDetailsPage>
          </ProtectiveRoutse>
        ),
      },
      {
        path: "/mySubmittedAssignmnets",
        element: (
          <ProtectiveRoutse>
            {" "}
            <MySubmittedAssignment></MySubmittedAssignment>
          </ProtectiveRoutse>
        ),
      },
      {
        path: "/pendingAssignments",
        element: (
          <ProtectiveRoutse>
            {" "}
            <PendingAssignments></PendingAssignments>
          </ProtectiveRoutse>
        ),
      },
      {
        path: "/profile",
        element: <ProfilePage></ProfilePage>,
      },
    ],
  },
]);
