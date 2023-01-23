import { useEffect, useState } from "react";
import { getAllData, getSelectedData } from "../helpers/fetchData.js";

/*
    TODO Hook mediante el cual traemos la mayoria de los datos de nuestro backend
*/
const useFetch = (
  table = "servicios",
  rowTable,
  idFilter,
  initialValue = []
) => {
  const [isFetching, setIsfetching] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(initialValue);

  /*
        TODO Metodo mediante el cual obtenemos todos los datos de una tabla
    */
  const getData = async () => {
    try {
      setIsfetching(true);
      let data = await getAllData(table);
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsfetching(false);
    }
  };

  /*
        TODO Metodo mediante el cual obtenemos todos los datos seleccionados de una tabla.
    */
  const getDataFiltered = async () => {
    try {
      setIsfetching(true);
      let data = await getSelectedData(table, rowTable, idFilter);
      data.forEach((dat) => {
        setData([...dat.campos]);
      });
    } catch (err) {
      setError(err);
    } finally {
      setIsfetching(false);
    }
  };

  /*
        TODO Metodo mediante el cual obtenemos los datos de los comprobantes de un cliente.
    */
  const getDebt = async () => {
    try {
      setIsfetching(true);
      let data = await getSelectedData(table, rowTable, idFilter);
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsfetching(false);
    }
  };

  /*
        TODO Escuchando que datos de que tabla de nuestro backend va a traer
    */
  useEffect(() => {
    if (table === "servicios") getData();
    if (table === "servicioDetalle" || table === "clientes") getDataFiltered();
    if (table === "comprobante_detalle") getDebt();
  }, [table]);

  return {
    isFetching,
    data,
    getDebt,
    error,
  };
};

export { useFetch };
