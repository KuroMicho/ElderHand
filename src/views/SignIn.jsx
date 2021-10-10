import React from "react";
import CardForm from "../components/Login/CardForm";

const SignIn = () => {
  return (
    <div>
      <CardForm
        labelText={"Ingresa aqui tu correo"}
        placeHolder="example@gmail.com"
      />
    </div>
  );
};

export default SignIn;
