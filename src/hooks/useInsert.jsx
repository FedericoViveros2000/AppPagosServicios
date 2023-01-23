import { insertData } from "../helpers/fetchData.js";
import { useEffect, useState } from "react";

const useInsert = () => {

    const [user, setUser] = useState([]);
    const [isFetching, setIsfetching] = useState(false);
    const [error, setError] = useState(null)

    const insert = async (table = 'clientes', dataInsert) => {
        try {
            setIsfetching(true);
            let {data, err} = await insertData(table, dataInsert);
            if (err) throw new Error(err);
            setUser(data);
        } catch (err) {
            setError(err);
        }finally{
            setIsfetching(false);
        }
    }

    /* useEffect(() => {
        insert();
    }, []) */

    return {
        user,
        isFetching,
        insert,
        error
    }

}

export {
    useInsert
}