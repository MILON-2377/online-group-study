import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import updateAssingmenArr from "../../../Hooks/UpdateAssingment/updateAssignment";
import useAxiosSecureApi from "../../../Hooks/AxiousSecureApi/useAxiosSecureApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateAssignment = () => {

  const { register, handleSubmit, reset } = useForm();
  const [updateAssignment, setUpdateAssignment] = useState();
  const navigate = useNavigate();

  const axiosSecureApi = useAxiosSecureApi();

  useEffect(() => {
    const updateAssingDetails = updateAssingmenArr();
    setUpdateAssignment(updateAssingDetails);
  }, []);

  const onSubmit = (data) => {
    const id = updateAssignment?._id;
    axiosSecureApi.put("/updateAssignment", {...data, id})
    .then(res => {
        // console.log(res);
        if(res.data.modifiedCount > 0){
            navigate("/assignemnts");
            Swal.fire({
                title: "Success!",
                text: "Assignment updated successfully.",
                icon: "success"
              });
        }
    })
    .catch(error => {
        console.log(error);
    })


    reset();
  };

//   console.log(updateAssignment);

  return (
    <div>
      <section className="p-6 bg-gray-800 h-screen dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container mx-auto space-y-8"
        >
          <fieldset className="grid grid-cols-1 lg:w-[65%] gap-6 p-6 rounded-md shadow-lg bg-gray-900 dark:bg-gray-50">
            <div className="flex flex-col gap-4 w-full ">
              
              <div className="flex items-center w-full gap-4 ">
                <div className="flex flex-col w-full gap-1 ">
                  <label htmlFor="Title" className="text-sm">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("Title", { required: true })}
                    defaultValue={updateAssignment?.title}
                    placeholder="Title"
                    className="input w-full text-black  "
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="dueDate" className="text-sm">
                    Due Date
                  </label>
                  <input
                    type="date"
                    {...register("dueDate", { required: true })}
                    defaultValue={updateAssignment?.dueDate || "2024-05-12"}
                    className="input text-black w-full "
                  />
                </div>
              </div>

              <div className="flex items-center w-full gap-4 ">
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="thumbnailImage" className="text-sm">
                    Thumbnail URL
                  </label>
                  <input
                    type="text"
                    {...register("thumbnailImage", { required: true })}
                    defaultValue={updateAssignment?.thumbnailUrl || ""}
                    placeholder="Thumbnail URL"
                    className="input w-full text-black "
                  />
                </div>

                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="difficulty" className="text-sm text-black">
                    Difficulty
                  </label>
                  <select
                    {...register("difficulty", { required: true })}
                    defaultValue={updateAssignment?.difficulty || ""}
                    className="input w-full text-black "
                  >
                    <option disabled defaultValue className="text-black">
                      Pick Difficulty
                    </option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>

              <div className="w-full flex flex-col gap-1">
                <label htmlFor="Description" className="text-sm">
                  Description
                </label>
                <input
                  type="text"
                  {...register("Description", { required: true })}
                  defaultValue={updateAssignment?.description || "" }
                  placeholder="Description"
                  className="input w-full text-black"
                />
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Update Assignment
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateAssignment;
