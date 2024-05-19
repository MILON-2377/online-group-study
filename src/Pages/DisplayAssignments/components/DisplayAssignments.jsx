import Swal from "sweetalert2";
import useAuthProvider from "../../../AuthProvider/useAuthProvider";
import axios from "axios";

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

  return (
    <article className="flex flex-col bg-gray-900 dark:bg-gray-50">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-500"
          src="https://source.unsplash.com/200x200/?fashion?1"
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline text-violet-400 dark:text-violet-600"
        >
          <span className="mr-10">{title}</span>
        </a>

        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {description}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-white text-[16px] dark:text-gray-600">
          <span>Difficulty</span>
          <span>{difficulty}</span>
        </div>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400 dark:text-gray-600">
          <span>Due Date</span>
          <span>{dueDate}</span>
        </div>
        <div className="w-full flex items-center justify-between gap-5 mt-5 ">
          <button className="btn">View Assignment</button>
          <button className="btn">Update</button>
          <button
            onClick={() => handleDeleteAssingment(email, _id)}
            className="btn"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default DisplayAssignments;
