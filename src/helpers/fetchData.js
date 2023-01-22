import {supabase} from "./supabase.js";

const getAllData = async (table) => {
    try{
        let {data, error, status, statusText} = await supabase
        .from(table)
        .select();
        if (error) throw new Error(`Ha ocurrido un error ${error}, status ${status} - ${statusText}`)
        return data;
    }catch(err) {
        return error;
    }
}

const getSelectedData = async (table, row, id) => {
    try{
        console.log(table, row, id);
        let {data, error, status, statusText} = await supabase.from(table).select().eq(row, id);
        console.log(data);
        if (error) throw new Error(`Ha ocurrido un error ${error}, status ${status} - ${statusText}`)
        return data;
    }catch(err) {
        return error;
    }
}

export {
    getAllData,
    getSelectedData
}