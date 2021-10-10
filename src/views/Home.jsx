import React from "react";
import registro from "../assets/img/registro.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavOptions from "../components/NavOptions/NavOptions";
import Card from "../components/Card/Card";
import imagen1 from "../assets/img/adultos+mayores+brecha+digital.jpg";
import imagen2 from "../assets/img/ADULTOS-MAYORES-1.png";
import fondo from "../assets/img/fondo_home.jpg";
import figura from "../assets/img/abuelo_gafas.svg";
const Home = () => {
  return (
    <HomeContainer fondo={fondo}>
      <NavOptions />
      <Container>
        <img
          src={figura}
          alt="triangle with all three sides equal"
          height="87"
          width="100"
        />
        <BannerContainer>
          <img src={registro} alt="abuelito" />
          <Link to="/register/1">
            <button>Entra aqui</button>
          </Link>
        </BannerContainer>
        <Card
          desc={"Adultos mayores afrontan la vejez a través de la fotografía"}
          img={imagen1}
        />
        <Card
          desc={"Aprenda a discernir entre información legítima..."}
          img={imagen2}
        />
      </Container>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(76, 83, 67, 0.767) 40%,
      rgba(155, 137, 137, 0.151)
    ),
    url(${(props) => props.fondo});
  background-size: cover;
  width: 100%;
  background-repeat: none;
  background-position: center;
`;

const Container = styled.div`
  background-color: #eee7dc;
  width: 80vw;
  margin: 0 auto;

  > img {
    position: absolute;
    transform: translateX(-400%);
  }
`;

const BannerContainer = styled.div`
  width: 100%;
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
    font-size: 24px;
  }
`;
