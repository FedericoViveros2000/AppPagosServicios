import { useFetch } from "./useFetch.jsx";
import { useEffect, useState } from "react";

/*
    TODO Hook mediante el cual filtramos los servicios que coincidan con el buscado por el usuario
*/

const useOptions = (table = 'servicios', initialValue = []) => {

    let {isFetching, data, error} = useFetch(table, initialValue);

    const [options, setOptions] = useState(data);
    const [form, setForm] = useState({
        search: ''
    });

    //Funcion mediante el cual filtramos los servicios para pagar, ANDE, ESSAP, etc
    const filterSearch = (word, key) =>  data.filter(option => option[key].toLowerCase().split(' ').join('').includes(word.toLowerCase().split(' ').join('')))
    
    //Funcion mediante la cual renderizamos los elementos que coincidan con la busqueda realizada por el usuario
    const handleInput = (word) => {
        setForm({
            search: word
        });
        let filtered = filterSearch(word, 'servicio');
        setOptions(filtered);
    }

    //Escuchando los cambios y actualizando el estado de los servicios para pagar
    useEffect(() => {
        setOptions(data);
    }, [data])

    return {
        isFetching,
        options,
        error,
        handleInput,
        form
    }

}

export {
    useOptions
}