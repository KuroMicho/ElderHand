import React from "react";
import CardForm from "../components/Register/CardForm";

const SignUp = () => {
  return (
    <div>
      <CardForm
        labelText={"Registrate con cualquier correo"}
        placeHolder="example@gmail.com"
      />
    </div>
  );
};

export default SignUp;
