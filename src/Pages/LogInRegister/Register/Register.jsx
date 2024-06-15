import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthProvider from "../../../AuthProvider/useAuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUserWithEmail } = useAuthProvider();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [registerError, setRegisteError] = useState("");

  const handleCreateUser = ({ email, password }) => {
    createUserWithEmail(email, password)
      .then(() => {
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setRegisteError(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-900">
      <div className="card shadow-2xl bg-white w-full max-w-sm md:max-w-md rounded-lg">
        <form
          onSubmit={handleSubmit((data) => handleCreateUser(data))}
          className="card-body px-6 py-8 md:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Register
          </h2>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>
          {registerError && (
            <span className="text-red-500 font-sans mt-2">{registerError}</span>
          )}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>
        <div className="flex items-center -mt-3 px-7 mb-6 ">
          <p className="text-gray-600">Already have an account?</p>
          <Link
            to="/login"
            className="ml-2 font-semibold text-blue-600 hover:underline"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
