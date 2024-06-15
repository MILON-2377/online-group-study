import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow-lg">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Oops! Page not found</h2>
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
