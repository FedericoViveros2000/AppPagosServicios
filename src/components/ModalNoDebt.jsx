import noDebt from "../assets/icons/noDebt.svg";
import {Link} from "react-router-dom";

const ModalNoDebt = ({setShowModal, title}) => {
    console.log(title);
    return (
        <div className="fixed top-0 w-full h-screen flex flex-col justify-center px-3 ">
            <div className="bg-white relative rounded-lg shadow-md shadow-black  w-full p-3">
                <figure>
                    <img src={noDebt} alt=""  className="object-cover"/>
                </figure>
                <p className="my-5 text-center text-xl">{title}</p>
                <Link to={"/home"}><button className="btn btn-primary">Consultar otro servicio</button></Link>
                <button className="bg-slate-300 w-full mt-3 rounded-md py-3 bottom-0" onClick={() => setShowModal(false)}>Salir</button>
            </div>
        </div>
    )
}

export default ModalNoDebt;