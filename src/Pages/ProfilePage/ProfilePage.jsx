import useAuthProvider from "../../AuthProvider/useAuthProvider";

const ProfilePage = () => {

    const {user} = useAuthProvider();

    // console.log(user)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-40 sm:h-60"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center -mt-16 sm:-mt-24">
            <img
              className="w-24 h-24 rounded-full border-4 border-white"
              src={user?.photoURL}
              
            />
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="mt-2 text-gray-600">
             
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-md font-semibold">Location</h4>
              <p className="text-gray-600">New York, USA</p>
            </div>
            <div>
              <h4 className="text-md font-semibold">Contact</h4>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
