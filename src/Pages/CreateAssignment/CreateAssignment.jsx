import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateAssignment = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("http://localhost:5000/createassignment", { ...data })
      .then(() => {
        Swal.fire({
          title: "Assignment!",
          text: "You assignment store the database successfully!",
          icon: "success",
        });
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
      <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container mx-auto space-y-8"
        >
          <fieldset className="grid grid-cols-1 lg:w-[65%] gap-6 p-6 rounded-md shadow-lg bg-gray-900 dark:bg-gray-50">
            <div className="flex flex-col gap-4 w-full ">
              <div className="flex items-center w-full gap-4 ">
                <div className="flex flex-col w-full gap-1 ">
                  <label htmlFor="userName" className="text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("userName", { required: true, message: "You must have to fill up the name field" })}
                    placeholder="First Name"
                    className="input text-black w-full "
                  />
                  {errors.userName && (
                    <p className="mt-1 text-red-500">{errors.userName.message}</p>
                  )}
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true, message: "Email is required!!" })}
                    placeholder="Email"
                    className="input text-black w-full "
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center w-full gap-4 ">
                <div className="flex flex-col w-full gap-1 ">
                  <label htmlFor="Title" className="text-sm">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("Title", {
                      required: true,
                      message: "Title is required!",
                    })}
                    placeholder="Title"
                    className="input w-full text-black  "
                  />
                  {errors.Title && (
                    <p className="mt-1 text-red-500">{errors.Title.message}</p>
                  )}
                </div>

                <div className="col-span-1">
                  <label htmlFor="dueDate" className="text-sm">
                    Due Date
                  </label>
                  <input
                    type="date"
                    {...register("dueDate", {
                      required: true,
                      message: "Due Date is required!!",
                    })}
                    className="input text-black w-full "
                  />
                  {errors.dueDate && (
                    <p className="mt-1 text-red-500">
                      {errors.dueDate.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center w-full gap-4 ">
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="thumbnailImage" className="text-sm">
                    Thumbnail URL
                  </label>
                  <input
                    type="text"
                    {...register("thumbnailImage", {
                      required: true,
                      message: "thumnail image is url is required!!",
                    })}
                    placeholder="Thumbnail URL"
                    className="input w-full text-black "
                  />
                  {errors.thumnailImage && (
                    <p className="mt-1 text-red-500">
                      {errors.thumnailImage.message}
                    </p>
                  )}
                </div>

                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="difficulty" className="text-sm text-black">
                    Difficulty
                  </label>
                  <select
                    {...register("difficulty", {
                      required: true,
                      message: "You must have to select one of difficulty !!",
                    })}
                    className="input w-full text-black "
                  >
                    <option disabled defaultValue className="text-black">
                      Pick Difficulty
                    </option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                  {errors.difficulty && (
                    <p className="mt-1 text-red-500">
                      {errors.difficulty.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col gap-1">
                <label htmlFor="Description" className="text-sm">
                  Description
                </label>
                <input
                  type="text"
                  {...register("Description", { required: true, message: "You must have to write some description!!" })}
                  placeholder="Description"
                  className="input w-full text-black"
                />
                {errors.Description && (
                  <p className="mt-1 text-red-500">
                    {errors.Description.message}
                  </p>
                )}
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Add Assignment
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateAssignment;
