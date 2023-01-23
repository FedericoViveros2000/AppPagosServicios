import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "./Loader.jsx";

const ModalPay = ({showModal, servicio}) => {

    let {isFetching, data} = useFetch('servicioDetalle', 'id_servicio', servicio.idServicio);

    const hideModal = () => showModal(false);

    console.log(data);
    console.log(servicio);

    if(isFetching) return <Loader/>;

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-end fixed z-20 bottom-0">
                <div className="bg-slate-200 shadow-lg p-5 rounded-lg w-full h-1/2">
                    <div className="flex justify-end w-full">
                        <p className="cursor-pointer" onClick={hideModal}>X</p>
                    </div>
                    <div className="w-full">
                        <p className="text-primary text-xl my-5">Elije el servicio que queres pagar</p>
                    </div>
                    <ul>
                        {data.map((option, index) => <Link to={`/pay/${servicio.idServicio}`} key={index}><li className="mt-3 bg-slate-300 py-3 px-2 rounded-md text-lg" >{option.nombre_campo}</li></Link>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ModalPay;