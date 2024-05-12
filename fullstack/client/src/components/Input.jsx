import { forwardRef } from "react";

// forwardRef to avoid error while using react-hook-form
// can't apply ref directly on react component
const Input = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      className="bg-violet-200 font-semibold w-full px-3 py-1.5 my-1.5 outline-none rounded-lg placeholder:text-gray-500"
      ref={ref}
    />
  );
});
export default Input;