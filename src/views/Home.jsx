import React from "react";
import registro from "../assets/img/registro.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <BannerContainer>
      <img src={registro} alt="abuelito" />
      <Link to="/register">
        <button>Crear una cuenta aqui</button>
      </Link>
    </BannerContainer>
  );
};

export default Home;

const BannerContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;

  img {
    width: 400px;
    height: 200px;
    object-fit: cover;
  }

  button {
    border: none;
    position: absolute;
    background-color: rgb(32, 77, 146);
    color: white;
    border-radius: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    cursor: pointer;
  }
`;
