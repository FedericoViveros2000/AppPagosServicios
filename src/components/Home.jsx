import btnBack from "../assets/icons/btnBack.svg";
import iconSearch from "../assets/icons/iconSearch.svg";
import {Link} from "react-router-dom";
import ModalPay from "./ModalPay.jsx";
import { useState } from "react";
import NavBar from "./NavBar.jsx";
import { useOptions } from "../hooks/useOptions.jsx";
import Loader from "./Loader.jsx";

const Home = () => {
    const [servicio, setServicio] = useState({
        idServicio: 0,
        servicio: []
    });

    let {isFetching, form, handleInput, options, error} = useOptions();
    let [showModal, setShowModal] = useState(false);

    if (isFetching) return <Loader/>

    const handleDetail = (idServicio, servicio) => {
        setServicio({
            idServicio,
            servicio
        })
        setShowModal(true)
    }

    return(
        <div className="h-screen bg-primary ">
            <section className="w-full text-white">
                <nav className="w-full flex  p-3">
                    <figure className="mr-3">
                        <Link to="/">
                            <img src={btnBack} alt="Boton para volver atras"/>
                        </Link>
                    </figure>
                    <p className="text-white">Pagos</p>
                </nav>
                <p className="text-lg text-center p-3">Que querés pagar hoy?</p>
            </section>
            <form className="w-full h-[85%] absolute bottom-0 p-3 rounded-t-lg bg-white">
                <div className="flex items-center p-2 bg-grey rounded-md">
                    <figure className="mr-2">
                        <img src={iconSearch} alt="" />
                    </figure>
                    <input type="text" value={form.search} onChange={(e) => handleInput(e.target.value)} className="w-full bg-transparent border-0 outline-none" placeholder="Buscar"/>
                </div>
                <div className="mt-3 max-h-[87%] md:max-h-[80%] overflow-y-auto leading-10">
                    {
                        options.map(({servicio, id}) => <p className="cursor-pointer uppercase" key={id} onClick={() => handleDetail(id, servicio)}>{servicio}</p>)
                    }
                </div>
            </form>
            {
                showModal 
                && 
                <ModalPay 
                    servicio={servicio}
                    showModal={setShowModal}
                />
            }
            {/* <NavBar/> */}
        </div>
    )
}

export default Home;