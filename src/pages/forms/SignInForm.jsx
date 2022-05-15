import { useState, useEffect } from "react";

const signInForm = () => {
  const { values, setValues } = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return { handleChange, values, handleSubmit };
};

export default signInForm;
