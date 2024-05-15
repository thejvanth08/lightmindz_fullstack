import { Logo, Profile } from "../../components";

const SelfCare = () => {
  return (
    <div className="px-2.5 py-2 pb-20">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold text-center">
          Your Self-Care Tools
        </h1>
        <section className="mt-3"></section>
      </div>
    </div>
  );
}
export default SelfCare;