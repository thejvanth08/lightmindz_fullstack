import { useState } from "react";

const Problem = ({ name, problems, setProblems }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected((prev) => !prev);

    // Check if the problem name is already in the array
    const index = problems.indexOf(name);

    if (index !== -1) {
      // If it is, remove it
      const updatedProblems = problems.filter((problem) => problem !== name);
      setProblems(updatedProblems);
    } else {
      // If it's not, add it
      setProblems([...problems, name]);
    }
  };

  return (
    <span
      onClick={handleToggle}
      className={`inline-block font-bold px-3.5 py-2 mx-1.5 my-1 border-2 rounded-xl cursor-pointer select-none ${
        isSelected ? "bg-violet-600 text-white" : "border-violet-500"
      }`}
    >
      {name}
    </span>
  );
}
export default Problem;