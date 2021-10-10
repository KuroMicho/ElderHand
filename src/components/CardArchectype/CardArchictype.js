import React from "react";
import {
  Container,
  ContainerCard,
} from "./style";

import Card from "./Card";

import Abuelito from "../../assets/img/Abuelito.png";
import MaestroVoluntario from "../../assets/img/MaestroVoluntario.png";
import MaestroSabio from "../../assets/img/MaestroSabio.png";

function CardArchictype() {
  return (
    <Container>
      <ContainerCard>
        
        <Card
          user={"Maestro Sabio"}
          image={MaestroSabio}
          text={
            "¿Eres experto en alguna habilidad o tienen algun conomiento que quieras enseñar?"
          }
          widthImg={"106px"}
          heigthImg={"100px"}
        />

        <Card
          user={"Rookie Elder"}
          image={Abuelito}
          text={
            "¿Eres experto en alguna habilidad o tienen algun conomiento que enseñar?"
          }
          heigth={"98%"}
          width={"30%"}
          widthImg={"126px"}
          heigthImg={"150px"}
        />

        <Card
          user={"Maestro Voluntario"}
          image={MaestroVoluntario}
          text={
            "¿Quieres aportar valor educacional a la comunidad aulta mayor?"
          }
          widthImg={"106px"}
          heigthImg={"150px"}
        />

      </ContainerCard>
    </Container>
  );
}

export default CardArchictype;
