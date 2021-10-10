import React from "react";
import { Options, List, ListItem, OptionLink, Option, Arrow } from "./style";

import juegos from "../../assets/img/juegos.png";
import musica from "../../assets/img/musica.png";
import arte from "../../assets/img/arte.png";
import cine from "../../assets/img/cine.png";
import chat from "../../assets/img/chat.png";
import programacion from "../../assets/img/programacion.png";
import arrowOptions from "../../assets/img/arrowOptions.png";
import banner from "../../assets/img/baner.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const NavOptions = () => {
  return (
    <Container banner={banner}>
      <h2>Explora una categoria!</h2>
      <Options>
        <Arrow src={arrowOptions} rotate={true} />
        <List>
          <ReactTooltip />
          <ListItem>
            <OptionLink
              data-tip="Entretenimiento"
              as={Link}
              to="/comunidades/musica"
            >
              <Option src={juegos} />
            </OptionLink>
          </ListItem>
          <ListItem>
            <OptionLink data-tip="Musica" as={Link} to="/comunidades/musica">
              <Option src={musica} />
            </OptionLink>
          </ListItem>
          <ListItem>
            <OptionLink
              as={Link}
              to="/comunidades/arte"
              data-tip="Arte y manualidades"
            >
              <Option src={arte} />
            </OptionLink>
          </ListItem>
          <ListItem>
            <OptionLink
              as={Link}
              to="/comunidades/peliculas"
              data-tip="Peliculas"
            >
              <Option src={cine} />
            </OptionLink>
          </ListItem>
          <ListItem>
            <OptionLink data-tip="Entretenimiento Digital">
              <Option src={chat} />
            </OptionLink>
          </ListItem>
          <ListItem>
            <OptionLink data-tip="Uso de Computadoras">
              <Option src={programacion} />
            </OptionLink>
          </ListItem>
        </List>
        <Arrow src={arrowOptions} />
      </Options>
    </Container>
  );
};

export default NavOptions;

const Container = styled.div`
  text-align: center;
  background: linear-gradient(to bottom, transparent 0%, transparent 10%, gray),
    url(${(props) => props.banner});
  background-size: cover;
  width: 100%;
  background-repeat: none;
  background-position: center;
  padding: 15px 0;
  width: 80%;
  margin: 0 auto;

  h2 {
    margin-top: 15px;
    color: #222;
    font-size: 30px;
    text-align: left;
    margin-left: 15vw;
  }
`;
