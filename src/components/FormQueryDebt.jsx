import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.jsx";
import btnBack from "../assets/icons/btnBack.svg";
import ModalNoDebt from "./ModalNoDebt.jsx";
import Loader from "./Loader.jsx";
import { getSelectedData } from "../helpers/fetchData.js";

const FormQueryDebt = () => {
  let { service } = useParams();
  let { isFetching, data, getDebt } = useFetch(
    "servicioDetalle",
    "id_servicio",
    service
  );

  const [form, setForm] = useState({});
  const [btnText, setBtnText] = useState("Consultar");
  const [showNoDebt, setShowNoDebt] = useState(false);
  const [title, setTitle] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);

  const handleChange = (e) => {
    if (e.target.value) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setDisabledButton(true);
      setBtnText("Consultando");
      let data = await getSelectedData(
        "comprobante_detalle",
        "numero_referencia_comprobante",
        form.NIS
      );
      console.log(data);
      if (data.length === 0) {
        setTitle(`El comprobante ${form.NIS} es invalido`);
      } else if (data[0].pagado) {
        setTitle(`El comprobante ${form.NIS} ya fue abonado`);
      } else {
        window.location = `/pay/${service}/${form.NIS}`;
      }
    } catch (err) {
      console.log(err);
    } finally {
      setDisabledButton(false);
      setBtnText("Consultar");
    }
    setShowNoDebt(true);
  };

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="w-full h-screen">
        <section className="w-full text-white bg-primary">
          <nav className="w-full flex  p-3">
            <figure className="mr-3">
              <Link to="/home">
                <img src={btnBack} alt="Boton para volver atras" />
              </Link>
            </figure>
            <p className="text-white">Pagos</p>
          </nav>
        </section>
        <form
          onSubmit={handleSubmit}
          className="p-3 h-[95%]  flex flex-col justify-between"
        >
          <div>
            <h1 className="mb-3 text-primary">Consulta de servicios</h1>
            {data.map((option, index) => {
              return (
                <div key={index}>
                  <label htmlFor={option.nombre_campo}>
                    Introduzca el {option.nombre_campo} a consultar
                  </label>
                  <input
                    autoComplete="off"
                    className="input border-primary p-2 my-3"
                    id={option.nombre_campo}
                    name={option.nombre_campo}
                    type={option.tipo_campo}
                    placeholder={option.nombre_campo}
                    value={form[option.nombre_campo]}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
          </div>
          <button
            className={disabledButton ? "btn btn-disabled" : "btn btn-primary"}
            disabled={disabledButton}
          >
            {btnText}
          </button>
        </form>
        {showNoDebt && (
          <ModalNoDebt setShowModal={setShowNoDebt} title={title} />
        )}
      </div>
    </>
  );
};

export default FormQueryDebt;
