import { supabase } from "./supabase.js";

const getAllData = async (table) => {
  try {
    let { data, error, status, statusText } = await supabase
      .from(table)
      .select();
    if (error)
      throw new Error(
        `Ha ocurrido un error ${error}, status ${status} - ${statusText}`
      );
    return data;
  } catch (error) {
    return error;
  }
};

const getSelectedData = async (table, row, id) => {
  try {
    let { data, error, status, statusText } = await supabase
      .from(table)
      .select()
      .eq(row, id);
    if (error)
      throw new Error(
        `Ha ocurrido un error ${error}, status ${status} - ${statusText}`
      );
    return data;
  } catch (error) {
    return error;
  }
};

const updateData = async (table, updateData, term, idFilter) => {
  try {
    const { data, error, status, statusText } = await supabase
      .from(table)
      .update(updateData)
      .eq(term, idFilter)
      .select();
    if (error)
      throw new Error(
        `Ha ocurrido un error ${error}, status ${status} - ${statusText}`
      );
    return data;
  } catch (error) {
    return error;
  }
};

const insertData = async (table, dataInsert) => {
  try {
    const { data, error, status, statusText } = await supabase
      .from(table)
      .insert(dataInsert)
      .select();
    if (error)
      throw new Error(
        `Ha ocurrido un error ${error}, status ${status} - ${statusText}`
      );
    return data;
  } catch (error) {
    return error;
  }
};

export { getAllData, getSelectedData, updateData, insertData };
