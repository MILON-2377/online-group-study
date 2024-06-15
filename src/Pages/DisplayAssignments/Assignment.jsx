import { useEffect, useState } from "react";
import useAuthProvider from "../../AuthProvider/useAuthProvider";
import DisplayAssignments from "./components/DisplayAssignments";

const Assignment = () => {

    const {user} = useAuthProvider();
    const [assignmentsData, setAssignmentsData] = useState([]);

    useEffect(() => {
        
        fetch(`http://localhost:5000/assignments`)
        .then(res => res.json())
        .then(data => {
            setAssignmentsData(data);
        })
    },[])


    // console.log(assignmentsData)

  return (
    <div className=" h-screen">
      <div className="w-full flex items-center gap-4 flex-col justify-center mt-10 ">
        <h1 className="text-3xl text-white ">
          Choose how do you see the assignments
        </h1>
        <select className="px-3 py-3 bg-gray-100 rounded-md text-slate-600 font-serif ">
          <option disabled selected value="Pick Up Assingment difficulty lavel">
            Pick Up Assingment difficulty lavel
          </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className=" lg:w-[90%] w-[95%] mx-auto mt-6 ">
        <section className="  dark:bg-gray-100 text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl text-black font-bold">Choose the assignments</h2>
              <p className="font-serif text-sm text-black dark:text-gray-600">
                Choose the AssignMent
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {
                assignmentsData?.map(item => <DisplayAssignments key={item._id} assignmentData = {item} ></DisplayAssignments>)
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Assignment;
