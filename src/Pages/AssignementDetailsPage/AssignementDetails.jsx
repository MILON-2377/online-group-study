import { useEffect, useState } from "react";
import updateAssingmenArr from "../../Hooks/UpdateAssingment/updateAssignment";
import useAuthProvider from "../../AuthProvider/useAuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecureApi from "../../Hooks/AxiousSecureApi/useAxiosSecureApi";
import Swal from "sweetalert2";

const AssignmentDetailsPage = () => {
  const { user } = useAuthProvider();
  const [showModal, setShowModal] = useState(false);
  const [viewAssignment, setViewAssignment] = useState([]);
  const axiosSecureApi = useAxiosSecureApi();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const viewAss = updateAssingmenArr();
    setViewAssignment(viewAss);
  }, []);

  const handleTakeAssignment = () => {
    setShowModal(true);
  };

  const onSubmit = (data) => {
    const assignmentD = updateAssingmenArr();
    const email = user?.email;
    const submitInfo = {
      assignmentStatus: "pending",
      yourObtainMarks: 0,
      feedBack: "",
    };

    axiosSecureApi
      .post("/submitAssignment", {
        ...data,
        email,
        ...submitInfo,
        ...assignmentD,
      })
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Assignment Submitted!",
            text: "Your assignment has been successfully submitted.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
  };

  return (
    <div className="flex items-center justify-center w-full h-[80vh]">
      <div className="max-w-4xl w-[800px] mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        {/* Assignment Title */}
        <h2 className="text-3xl font-bold mb-4">{viewAssignment?.title}</h2>

        {/* Thumbnail or Placeholder */}
        {viewAssignment?.thumbnailUrl ? (
          <img
            src={viewAssignment?.thumbnailUrl}
            alt="Assignment Thumbnail"
            className="w-full rounded-md mb-4"
          />
        ) : (
          <div className="w-full h-52 bg-gray-300 mb-4 rounded-md flex items-center justify-center">
            <p className="text-gray-600">No thumbnail available</p>
          </div>
        )}

        {/* Assignment Details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="mt-2 text-gray-700">{viewAssignment?.description}</p>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
            <div className="mb-2">
              <span className="font-semibold">Difficulty:</span>{" "}
              {viewAssignment?.difficulty}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Due Date:</span>{" "}
              {viewAssignment?.dueDate}
            </div>
            <div>
              <span className="font-semibold">Creator:</span>{" "}
              {viewAssignment?.creator}
            </div>
          </div>
        </div>

        {/* Action Buttons (Take Assignment) */}
        <div className="flex items-center justify-end space-x-4 mt-4">
          <button
            onClick={handleTakeAssignment}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Take Assignment
          </button>
        </div>

        {/* Assignment Submission Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-md max-w-lg w-full">
              <h2 className="text-xl font-bold mb-4">Submit Assignment</h2>
              {/* Assignment Submission Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label
                    htmlFor="pdfLink"
                    className="block text-sm font-semibold"
                  >
                    PDF/Doc Link
                  </label>
                  <input
                    id="pdfLink"
                    type="text"
                    {...register("pdfLink", { required: true })}
                    className="input border border-blue-500 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="quickNote"
                    className="block text-sm font-semibold"
                  >
                    Quick Note
                  </label>
                  <textarea
                    id="quickNote"
                    {...register("quickNote", { required: true })}
                    rows="4"
                    className="input border py-3 border-blue-500 w-full"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentDetailsPage;
