import axios from "axios";
import { useState, useEffect } from "react";
import { localEndpoint } from "../../api/api";

const userForm = () => {
  const { values, setValues } = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${localEndpoint}/signup`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    // axios.post(`${localEndpoint}/signup`, values);
  };
  return { handleChange, values, handleSubmit };
};

export default userForm;
