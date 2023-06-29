import Navbar from "./navbar";
import Foto from "./../assets/icons/Foto.jpeg";
function Content() {
    return (
        <>
            <Navbar></Navbar>
            <div className="p-[10px] md:p-[50px] lg:p-[50px] bg-black text-white">
                <div className="flex flex-wrap">
                    <div className="justify-center flex bg-[#181823] w-full sm:w-1/1 md:w-1/2 lg:w-1/2 ">
                        <img className="p-[40px] rounded-[59px] h-[400px]" src={Foto} alt="" />
                    </div>
                    <div id="sobremi" className="block mt-auto mb-auto text-center sm:w-1/1 md:w-1/2 lg:w-1/2">
                        <h1 className="font-bold mt-[20px]">Mi nombre es Manuela Salazar </h1>
                        <h2>soy de colombia</h2>
                        <h3>soy profecional en Mercadeo y Publicidad , actualmente estudiante de programación, en el paso de mi vida laborar e desarrollado buenas habilidades de colaboración dentro de un equipo productivo</h3>
                    </div>
                </div>

                <div id="proyectos" className=" flex flex-wrap">
                    <div className="mt-[20px] text-[20px] font-bold w-full sm:w-1/1 md:w-1/1 lg:w-1/1">
                        <h2>Proyectos</h2>
                    </div>

                    <div className="sm:w-1/1 md:w-1/3 lg:w-1/3 p-[10px]">
                        <p className="text-[100px]">01</p>
                        <p className="text-[20px] text-[#8def8d]">Rick and Morty</p>
                        <p>Este proyecto se realizo con el propósito de crear usuarios con implementación de modal. El desafió que se me presento en este proyecto es la lógica de paginación por bloques con el uso de tegnología como React, TailwindCSS, JavaScript.</p>
                        <a target='_blank' rel="noreferrer" href="https://github.com/maslazar/GEN-26RickandMorty">LINK</a>
                    </div>
                    <div className="sm:w-1/1 md:w-1/3 lg:w-1/3 p-[10px]">
                        <p className="text-[100px]">02</p>
                        <p className="text-[20px] text-[#ffff78]">Pokedex</p>
                        <p>Este proyecto se realizo con el propósito de crear rutas, una configuración de estado global, maqueado y funcionalidad de home. El desafió que se me presento en este proyecto es la lógica de paginación por bloques con el uso de tegnología como React, TailwindCSS, JavaScript.</p>
                        <a target='_blank' rel="noreferrer" href="https://github.com/maslazar/Pokemon-G26">LINK</a>
                    </div>
                    <div className="sm:w-1/1 md:w-1/3 lg:w-1/3 p-[10px]">
                        <p className="text-[100px]">03</p>
                        <p className="text-[20px] text-[#ed8181]">Carrito de compras</p>
                        <p>Este proyecto se realizo con el propósito de crear la lógica carrito de compras con las propiedades del DOM y eventos. El desafió que se me presento en este proyecto fue el redireccionamiento de productos con el uso de tegnología como DOM, JavaScript  .</p>
                        <a target='_blank' rel="noreferrer" href="https://github.com/maslazar/LicorStore">LINK</a>
                    </div>

                </div>

                <div id="contacto" className="mt-[30px]">
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
