import React, { useEffect, useState } from 'react';
import eyeHide from '../assets/icons/eyeHide.svg';
import eyeShow from '../assets/icons/eyeShow.svg';

const Login = () => {

    const [inputType, setInputType] = useState('password');
    const [customerName, setCustomerName] = useState('');
    const [password, setPassword] = useState('');
    const [sessionText, setSessionText] = useState('Iniciar Sesion');
    const [disabledButton, setDisabledButton] = useState(false);

    useEffect(() => {
        const name = localStorage.getItem('name');
        setCustomerName(name);
    }, []);

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
        if (!password) {
            setEmpty(true);
            setDisabledButton(false);
        }else{
            setEmpty(false);
            setDisabledButton(true);
            setSessionText('Iniciando Sesion...')
            localStorage.setItem('name', 'Juan');
            setTimeout(() => {
                window.location = "/Home"
            }, 5000);
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
        <div className='absolute bottom-0 py-5 px-3 w-full'>
            <form onSubmit={handleSubmit}>
                <label className='block mb-3'>Hola, {customerName}</label>
                <div className={empty ? 'input-flex input-error' : 'input-flex input'}>
                    <input type={inputType} placeholder="Introduzca su contraseña" onBlur={handleFocus} className={empty ? 'w-full placeholder-red-600 outline-none border-0' : 'outline-none border-0 w-full'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <figure className='ml-3' onClick={changeInputType}>
                        <img src={inputType === 'password' ? eyeShow : eyeHide} alt="Icono de password" />
                    </figure>
                </div>
                <p className='text-right text-sm my-3'>Olvide mi contraseña</p>
                <button className={disabledButton ? 'btn btn-disabled' : 'btn btn-primary'} disabled={disabledButton}>{sessionText}</button>
            </form>
        </div>
    )
}

export default Login;