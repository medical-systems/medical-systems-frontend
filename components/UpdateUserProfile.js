export default function UserProfile() {
    return (
        <>
            <div className="w-[1200px] mx-auto">
                <div className=" flex flex-col mx-auto mt-8 pb-12 w-[1000px] shadow-lg">
                    <h1 className="flex justify-center items-center text-2xl font-semibold mb-12 h-[60px] text-white bg-sky-950">Update User Profile</h1>
                    <form>
                        <div className="flex flex-wrap gap-y-16">
                            <div className="w-1/2 flex flex-col items-center ">
                                <label className="block text-sky-900 font-bold mb-2">First Name:</label>
                                <input placeholder="John" className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Last Name:</label>
                                <input placeholder="Doe" className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Email:</label>
                                <input placeholder="johndoe@gmail.com" className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Password:</label>
                                <input placeholder="**********" className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Number Phone:</label>
                                <input placeholder="+977589724136" className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Gender:</label>
                                <input placeholder="Male" className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Date of Birth:</label>
                                <input placeholder="9/01/1985" className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Insurance:</label>
                                <input placeholder="None" className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>

                        </div>
                        <div className="flex h-[100px] items-center justify-center">
                            <button className="w-32 h-10 bg-sky-950 border border-blue-500 rounded-md text-white">
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}