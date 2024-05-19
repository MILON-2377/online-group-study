import { useForm } from "react-hook-form";
import useAuthProvider from "../../../AuthProvider/useAuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { logInUser, logInUserWithGoogle } = useAuthProvider();
  const { register, handleSubmit } = useForm();
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
    <div className="hero min-h-screen bg-base-200">
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
    </div>
  );
};

export default LogIn;
