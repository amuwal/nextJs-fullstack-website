const AboutUser = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">
          About{" "}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-yellow-400 to-red-500">
            Jhon
          </span>
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
          Edit
        </button>
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula,
        neque in lacinia luctus, odio velit suscipit augue, at lacinia est
        libero non enim.
      </p>
    </div>
  );
};

export default AboutUser;
