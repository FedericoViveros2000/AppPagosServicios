import { useEffect, useState } from "react";
import btnBack from "../assets/icons/btnBack.svg";
import iconSearch from "../assets/icons/iconSearch.svg";
import {Link} from "react-router-dom";
import ModalPay from "./ModalPay.jsx";

const Home = () => {

   const [options, setOptions] = useState([
    "A MAS B",
    "ATALAYA INMOBILIARIA",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ESSAP",
    "IMPUESTO INMOBILIARIO"
   ])

   const [copyOptions, setCopyOptions] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [search, setSearch] = useState('');

   const handleShowModal = () => {
    setShowModal(true);
   }
   const filterSearch = (options, word) => options.filter(option => option.toLowerCase().split(' ').join('').includes(word.toLowerCase().split(' ').join('')));

   const handleInput = (e) => {
    setSearch(e.target.value);
    const data = filterSearch(options, e.target.value);
    setCopyOptions(data);
   }

   useEffect(() => {
    setCopyOptions(options);
   }, [])

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
                    <input type="text" value={search} onChange={handleInput} className="w-full bg-transparent border-0 outline-none" placeholder="Buscar"/>
                </div>
                <div className="mt-3 max-h-[90%] overflow-y-auto leading-10">
                    {
                        copyOptions.map((option, index) => <p className="cursor-pointer uppercase" key={index} onClick={handleShowModal}>{option}</p>)
                    }
                </div>
            </form>
            {showModal && <ModalPay showModal={setShowModal}/>}
        </div>
    )
}

export default Home;