import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { signin } from "../../api/authAPI";
import { authenticate } from "../../auth";
import { isAuthenticate } from "../../auth";
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (user) => {
    try {
      const { data } = await signin(user);
      authenticate(data);
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.response.data);
    }
  };
  const redirectUser = () => {
    if (success) {
      const id = isAuthenticate().user.id;
      if (id == 1) {
        return <Redirect to="/"></Redirect>;
      } else {
        return <Redirect to="/product"></Redirect>;
      }
    }
  };
  return <div>trang chủ</div>;
};
export default Signin;
