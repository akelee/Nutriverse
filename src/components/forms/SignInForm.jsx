import axios from "axios";
import { useState, useEffect } from "react";
import { localEndpoint, getDummyUsers, signIn } from "../../api/api";
import { useNavigate } from "react-router-dom";

const signInForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "", // or email?
    password: "",
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
      await axios.post(`${localEndpoint}/signin`, values);
      navigate("/account");
    } catch (err) {
      console.log(err);
    }
  };
  return { handleChange, handleSubmit, values };
};

export default signInForm;
