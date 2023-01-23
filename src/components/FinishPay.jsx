import { useParams, Link } from "react-router-dom";
import successPay from "../assets/icons/successPay.svg";
import { useUpdate } from "../hooks/useUpdate.jsx";
import Loader from "./Loader.jsx";

const FinishPay = () => {

    let {id} = useParams();

    let {data, isFetching} = useUpdate('comprobante_detalle', {pagado: 1}, 'numero_referencia_comprobante', id);

    if (isFetching) return <Loader/>

    return (
        <div className="w-full h-screen flex flex-col justify-between p-3">
            <div className="mt-10">
                <figure className="w-1/2 m-auto">
                    <img src={successPay} alt="" className="object-cover w-full "/>
                </figure>
                <figcaption className="text-xl text-center text-primary font-bold mt-5">El pago del comprobante numero {id} ha sido exitoso!</figcaption>
            </div>
            <div>
                <button className="btn btn-primary"><Link to={`/home`}>Volver al Inicio</Link></button>
                <button className="btn bg-slate-300 mt-3">Ver comprobante</button>
            </div>
        </div>
    )
}

export default FinishPay;