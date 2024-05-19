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
    <div className="flex items-center justify-center">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit((data) => {
            handleCreateUser(data);
          })}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
              className="input input-bordered"
              required
            />
          </div>
          {registerError ? (
            <span className="text-red-500 font-sans ">{registerError}</span>
          ) : (
            ""
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="flex px-8 -mt-4 mb-4 gap-2">
          <p>Do not have an account</p>
          <Link className=" font-bold hover:cursor-pointer text-blue-600 hover:underline ">
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
