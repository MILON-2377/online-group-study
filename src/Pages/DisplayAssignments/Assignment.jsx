import { useEffect, useState } from "react";
import useAuthProvider from "../../AuthProvider/useAuthProvider";
import DisplayAssignments from "./components/DisplayAssignments";
import useDataLoading from "../../Hooks/SubmittedAssignmnetDataLoading/useDataLoading";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import { refFromURL } from "firebase/database";

const Assignment = () => {
  const { user } = useAuthProvider();
  const [assignmentsData, setAssignmentsData] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, error, refetch } = useDataLoading(
    `/assignments?pages=${currentPage}`,
    "assignmnetsData",
    user?.email
  );

  useEffect(() => {
    const fetchData = async () => {
      const totalPages = await Math.ceil(parseInt(data?.total) / 8);
      setPages(Array.from({ length: totalPages }, (_, i) => i + 1));
    };

    // console.log(pages);

    if (data) {
      setAssignmentsData(data?.assignmentsData);
      fetchData();
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [currentPage]);

  const pagesHandle = (id) => {
    // console.log(id);
    setCurrentPage(() => id);

    // console.log(currentPage);
  };

  const nextPagesHandle = () => {
    if (pages.length - 1 > currentPage) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
    }
  };

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <>
      <div className="z-10 mb-20">
        <div className="w-full flex items-center gap-4 flex-col justify-center mt-10 ">
          <h1 className="text-3xl text-white ">
            Choose how do you see the assignments
          </h1>
          <select className="px-3 py-3 bg-gray-100 rounded-md text-slate-600 font-serif ">
            <option
              disabled
              selected
              value="Pick Up Assingment difficulty lavel"
            >
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
                <h2 className="text-3xl text-black font-bold">
                  Choose the assignments
                </h2>
                <p className="font-serif text-sm text-black dark:text-gray-600">
                  Choose the AssignMent
                </p>
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {assignmentsData?.map((item) => (
                  <DisplayAssignments
                    key={item._id}
                    assignmentData={item}
                  ></DisplayAssignments>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* pagination */}
      <div className="bg-pink-400 gap-2 w-full py-3 fixed bottom-0 flex items-center justify-center ">
        <button onClick={handlePreviousPage} className="btn">
          Previous
        </button>
        <div className="flex items-center gap-1">
          {pages?.map((item, index) => (
            <>
              <button
                onClick={() => pagesHandle(index)}
                key={index}
                className={
                  currentPage === index
                    ? "btn btn-active bg-yellow-500 text-white"
                    : " btn btn-active "
                }
              >
                {index + 1}
              </button>
            </>
          ))}
        </div>
        <button onClick={nextPagesHandle} className="btn">
          Next
        </button>
      </div>
    </>
  );
};

export default Assignment;
