import React from "react";
import { Container, ContainerCard,Card, Img, Title,Text, BtnChoose} from "./style";

import clases from '../../assets/img/clase.jpg'
import comunidad from '../../assets/img/comunidad.jpg'

const ClassOrCommunity = () => {
  return (
    <Container>
      <ContainerCard>
        <Card>
            <Img src={clases}/>
            <Title>CLASE</Title>
            <Text>Adquiere nuevos conocimientos, Desarrolla alguna nueva habilidad</Text>
            <Text>Click para ir a las Clases</Text>
            <BtnChoose>Continuar</BtnChoose>
        </Card><Card>
            <Img src={comunidad}/>
            <Title>COMUNIDAD</Title>
            <Text>Indiga e investiga y conoce gente nueva en areas de tu interes.</Text>
            <Text>Click para ir a las Comunidades</Text>
            <BtnChoose>Continuar</BtnChoose>
        </Card>
      </ContainerCard>
    </Container>
  );
};

export default ClassOrCommunity;
