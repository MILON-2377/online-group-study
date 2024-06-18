import { NavLink } from "react-router-dom";
import useAuthProvider from "../../../AuthProvider/useAuthProvider";
import toggleModeChange from "../../../Hooks/ToggleModeChange/togglingModeChange";

const Navbar = () => {
  const { user, userLogOut, isDarkeMode, setIsDarkMode } = useAuthProvider();

  const handleUserLoggOut = () => {
    userLogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggleModeChange = () => {
    setTimeout(() => {
      setIsDarkMode(!isDarkeMode);
    }, 800);
    toggleModeChange(isDarkeMode);
  };

  return (
    <div
      className={
        isDarkeMode ? "navbar bg-black text-white" : "navbar bg-base-100"
      }
    >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">AssignMent</a>
      </div>
      <div className="flex items-center gap-3 justify-center w-full">
        <span>{isDarkeMode ? "Dark Mode" : "Light Mode"}</span>
        <input
          onClick={handleToggleModeChange}
          type="checkbox"
          className="toggle"
        />
      </div>
      <div className="flex-none gap-2">
        <div className=" hidden lg:flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border border-blue-400 rounded-md font-semi px-3 py-2 "
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/assignemnts"
            className={({ isActive }) =>
              isActive
                ? "border border-blue-400 rounded-md font-semi px-3 py-2 "
                : ""
            }
          >
            assingments
          </NavLink>
          <NavLink
            to="/createassignment"
            className={({ isActive }) =>
              isActive
                ? "border border-blue-400 rounded-md font-semi px-3 py-2 "
                : ""
            }
          >
            create assignments
          </NavLink>
          <NavLink
            to="/pendingAssignments"
            className={({ isActive }) =>
              isActive
                ? "border border-blue-400 rounded-md font-semi px-3 py-2 "
                : ""
            }
          >
            pending assignments
          </NavLink>
        </div>
        <div>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] grid gap-1 py-5 px-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? " text-white rounded-md font-semibold bg-slate-500 "
                        : " px-3 py-1 hover:bg-gray-200 rounded-md"
                    }
                  >
                    <li>Profile</li>
                  </NavLink>
                  <NavLink
                    to="/setting"
                    className={({ isActive }) =>
                      isActive
                        ? " text-white rounded-md font-semibold bg-slate-500 "
                        : " px-3 py-1 hover:bg-gray-200 rounded-md "
                    }
                  >
                    <li>Settings</li>
                  </NavLink>

                  <li
                    onClick={handleUserLoggOut}
                    className=" px-3 py-1 hover:bg-gray-200 rounded-md "
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn bg-slate-700 text-white font-bold "
              >
                LogIn
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
