const BasicInfo = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md m-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold">Name</p>
              <p className="text-black">John Doe</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold">Email</p>
              <p className="text-black">johndoe@example.com</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-gray-500 font-semibold">Phone</p>
              <p className="text-black">123-456-7890</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  };

export default BasicInfo;
