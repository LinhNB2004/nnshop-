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
const Register = () => {
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
        await instance.post(`/register`, data);
        // console.log(res);
        if (confirm("Đăng kí thành công, chuyển hướng sang Login")) {
          navigate("/login");
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
          <h2>Đăng Ký</h2>
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
            <button type="submit">Đăng Ký</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
