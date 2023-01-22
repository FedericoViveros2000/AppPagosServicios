import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.jsx";
import Loader from "./Loader.jsx";

const PayDebt = () => {
    let {id} = useParams();

    let {data, isFetching} = useFetch('comprobante_detalle', 'numero_referencia_comprobante', id, []);

    if (isFetching && data === undefined) return <Loader/>

    return (
        <div className="bg-primary h-screen w-full">
            {data.length > 0 ?
            <ul className="leading-10">
                 <li>{data[0].cliente}</li>
                <li>Documento Nro: {data[0].numero_referencia_comprobante}</li>
                <li>Cliente: {data[0].cliente}</li>
                <li>Deuda Total: {data[0].monto_deuda_total}</li>
                <li>Deuda Final: {data[0].monto_deuda_final}</li>
            </ul>: <Loader/>
            }
            <button className="btn btn-primary">Pagar deuda</button>
        </div>
    )
}

export default PayDebt;
