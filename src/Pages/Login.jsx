import React from "react";
import Header from "../Components/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import instance from "../Axios/api";
import { useNavigate } from "react-router-dom";

const schemaUser = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemaUser) });

  const onSubmit = (data) => {
    // console.log(data);
    (async () => {
      try {
        const res = await instance.post(`/login`, data);
        // console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        if (confirm("Đăng nhập thành công, chuyển hướng sang Home")) {
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data || "Thất bại");
      }
    })();
  };
  return (
    <div>
      <Header />
      <div className="box">
        <div className="dangnhap">
          <h2>Đăng Nhập</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Tên tài khoản:*</label> <br />
            <input
              placeholder="Nhập tên tài khoản"
              type="email"
              id="email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email?.message && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
            <label htmlFor="">Mật khẩu:*</label> <br />
            <input
              placeholder="Mật khẩu"
              type="password"
              id="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.message && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
            <button type="submit">Đăng Nhập</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
