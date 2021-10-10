import React, { useState } from "react";
import { Container } from "../CardArchectype/style";
import { BtnSubmit, Field, Form, Label, TextForm, Arrow } from "./style";
import arrow from "../../assets/img/Arrow.png";
import { auth, provider } from "../../firebase.js";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import mano from "../../assets/img/mano.png";

const CardForm = ({ labelText, placeHolder }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      alert("Registro exitoso!");
      console.log(res);
      history.push("/");

      setEmail("");
      setPassword("");
    } catch (e) {
      alert("Completa todos los campos");
    }
  };

  const handleFacebok = async () => {
    try {
      const res = await auth.signInWithPopup(provider.facebook);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(provider.google);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <Label>
          <TextForm>Ingresa tu contrasena</TextForm>
          <Arrow src={arrow} />
          <Field
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Aqui contrasena..."
          />
        </Label>
        <BtnSubmit>Continuar</BtnSubmit>
        <LoginAccount>
          <p>Ya tienes cuenta pulsa aqui:</p>
          <Link to="/login">Iniciar Sesion con mi Cuenta</Link>
          <img src={mano} alt="mano pulsa aqui" />
        </LoginAccount>
        <BtnFacebook onClick={handleFacebok}>
          Iniciar Sesion con Facebook
        </BtnFacebook>
        <BtnGoogle onClick={handleGoogle}>
          <div class="google-icon-wrapper">
            <img
              alt="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p class="btn-text">
            <b>Entra con Google</b>
          </p>
        </BtnGoogle>
      </Form>
    </Container>
  );
};

export default CardForm;

const LoginAccount = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  img {
    width: 50px;
  }

  a {
    margin-left: 20px;
    text-decoration: underline;
    color: #000;
    font-weight: 500;
  }
`;

const BtnFacebook = styled.button`
  margin-top: 20px;
  background-color: #3b5998;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BtnGoogle = styled.div`
  margin-top: 20px;
  width: 184px;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #fff;
  }

  img {
    position: absolute;
    margin-top: 11px;
    margin-left: -8px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    text-align: center;
    margin-left: 30px;
    margin-top: 15px;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  &:active {
    background: #1669f2;
  }
`;
