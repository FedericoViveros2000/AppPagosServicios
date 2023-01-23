import React from "react";
import logoUserCreated from "../assets/icons/userCreated.svg";
import { Link } from "react-router-dom";

const ModalCreated = ({ title, url, closeModal }) => {
  return (
    <div className="w-full h-screen fixed top-0 flex items-center p-3 bg-slate-50">
      <div className="bg-white rounded-md p-3 shadow-xl">
        <div className="h-auto">
          <figure>
            <img src={logoUserCreated} className="objectCover" />
          </figure>
          <p className="text-center text-xl my-8">{title}</p>
        </div>
        <button
          className="btn btn-primary my-3"
          onClick={() => closeModal(false)}
        >
          Crear otro usuario
        </button>
        <button className="btn bg-slate-300">
          <Link to={url}>Volver al inicio</Link>
        </button>
      </div>
    </div>
  );
};

export default ModalCreated;
