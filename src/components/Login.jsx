import React from "react";
import { Link } from "react-router-dom";
import eyeHide from "../assets/icons/eyeHide.svg";
import eyeShow from "../assets/icons/eyeShow.svg";
import logo from "../assets/icons/logo.svg";
import { useFormValidation } from "../hooks/useFormValidation.jsx";
import "./Loader.jsx";

const Login = () => {
  let {
    form,
    isEmpty,
    sessionText,
    disabledButton,
    changeInputType,
    handleFocus,
    handleSubmit,
    handleChange,
    inputType,
  } = useFormValidation();

  return (
    <div>
      <figure className="py-5 mt-10 px-3">
        <img src={logo} alt="" className="object-cover" />
      </figure>
      <section className="absolute bottom-0 py-5 px-3 w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Introduzca su numero de documento"
            onBlur={handleFocus}
            className={
              isEmpty
                ? "w-full placeholder-red-600 p-3 outline-none my-3 bg-transparent border border-red-600 rounded-md"
                : "outline-none p-3 border border-slate-400 rounded-md my-3 w-full bg-transparent"
            }
            value={form.document}
            name="document"
            onChange={(e) => handleChange(e)}
          />
          <div
            className={isEmpty ? "input-flex input-error" : "input-flex input"}
          >
            <input
              type={inputType}
              placeholder="Introduzca su contraseña"
              onBlur={handleFocus}
              className={
                isEmpty
                  ? "w-full placeholder-red-600 outline-none border-0 bg-transparent"
                  : "outline-none border-0 w-full bg-transparent"
              }
              name="password"
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <figure className="ml-3" onClick={changeInputType}>
              <img
                src={inputType === "password" ? eyeShow : eyeHide}
                alt="Icono de password"
              />
            </figure>
          </div>
          <p className="text-right text-sm my-3">Olvide mi contraseña</p>
          <button
            className={disabledButton ? "btn btn-disabled" : "btn btn-primary"}
            disabled={disabledButton}
          >
            {sessionText}
          </button>
          <button className="btn bg-slate-300 mt-3" disabled={disabledButton}>
            <Link to={`/Register`}>Registrarme</Link>
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
