import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateAssignment = () => {
  const { register, handleSubmit, reset } = useForm();

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
                    {...register("userName", { required: true })}
                    placeholder="First Name"
                    className="input text-black w-full "
                  />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input text-black w-full "
                  />
                </div>
              </div>

              <div className="flex items-center w-full gap-4 ">
                <div className="flex flex-col w-full gap-1 ">
                  <label htmlFor="Title" className="text-sm">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("Title", { required: true })}
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
                  placeholder="Description"
                  className="input w-full text-black"
                />
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

{
  /* <div className="p-6 w-full h-screen bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
      <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <form
          onSubmit={handleSubmit((data) => {
            hanldeCreateAssignment(data);
          })}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  {...register("userName", {required: true})}
                  className="w-full px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {required: true})}
                  placeholder="userEmail"
                  className="w-full mt-1 rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Title
                </label>
                <input
                  type="text"
                  {...register("Title", {required: true})}
                  placeholder="Title"
                  className="w-full mt-1 rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Descriptions"
                  {...register("Description", {required: true})}
                  className="w-full rounded-md mt-1 px-3 py-2 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  placeholder="imageURL"
                  {...register("thumbnailImage", {required: true})}
                  className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                />
              </div>

              <div className=" col-span-full flex flex-col sm:col-span-2 ">
                <span className="mt-1">Pick Difficulty</span>
                <select {...register("difficulty", {required: true})} className="px-3 py-[10px] rounded-md text-slate-400">
                  <option disabled selected>
                    Pick Difficulty
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Heard</option>
                </select>
              </div>

              <div className="col-span-full mt-1 sm:col-span-2">
                <label htmlFor="address" className="text-sm mt-1 ">
                  Due date
                </label>
                <input
                  type="date"
                  placeholder="date"
                  {...register("dueDate", {required: true})}
                  className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <button className="btn btn-secondary ">Add Assignment</button>
        </form>
      </section>
    </div> */
}
