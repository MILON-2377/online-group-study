import { useEffect, useState } from "react";
import useAuthProvider from "../../AuthProvider/useAuthProvider";
import useDataLoading from "../../Hooks/SubmittedAssignmnetDataLoading/useDataLoading";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import useAxiosSecureApi from "../../Hooks/AxiousSecureApi/useAxiosSecureApi";
import Swal from "sweetalert2";

const PendingAssignments = () => {
  const { user } = useAuthProvider();
  const { data, isLoading, refetch, error } = useDataLoading(
    `/submittedAssignmentData?pending=pending`,
    "pendingData",
    user?.email
  );
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [marks, setMarks] = useState("");
  const [feedback, setFeedback] = useState("");
  const axiosSecureApi = useAxiosSecureApi();

  useEffect(() => {
    // console.log(data);
    if (data) {
      setAssignments(data);
    }
  }, [data]);

  const handleGiveMarkClick = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleModalClose = () => {
    setSelectedAssignment(null);
    setMarks("");
    setFeedback("");
  };

  const handleSubmit = () => {
    const id = selectedAssignment._id;
    const Examinee = user?.displayName;

    axiosSecureApi
      .put(`/submittedAssignmentData?id=${id}`, { marks, feedback, Examinee })
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Marks and feedback submitted successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });

          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });

    handleModalClose();
  };

  if (isLoading || !user) {
    return <LoadingPage></LoadingPage>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Pending Assignments</h1>
        <div className="grid gap-6">
          {assignments?.map((assignment) => (
            <div key={assignment?._id} className="p-6 bg-white rounded shadow">
              <h2 className="text-2xl font-semibold mb-2">
                {assignment?.title}
              </h2>
              <p className="mb-2">Examinee: {assignment?.Examinee}</p>
              <p className="mb-4">Marks: {assignment?.marks}</p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleGiveMarkClick(assignment)}
              >
                Give Mark
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedAssignment && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Give Mark</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Marks</label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 border rounded"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Feedback</label>
              <textarea
                className="w-full mt-1 px-3 py-2 border rounded"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignments;
