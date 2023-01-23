import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import eyeHide from '../assets/icons/eyeHide.svg';
import eyeShow from '../assets/icons/eyeShow.svg';
import logo from "../assets/icons/logo.svg";
import { getSelectedData } from '../helpers/fetchData.js';
import "./Loader.jsx";

const Login = () => {
    const [inputType, setInputType] = useState('password');
    const [customerName, setCustomerName] = useState('');
    const [password, setPassword] = useState('');
    const [document, setDocument] = useState('');
    const [sessionText, setSessionText] = useState('Iniciar Sesion');
    const [disabledButton, setDisabledButton] = useState(false);
    //let {isFetching, data, error} = useFetch('clientes', 'nro_documento', document);

    const getUsers = async () => {
        try {
            let data = await getSelectedData('clientes', 'nro_documento', document);
            if (data.length > 0) {
                window.location = "/Home";
            }else{
                setEmpty(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const name = localStorage.getItem('name');
        setCustomerName(name);
    }, [document]);

    let [empty, setEmpty] = useState(false);

    const handleFocus = () => {
        if (!password) {
            setEmpty(true);
        }else{
            setEmpty(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password || !document) {
            setEmpty(true);
            setDisabledButton(false);
        }else{
            setDisabledButton(true);
            setSessionText('Iniciando Sesion...')
            localStorage.setItem('name', 'Juan');
            getUsers();
        }
    }

    const changeInputType = () => {
        if (inputType === 'password') {
            setInputType('text');
        }else{
            setInputType('password')
        }
    }

    return (
        <div>
            <figure className='py-5 mt-10 px-3'>
                <img src={logo} alt="" className='object-cover'/>
            </figure>
            <section className='absolute bottom-0 py-5 px-3 w-full'>
                <form onSubmit={handleSubmit}>
                    {/* <label className='block mb-3'>Hola, {customerName}</label> */}
                    <input type="text" placeholder="Introduzca su numero de documento" 
                    onBlur={handleFocus} className={empty ? 'w-full placeholder-red-600 p-3 outline-none my-3 bg-transparent border border-red-600 rounded-md' : 'outline-none p-3 border border-slate-400 rounded-md my-3 w-full bg-transparent'} value={document} onChange={(e) => setDocument(e.target.value)}/>
                    <div className={empty ? 'input-flex input-error' : 'input-flex input'}>
                        <input type={inputType} placeholder="Introduzca su contraseña" onBlur={handleFocus} className={empty ? 'w-full placeholder-red-600 outline-none border-0 bg-transparent' : 'outline-none border-0 w-full bg-transparent'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <figure className='ml-3' onClick={changeInputType}>
                            <img src={inputType === 'password' ? eyeShow : eyeHide} alt="Icono de password" />
                        </figure>
                    </div>
                    <p className='text-right text-sm my-3'>Olvide mi contraseña</p>
                    <button className={disabledButton ? 'btn btn-disabled' : 'btn btn-primary'} disabled={disabledButton} >{sessionText}</button>
                    <button className='btn bg-slate-300 mt-3' disabled={disabledButton}><Link to={`/Register`}>Registrarme</Link></button>
                </form>
            </section>
        </div>
    )
}

export default Login;