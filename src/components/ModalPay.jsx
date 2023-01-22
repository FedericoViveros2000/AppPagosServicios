import React, {useState} from "react";
import { useFetch } from "../hooks/useFetch";
import FormQueryDebt from "./FormQueryDebt.jsx";

const ModalPay = ({showModal, servicio}) => {

    const [queryDebt, setQueryDebt] = useState({
        show: false,
        options: [],
        services: {}
    });

    let {isFetching, data} = useFetch('servicioDetalle', 'id_servicio', servicio.idServicio);

    const hideModal = () => showModal(false);

    const handleQueryDebt = (option) =>{
        console.log(option);
        console.log(servicio);
        /* console.log({
            ...option,
            ...servicio
        }); */
        setQueryDebt({
            show: true,
            options: option,
            services: servicio
        })
    }

    if(isFetching) return <p>Cargando</p>;

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-end fixed z-20 bottom-0">
                <div className="bg-slate-300 p-5 rounded-lg w-full h-1/2">
                    <div className="flex justify-end w-full mb-3">
                        <p className="cursor-pointer" onClick={hideModal}>X</p>
                    </div>
                    <div className="w-full">
                        <p className="text-primary text-lg">Elije el servicio que queres pagar</p>
                    </div>
                    <ul>
                        {data.map((option, index) => <li className="mt-3" key={index} onClick={() => handleQueryDebt(option)}>{option.nombre_campo}</li>)}
                    </ul>
                </div>
            </div>
            {queryDebt.show
                && 
                <FormQueryDebt
                    options={queryDebt}
                />
            }
        </>
    )
}

export default ModalPay;