import { useForm } from "react-hook-form";
import useAuthProvider from "../../../AuthProvider/useAuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { logInUser, logInUserWithGoogle } = useAuthProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const handleUserLogIn = ({ email, password }) => {
    logInUser(email, password)
      .then(() => {
        console.log(location.state);
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   login wiht google
  const handleGoogleLogIn = () => {
    logInUserWithGoogle()
      .then(() => {
        console.log(location.state);
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white">
      <div className="hero-content flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 hidden ">
          <img
            src="https://plus.unsplash.com/premium_photo-1669665828032-4c3d7fe3363f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="card bg-white shadow-lg w-full max-w-md lg:w-[512px] rounded-lg px-6 py-8 lg:py-12 lg:ml-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Login Now!
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  min: 6,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                })}
                placeholder="Enter your password"
                className="input input-bordered text-black w-full"
                required
              />
            </div>
            <div className="form-control">
              <button
                onClick={handleUserLogIn}
                type="submit"
                className="btn btn-primary w-full"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-secondary w-full py-2 bg-gray-200 text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login with Google
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-blue-600 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

{
  /* <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit((data) => {
              handleUserLogIn(data);
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="px-7 -mt-4 mb-4">
            <button
              onClick={handleGoogleLogIn}
              className="px-3 w-full text-center bg-gray-200 text-blue-500 mb-3 rounded-md "
            >
              Google
            </button>
          </div>
          <div className="flex px-7 -mt-4 mb-4 gap-2">
            <p>Do not have an account</p>
            <Link to='/register' className=" font-bold hover:cursor-pointer text-blue-600 hover:underline ">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div> */
}
