import Navbar from "./navbar";

function Content() {
    return (
        <>
            <Navbar></Navbar>
            <div className="p-[10px] md:p-[50px] lg:p-[50px] bg-black text-white">
                <div className="flex flex-wrap">
                    <div className="justify-center flex bg-[#181823] w-full sm:w-1/1 md:w-1/2 lg:w-1/2 ">
                        <img className="p-[40px] rounded-[59px] h-[400px]" src="./src/assets/icons/Foto.jpeg" alt="" />
                    </div>
                    <div className="block mt-auto mb-auto text-center sm:w-1/1 md:w-1/2 lg:w-1/2">
                        <h1 className="font-bold mt-[20px]">Mi nombre es Manuela Salazar </h1>
                        <h2>soy de colombia</h2>
                        <h3>soy profecional en Mercadeo y Publicidad , actualmente estudiante de programación, en el paso de mi vida laborar e desarrollado buenas habilidades de colaboración dentro de un equipo productivo</h3>
                    </div>
                </div>

                <div className=" flex flex-wrap">
                    <div className="mt-[20px] text-[20px] font-bold w-full sm:w-1/1 md:w-1/1 lg:w-1/1">
                        <h2>Proyectos</h2>
                    </div>

                    <div className="sm:w-1/1 md:w-1/3 lg:w-1/3 p-[10px]">
                        <p className="text-[100px]">01</p>
                        <p className="text-[20px] text-[#8def8d]">Rick and Morty</p>
                        <p>En este proyecto veremos en que galaxia vive cada uno de los personajes de Rick and Morty.</p>
                        <a target='_blank' rel="noreferrer" href="https://github.com/maslazar/GEN-26RickandMorty">LINK</a>
                    </div>
                    <div className="sm:w-1/1 md:w-1/3 lg:w-1/3 p-[10px]">
                        <p className="text-[100px]">02</p>
                        <p className="text-[20px] text-[#ffff78]">Pokemon</p>
                        <p>Nos ´permite buscar pokemones y ver toda su información.</p>
                        <a target='_blank' rel="noreferrer" href="https://github.com/maslazar/Pokemon-G26">LINK</a>
                    </div>
                    <div className="sm:w-1/1 md:w-1/3 lg:w-1/3 p-[10px]">
                        <p className="text-[100px]">03</p>
                        <p className="text-[20px] text-[#9a0000]">Carrito de compras</p>
                        <p>sistema con funcion de carrito de compras para una licorera.</p>
                        <a target='_blank' rel="noreferrer" href="https://github.com/maslazar/LicorStore">LINK</a>
                    </div>

                </div>

                <div className="mt-[30px]">
                    <div>
                        <h2 className="text-[20px] font-bold">contacto</h2>
                        <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B573158111531&text&type=phone_number&app_absent=0" ><img src="./src/assets/icons/phone.png" alt="" /></a>

                        <a target='_blank' rel="noreferrer" href="https://github.com/maslazar"><img src="./src/assets/icons/github.png" alt="" /></a>
                        <p className="flex">
                            <img src="./src/assets/icons/gmail.png" alt="" className="mr-[10px]" />maslazar1995@gmail.com
                        </p>
                        <h3 className="text-center mt-[10px]">Desarrollado por <strong>Manuela Salazar Becerra</strong></h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
