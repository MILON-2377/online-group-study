import { useEffect, useState } from "react";
import useAuthProvider from "../../AuthProvider/useAuthProvider";
import useDataLoading from "../../Hooks/SubmittedAssignmnetDataLoading/useDataLoading";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";

const MySubmittedAssignment = () => {
  const { user } = useAuthProvider();
  const [submittedAssignment, setSubmittedAssignment] = useState([]);

  const { data, isLoading, error } = useDataLoading(
    `/submittedAssignmentData?email=${user?.email}`,
    "submittedData",
    user?.email
  );

  useEffect(() => {
    console.log(data);
    if (data) {
      setSubmittedAssignment(data);
    }
  }, [data]);

  if (isLoading || !user) {
    return <LoadingPage></LoadingPage>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          My Assignments
        </h2>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 text-gray-800 font-semibold">
                  Title
                </th>
                <th className="py-3 px-6 bg-gray-200 text-gray-800 font-semibold">
                  Status
                </th>
                <th className="py-3 px-6 bg-gray-200 text-gray-800 font-semibold">
                  Marks
                </th>
                <th className="py-3 px-6 bg-gray-200 text-gray-800 font-semibold">
                  Obtained Marks
                </th>
                <th className="py-3 px-6 bg-gray-200 text-gray-800 font-semibold">
                  Feedback
                </th>
              </tr>
            </thead>
            <tbody>
              {submittedAssignment?.map((assignment) => (
                <tr key={assignment?._id} className="border-b">
                  <td className="py-4 px-6">{assignment?.title}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        assignment?.assignmentStatus === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : assignment.status === "Reviewed"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {assignment?.assignmentStatus}
                    </span>
                  </td>
                  <td className="py-4 px-6">{assignment?.marks}</td>
                  <td className="py-4 px-6">
                    {assignment?.yourObtainMarks || "N/A"}
                  </td>
                  <td className="py-4 px-6">{assignment?.feedBack || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySubmittedAssignment;
