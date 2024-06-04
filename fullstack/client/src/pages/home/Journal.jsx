import { Logo, Profile } from "../../components";

const Journal = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold text-center lg:text-2xl">
          Daily Journal
        </h1>
        <section className="mt-3 max-w-[800px] mx-auto md:max-w-[700px] lg:mt-8">
          <textarea
            name=""
            placeholder="Tell us about your day..."
            className="bg-violet-100 w-full h-[400px] p-3 rounded-lg outline-none lg:h-[450px] lg:p-6"
          ></textarea>
          <button
            type="submit"
            className="block bg-violet-500 text-white px-3 py-1 mx-auto rounded-lg mt-2"
          >
            Submit
          </button>
        </section>
      </div>
    </div>
  );
};
export default Journal;
