import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";
import ChevronRight from "../components/Icons/ChevronRight";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem 2rem 4rem 2rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: "20px",
            marginTop: "0.2rem",
            marginBottom: "2rem",
          }}
        >
          Giriş Yap
        </p>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.5rem" }}
          ></label>
          <input
            id="email"
            type="email"
            placeholder="E-posta"
            {...register("email")}
            style={{
              padding: "0.8rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "0.5rem" }}
          ></label>
          <input
            id="password"
            type="password"
            placeholder="Şifre"
            {...register("password")}
            style={{
              padding: "0.8rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "0.75rem" }}>
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid #2196F3",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#2196F3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{ fontWeight: "400", fontSize: "15px", color: "#2196F3" }}
          >
            Giriş
          </span>{" "}
          {<ChevronRight />}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
