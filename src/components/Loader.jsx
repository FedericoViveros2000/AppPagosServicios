import React from "react";
import "./Loader.css"
const Loader = () => {
    return (
        <section className="w-full h-screen flex justify-center items-center">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </section>
    )
}

export default Loader;