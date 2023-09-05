export default function UserProfile() {
    return (
      <div className="w-3/4 mx-auto mt-8">
        <div className="flex flex-col mx-auto pb-12 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center py-4 bg-sky-950 text-white">
            User Profile
          </h1>
          <div className="flex flex-wrap gap-y-8 p-8">
            <div className="w-1/2">
              <label className="block text-sky-900 font-bold mb-2">First Name:</label>
              <p className="text-sky-900">John</p>
            </div>
            <div className="w-1/2">
              <label className="block text-sky-900 font-bold mb-2">Last Name:</label>
              <p className="text-sky-900">Doe</p>
            </div>
            <div className="w-1/2">
              <label className="block text-sky-900 font-bold mb-2">Email:</label>
              <p className="text-sky-900">johndoe@example.com</p>
            </div>
            <div className="w-1/2">
              <label className="block text-sky-900 font-bold mb-2">Password:</label>
              <p className="text-sky-900">**********</p>
            </div>
            <div className="w-1/2">
              <label className="block text-sky-900 font-bold mb-2">Number Phone:</label>
              <p className="text-sky-900">+977589724136</p>
            </div>
            <div className="w-1/2">
              <label className="block text-sky-900 font-bold mb-2">Gender:</label>
              <p className="text-sky-900">Male</p>
            </div>
            <div className="w-1/2">
              <label className="block text-sky-900 font-bold mb-2">Date of Birth:</label>
              <p className="text-sky-900">9/01/1985</p>
            </div>
            <div className="w-1/2">
              <label className="block text-sky-900 font-bold mb-2">Insurance:</label>
              <p className="text-sky-900">None</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  