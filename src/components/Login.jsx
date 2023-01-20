import React, { useEffect, useState } from 'react';
import eyeHide from '../assets/icons/eyeHide.svg';
import eyeShow from '../assets/icons/eyeShow.svg';

const Login = () => {

    const [inputType, setInputType] = useState('password');
    const [customerName, setCustomerName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('name');
        setCustomerName(name);
    }, []);

    let [empty, setEmpty] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password) {
            setEmpty(true);
        }else{
            setEmpty(false);
            localStorage.setItem('name', 'Juan');
            window.location = "/Home"
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
                    <input type={inputType} placeholder="Introduzca su contraseña" className={empty ? 'w-full placeholder-red-600 outline-none border-0' : 'outline-none border-0 w-full'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <figure className='ml-3' onClick={changeInputType}>
                        <img src={inputType === 'password' ? eyeShow : eyeHide} alt="Icono de password" />
                    </figure>
                </div>
                <p className='text-right text-sm my-3'>Olvide mi contraseña</p>
                <button className="btn btn-primary">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login;