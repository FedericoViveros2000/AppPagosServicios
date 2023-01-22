import { useFetch } from "./useFetch.jsx";
import { useEffect, useState } from "react";

const useOptions = (table = 'servicios', initialValue = []) => {

    let {isFetching, data, error} = useFetch(table, initialValue);

    const [options, setOptions] = useState(data);
    const [form, setForm] = useState({
        search: ''
    });

    const filterSearch = (word, key) =>  data.filter(option => option[key].toLowerCase().split(' ').join('').includes(word.toLowerCase().split(' ').join('')))
    
    const handleInput = (word) => {
        setForm({
            search: word
        });
        let filtered = filterSearch(word, 'servicio');
        setOptions(filtered);
    }

    useEffect(() => {
        setOptions(data);
    }, [data])

    /* const [options, setOptions] = useState(initialValue);
    const [copyOptions, setCopyOptions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState('');
 
    const handleShowModal = () => {
     setShowModal(true);
    }

    const filterSearch = (options, word) => options.filter(option => option.toLowerCase().split(' ').join('').includes(word.toLowerCase().split(' ').join('')));
 
    const handleInput = (e) => {
     setSearch(e.target.value);
     const data = filterSearch(options, e.target.value);
     setCopyOptions(data);
    }
  */

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