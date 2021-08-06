import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signup } from "../../api/authAPI";
import { authenticate } from "../../auth";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (user) => {
    try {
      const { data } = await signup(user);
      authenticate(data);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data);
    }
  };
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ padding: "10px" }}>Đăng ký</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">
          Bạn đã đăng ký thành công. Click <Link to="/sigin">vào đây </Link> để
          đăng nhập
        </div>
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
              {...register("username")}
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
          <button className="btn btn-primary">Đăng ký</button>
        </div>
        <div className="col-3"></div>
      </div>
    </form>
  );
};
export default Signup;
