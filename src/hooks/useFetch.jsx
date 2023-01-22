import { useEffect, useState } from "react";
import { getAllData, getSelectedData } from "../helpers/fetchData.js";

const useFetch = (table = 'servicios', rowTable, idFilter, initialValue = []) => {    

    const [isFetching, setIsfetching] = useState(false);
    const [data, setData] = useState(initialValue);
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
        } catch (err) {
            setError(err);
        }finally{
            setIsfetching(false);
        }
    }

    const getDebt = async () => {
        try {
            setIsfetching(true);
            let data = await getSelectedData(table, rowTable, idFilter);
            console.log(data);
            setData(data);
        } catch (err) {
            setError(err);
        }finally{
            setIsfetching(false);
        }
    }

    useEffect(() => {
        if(table === 'servicios') getData();
        if (table === 'servicioDetalle') getDataFiltered();
        if (table === 'comprobante_detalle') getDebt();
    }, [table])


    return  {
        isFetching,
        data,
        error
    }
    
}

export {
    useFetch
}