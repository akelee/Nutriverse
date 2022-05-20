import { useState, useEffect } from "react";
import { localEndpoint, signUp } from "../../api/api";

const userForm = () => {
  const { values, setValues } = useState({
    username: "",
    users_first_and_last_name: "",
    display_name: "",
    email: "",
  });
};

export default userForm;
