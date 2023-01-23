import notFoundIcon from "../assets/icons/notFoundIcon.svg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-3">
      <div className="text-center">
        <figure className="w-1/2 block m-auto">
          <img src={notFoundIcon} alt="" className="w-full" />
        </figure>
        <h1 className="text-center text-2xl my-5">Oops!</h1>
        <p>No hemos encontrado la pagina buscada</p>
      </div>
      <button className="mt-6 btn btn-primary">
        <Link to="/">Volver al inicio</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
