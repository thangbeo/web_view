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
      console.log(error.response);
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
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      {redirectUser()}
      <h2 style={{ padding: "10px" }}>Đăng nhập</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">Bạn đã đăng nhập thành công</div>
      )}
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              {...register("username", { required: true })}
            ></input>
            {errors.username && (
              <span className="text-danger mt-2 d-block">
                Không được để trống
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            ></input>
            {errors.password && (
              <span className="text-danger mt-2 d-block">
                Không được để trống
              </span>
            )}
          </div>
          <button className="btn btn-primary">Đăng nhập</button>
        </div>
        <div className="col-3"></div>
      </div>
    </form>
  );
};
export default Signin;
