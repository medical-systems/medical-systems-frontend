export default function UserProfile() {
    return (
        <>
        <div className="w-[1200px] mx-auto">
            <div className=" flex flex-col mx-auto mt-8 pb-12 w-[1000px] shadow-lg">
                <h1 className="flex justify-center items-center text-2xl font-semibold mb-12 h-[60px] text-white bg-sky-950">User Profile</h1>
                <div className="flex flex-wrap gap-y-16">
                    <div className="w-1/2 flex flex-col items-center ">
                        <label className="block text-sky-900 font-bold mb-2">First Name:</label>
                        <p className="text-sky-900">John</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <label className="block text-sky-900 font-bold mb-2">Last Name:</label>
                        <p className="text-sky-900">Doe</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <label className="block text-sky-900 font-bold mb-2">Email:</label>
                        <p className="text-sky-900">johndoe@example.com</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <label className="block text-sky-900 font-bold mb-2">Password:</label>
                        <p className="text-sky-900">**********</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <label className="block text-sky-900 font-bold mb-2">Number Phone:</label>
                        <p className="text-sky-900">+977589724136</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <label className="block text-sky-900 font-bold mb-2">Gender:</label>
                        <p className="text-sky-900">Male</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <label className="block text-sky-900 font-bold mb-2">Date of Birth:</label>
                        <p className="text-sky-900">9/01/1985</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <label className="block text-sky-900 font-bold mb-2">Insurance:</label>
                        <p className="text-sky-900">None</p>
                    </div>
                    
                </div>
            </div>
            </div>
        </>
    )
}