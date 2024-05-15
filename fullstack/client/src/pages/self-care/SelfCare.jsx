import { Logo, Profile } from "../../components";
import Tool from "../../components/Tool";
import { toolsItems } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const SelfCare = () => {
  const navigate = useNavigate();
  
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
        <section className="mt-3">
          { toolsItems.map((item) => (
            <Tool key={item.name} {...item}></Tool>
          )) }
        </section>
      </div>
    </div>
  );
}
export default SelfCare;