import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.jsx";
import btnBack from "../assets/icons/btnBackPrimary.svg";
import Loader from "./Loader.jsx";

const PayDebt = () => {
  let { id, service } = useParams();

  let { data, isFetching } = useFetch(
    "comprobante_detalle",
    "numero_referencia_comprobante",
    id,
    []
  );

  if (isFetching) return <Loader />;

  return (
    <div className="h-screen w-full p-3 flex justify-between flex-col">
      <article>
        <section className="w-full">
          <nav className="w-full flex py-3">
            <figure className="mr-3">
              <Link to={`/pay/${service}`}>
                <img src={btnBack} alt="Boton para volver atras" />
              </Link>
            </figure>
            <p className="text-primary">Detalles a pagar</p>
          </nav>
        </section>
        {data.length > 0 ? (
          <ul className="leading-10">
            <li>
              <span className="font-bold">Documento Nro:</span>{" "}
              {data[0].numero_referencia_comprobante}
            </li>
            <li>
              <span className="font-bold">Cliente: </span>
              {data[0].cliente}
            </li>
            {/* <li>Deuda Total: {data[0].monto_deuda_total}</li> */}
            <li className="font-bold text-xl p-3 mt-3 bg-slate-200 rounded-md">
              <span className="block mb-3">Importe:</span>{" "}
              {data[0].monto_deuda_final}
            </li>
          </ul>
        ) : (
          <Loader />
        )}
      </article>
      <button className="btn btn-primary">
        <Link to={`/pay/${id}/finished`}>Pagar Deuda</Link>
      </button>
    </div>
  );
};

export default PayDebt;
