import { Link } from "react-router-dom";
import btnBack from "../assets/icons/btnBack.svg";

const NavBar = ({title, url}) => {
    return(
        <header className="w-full text-white bg-primary">
            <nav className="w-full flex  p-3">
                <figure className="mr-3">
                    <Link to={url}>
                        <img src={btnBack} alt="Boton para volver atras"/>
                    </Link>
                </figure>
                <p className="text-white">{title}</p>
            </nav>
        </header>
    )
}

export default NavBar;