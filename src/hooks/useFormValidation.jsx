import { useState } from "react";
import { getSelectedData } from "../helpers/fetchData.js";

const useFormValidation = () => {
  let [inputType, setInputType] = useState("password");
  //let [password, setPassword] = useState('');
  let [form, setForm] = useState({
    document: "",
    password: "",
  });
  let [isEmpty, setIsEmpty] = useState(false);
  //let [document, setDocument] = useState('');
  let [sessionText, setSessionText] = useState("Iniciar Sesion");
  let [disabledButton, setDisabledButton] = useState(false);

  const getUsers = async () => {
    try {
      let data = await getSelectedData(
        "clientes",
        "nro_documento",
        form.document
      );
      console.log(data);
      if (data.length > 0) {
        window.location = "/Home";
        setDisabledButton(false);
      } else {
        setDisabledButton(false);
        setIsEmpty(false);
      }
      setSessionText("Iniciar Sesion");
    } catch (err) {
      console.log(err);
    }
  };

  const handleFocus = () => {
    if (!form.password || !form.document) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.password || !form.document) {
      setIsEmpty(true);
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
      setSessionText("Iniciando Sesion...");
      localStorage.setItem("name", "Juan");
      getUsers();
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const changeInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleFocus,
    changeInputType,
    form,
    isEmpty,
    inputType,
    sessionText,
    disabledButton,
  };
};

export { useFormValidation };
