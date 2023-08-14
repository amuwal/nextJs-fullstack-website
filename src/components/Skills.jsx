const Skills = () => {
    const skills = ["NodeJs", "Typescript"]
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 m-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-full">
          Edit
        </button>
      </div>
      <ul className="list-disc ml-6">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
