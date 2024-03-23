import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Geçerli bir e-posta adresi giriniz")
      .required("E-posta adresi zorunludur"),
    password: yup
      .string()
      .min(8, "Şifre en az 8 karakter olmalıdır")
      .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
      .matches(/[0-9]/, "Şifre en az bir rakam içermelidir")
      .required("Şifre zorunludur"),
  })
  .required();

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    login();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">E-posta</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Şifre</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
};

export default LoginForm;
