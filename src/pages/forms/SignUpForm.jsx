import axios from "axios";
import { useState, useEffect } from "react";
import { localEndpoint, signUp } from "../../api/api";

const signUpForm = () => {
  const [values, setValues] = useState({
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
    try {
      console.log(values);
      // await fetch(`${localEndpoint}/signup`, {
      //   method: "POST",
      //   body: JSON.stringify("Hello"),
      // });
      axios.post(`${localEndpoint}/signup`, values);
    } catch (err) {
      console.log(err);
    }
  };
  return { handleChange, values, handleSubmit };
};

export default signUpForm;
