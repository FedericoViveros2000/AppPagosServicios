import { insertData } from "../helpers/fetchData.js";
import { useState } from "react";

/* 
    TODO Hook mediante el cual podemos insertar datos (usuarios, clientes) en nuestra base de datos alojada en supabase
*/

const useInsert = () => {

    const [user, setUser] = useState([]);
    const [isFetching, setIsfetching] = useState(false);
    const [error, setError] = useState(null)

    /*
        TODO Metodo mediante el cual insertamos al nuevo cliente (u otro), y devolvemos sus datos, para verificar si fue correctamente creado o no
    */
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