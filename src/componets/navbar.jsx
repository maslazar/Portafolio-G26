import { useState } from "react";

function Navbar() {
  const [value, setValue] = useState(false);
  const viewMenu = () => {
    setValue(!value);
  }


  return (
    <>
      <div className="bg-black flex">
        <div className="p-[20px]">
          <h1 className="h-[24px] text-gray-50  ">Manuela SB</h1>
        </div>

        <div className={`lg:block md:block ml-auto pr-[20px] bg-[#181823] ${value} ` + (value ? 'block' : 'hidden')}>
          <div className={"navbar " + (value ? 'inline-grid' : 'flex' )}>
            <a className="text-white hover:text-[#5221E6]" href="#">Inico</a>
            <a className="text-white hover:text-[#5221E6]" href="#">Sobre mi</a>
            <a className="text-white hover:text-[#5221E6]" href="#">proyectos</a>
            <a className="text-white hover:text-[#5221E6]" href="#">contacto</a>
          </div>

        </div>
        <button onClick={viewMenu} className="ml-auto pr-[20px] block sm:hidden">
          <img src="./src/assets/icons/menu.png" alt="" />
        </button>

      </div>
    </>
  );
}

export default Navbar;
