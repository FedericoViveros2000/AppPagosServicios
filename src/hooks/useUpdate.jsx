import {useState, useEffect} from "react";
import { updateData } from "../helpers/fetchData.js";

/*
    TODO Hook mediante el cual enviamos los datos actualizados a nuestro backend, para que lo actualize.
*/
const useUpdate = (table, objectUpdate, term, idFilter, initialValue = []) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const update = async () => {
        try {
            setIsFetching(true);
            let {data, err} = await updateData(table, objectUpdate, term, idFilter);
            if (err) throw new Error(err);
            setData(data);
        } catch (err) {
            setError(err);
            return error;
        }finally{
            setIsFetching(false);
        }
    }

    useEffect(() => {
        update();
    }, [])

    return{
        data,
        error,
        isFetching
    }
}

export {
    useUpdate
}