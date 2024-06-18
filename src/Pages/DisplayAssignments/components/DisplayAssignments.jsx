import Swal from "sweetalert2";
import useAuthProvider from "../../../AuthProvider/useAuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import updateAssingmenArr from "../../../Hooks/UpdateAssingment/updateAssignment";

const DisplayAssignments = ({ assignmentData }) => {
  // console.log(assignmentData);
  const { user } = useAuthProvider();
  const {
    difficulty,
    dueDate,
    thumbnailUrl,
    title,
    description,
    _id,
    marks,
    email,
  } = assignmentData;

  const navigate = useNavigate();

  // delete assignment which are made by himself
  const handleDeleteAssingment = (email, _id) => {
    const userEmail = user?.email;

    if (userEmail === email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:5000/assignment/${_id}`)
            .then(() => {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    } else {
      Swal.fire({
        title: "Warning!",
        text: "You can not delete others user assignment!",
        icon: "warning",
      });
    }
  };

  // update assignment
  const handleUpdateAssignment = (name) => {
    // console.log(name);
    const firstName = "";
    updateAssingmenArr({...name, firstName});
    navigate("/updateAssignment"); 
  };


  // assignment details handle
  const handleViewAssignemnt =(name) => {
    // console.log(name);
    const Examinee = user?.displayName;
    updateAssingmenArr({...name, Examinee});
    navigate("/assignmentDetails");
  }

  return (
    <>
      <article className="flex flex-col bg-gray-900 dark:bg-gray-50 rounded-lg overflow-hidden shadow-lg">
        <a
          href="#"
          aria-label="View Assignment"
          className="block relative h-48 md:h-64 overflow-hidden"
        >
          <img
            alt="Assignment Thumbnail"
            className="object-cover w-full h-full transform hover:scale-110 transition duration-300"
            src="https://source.unsplash.com/200x200/?fashion?1"
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            href="#"
            className="text-xs tracking-wider uppercase hover:underline text-violet-400 dark:text-violet-600"
          >
            {title}
          </a>
          <h3 className="py-2 text-lg font-semibold leading-snug text-gray-100 dark:text-gray-900">
            {description}
          </h3>
          <div className="flex justify-between items-center pt-1">
            <div className="flex items-center space-x-2 text-white text-sm dark:text-gray-600">
              <span>Difficulty:</span>
              <span>{difficulty}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400 dark:text-gray-600">
              <span>Due Date:</span>
              <span>{dueDate}</span>
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-3">
            <button onClick={() => handleViewAssignemnt({description, title, difficulty, dueDate, thumbnailUrl, marks,})} className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white">
              View
            </button>
            <button
              onClick={() => handleUpdateAssignment({_id, title, dueDate, difficulty, description, thumbnailUrl,})}
              className="btn btn-sm bg-gray-700 hover:bg-gray-800 text-white"
            >
              Update
            </button>
            <button
              onClick={() => handleDeleteAssingment(email, _id)}
              className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </article>

    </>
  );
};

export default DisplayAssignments;
