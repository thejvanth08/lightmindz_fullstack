import { Logo, Profile } from "../../components";
import Tool from "../../components/Tool";
import { toolsItems } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const SelfCare = () => {
  const navigate = useNavigate();
  
  return (
    <div className="px-2.5 py-2 pb-10">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <Profile></Profile>
      </div>
      <section className="mt-4 max-w-[1100px] mx-auto">
        <h1 className="text-xl font-bold text-center">
          Your Self-Care Tools
        </h1>
        <div className="w-full mt-3 lg:flex lg:flex-wrap lg:gap-y-3 lg:mt-10">
          { toolsItems.map((item) => (
            <Tool key={item.name} {...item}></Tool>
          )) }
        </div>
      </section>
    </div>
  );
}
export default SelfCare;