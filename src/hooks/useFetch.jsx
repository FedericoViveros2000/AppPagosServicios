import { useEffect, useState } from "react";
import { getAllData, getSelectedData } from "../helpers/fetchData.js";
/* [
    "A MAS B",
    "ATALAYA INMOBILIARIA",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ande",
    "ESSAP",
    "IMPUESTO INMOBILIARIO"
   ] */
const useFetch = (table = 'servicios', rowTable, idFilter, initialValue = []) => {    

    const [isFetching, setIsfetching] = useState(false);
    const [data, setData] = useState(initialValue);
    const [dataOptions, setDataOptions] = useState(null);
    const [error, setError] = useState(initialValue);

    const getData = async () => {
        try {
            setIsfetching(true);
            let data = await getAllData(table);
            setData(data);
        } catch (err) {
            setError(err);
        }finally{
            setIsfetching(false);
        }
    }

    const getDataFiltered = async () => {
        try {
            setIsfetching(true);
            let data = await getSelectedData(table, rowTable, idFilter);
            data.forEach(dat => {
                setData([
                    ...dat.campos
                ])
            });
            //setData(data);
        } catch (err) {
            setError(err);
        }finally{
            setIsfetching(false);
        }
    }

    useEffect(() => {
        if(table === 'servicios') getData();
        if (table === 'servicioDetalle') getDataFiltered()
    }, [table])


    return  {
        isFetching,
        data,
        dataOptions, 
        error
    }
    
}

export {
    useFetch
}