import { Logo, Profile } from "../../components";

const Journal = () => {
  return (
    <div className="px-2.5 py-2 pb-20">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold text-center">Daily Journal</h1>
        <section className="mt-3">
          <textarea name="" rows={10} cols={1000}
            className="bg-violet-100 p-3 rounded-lg outline-none"></textarea>
          <button>Submit</button>
        </section>
      </div>
    </div>
  );
};
export default Journal;
