import { useState } from "react";
import { useInsert } from "../hooks/useInsert.jsx";
import { Link } from "react-router-dom";
import Loader from "./Loader.jsx";
import ModalCreated from "./ModalCreated.jsx";
import NavBar from "./NavBar.jsx";
const FormRegister = () => {
  let { user, insert, error, isFetching } = useInsert();
  let [form, setForm] = useState({});
  let [showSuccess, setShowSuccess] = useState(false);
  let [isEmpty, setIsEmpty] = useState(false);

  if (isFetching) return <Loader />;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      if (
        !form.nombre ||
        !form.apellido ||
        !form.nro_documento ||
        !form.email ||
        !form.telefono ||
        !form.direccion
      ) {
        setIsEmpty(true);
      } else {
        await insert("clientes", form);
        if (user) {
          setIsEmpty(false);
          setShowSuccess(true);
        }
      }
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-between flex-col">
        <NavBar title="Volver al inicio" url="/" />
        <div className="p-3">
          <h1 className="text-center text-primary my-5 text-2xl font-bold">
            Crear cuenta
          </h1>
          <form>
            <label htmlFor="">Ingrese su nombre completo: </label>
            <input
              type="text"
              name="nombre"
              className="input w-full p-2 my-3"
              placeholder="Nombres"
              onChange={handleChange}
            />
            <label htmlFor="">Ingrese su apellido completo: </label>
            <input
              type="text"
              name="apellido"
              className="input w-full p-2 my-3"
              placeholder="Apellidos"
              onChange={handleChange}
            />
            <label htmlFor="">Ingrese su numero de documento: </label>
            <input
              type="number"
              name="nro_documento"
              className="input w-full p-2 my-3"
              placeholder="Nro Documento"
              onChange={handleChange}
            />
            <label htmlFor="">Ingrese su email: </label>
            <input
              type="mail"
              name="email"
              className="input w-full p-2 my-3"
              placeholder="Email"
              onChange={handleChange}
            />
            <label htmlFor="">Ingrese su de telefono: </label>
            <input
              type="number"
              name="telefono"
              className="input w-full p-2 my-3"
              placeholder="Telefono"
              onChange={handleChange}
            />
            <label htmlFor="">Ingrese su direccion: </label>
            <input
              type="text"
              name="direccion"
              className="input w-full p-2 my-3"
              placeholder="Direccion"
              onChange={handleChange}
            />
            {isEmpty && (
              <p className="text-red-600">*Complete todos los campos*</p>
            )}
          </form>
        </div>
        <button className="btn btn-primary" onClick={handleRegister}>
          Registrarme
        </button>
      </div>
      {showSuccess && (
        <ModalCreated
          title="El nuevo usuario se ha creado exitosamente!"
          url={`/`}
          closeModal={setShowSuccess}
        />
      )}
    </>
  );
};

export default FormRegister;
