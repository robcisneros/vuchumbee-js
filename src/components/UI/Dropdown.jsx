import { BiChevronDown } from "react-icons/bi";
const Dropdown = () => {
  return (
    <div className="w-full font-medium h-40 pt-24 flex justify-center flex-nowrap">
      <div className="bg-orange-500 w-full sm:w-1/2 p-2 flex items-center justify-between rounded ">
        Selecciona status
        <BiChevronDown size={30} />
      </div>
      <ul className="bg-white mt-2">
        <li className="p-2 text-sm hover:bg-rosaFuerte">Todos</li>
        <li className="p-2 text-sm hover:bg-rosaFuerte">Disponible</li>
        <li className="p-2 text-sm hover:bg-rosaFuerte">Por pedido</li>
        <li className="p-2 text-sm hover:bg-rosaFuerte">Agotado</li>
      </ul>
    </div>
  );
};
export default Dropdown;
