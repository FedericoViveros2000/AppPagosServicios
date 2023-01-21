import React from "react";

const ModalPay = ({showModal}) => {

    const hideModal = () => showModal(false)
    
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center fixed z-20 top-0 px-5">
            <div className="bg-slate-300 p-5 rounded-md w-full">
                <div className="flex justify-end w-full mb-3">
                    <p className="cursor-pointer" onClick={hideModal}>Cerrar</p>
                </div>
                <form className="w-full">
                    <label htmlFor="" className="block">Nro de Nis</label>
                    <input type="text" className="p-2 my-3 w-full rounded-md outline-none" placeholder="Introduzca su numero de NIS" />
                    <label htmlFor="" className="block">Nro de Nis</label>
                    <input type="text" className="p-2 my-3 w-full rounded-md outline-none" placeholder="Introduzca su numero de NIS" />
                    <label htmlFor="" className="block">Nro de Nis</label>
                    <input type="text" className="p-2 my-3 w-full rounded-md outline-none" placeholder="Introduzca su numero de NIS" />
                    <button className="btn btn-primary mt-2" onClick={(e) => e.preventDefault()}>Consultar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalPay;