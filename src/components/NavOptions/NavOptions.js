import React from "react";
import { Options, List, ListItem, OptionLink, Option, Arrow } from "./style";

import juegos from "../../assets/img/juegos.png";
import musica from "../../assets/img/musica.png";
import arte from "../../assets/img/arte.png";
import cine from "../../assets/img/cine.png";
import chat from "../../assets/img/chat.png";
import programacion from "../../assets/img/programacion.png";
import arrowOptions from "../../assets/img/arrowOptions.png";
import { Link } from "react-router-dom";

const NavOptions = () => {
  return (
    <Options>
      <Arrow src={arrowOptions} rotate={true} />
      <List>
        <ListItem>
          <OptionLink>
            <Option src={juegos} />
          </OptionLink>
        </ListItem>
        <ListItem>
          <OptionLink as={Link} to="/comunidades/musica">
            <Option src={musica} />
          </OptionLink>
        </ListItem>
        <ListItem>
          <OptionLink as={Link} to="/comunidades/arte">
            <Option src={arte} />
          </OptionLink>
        </ListItem>
        <ListItem>
          <OptionLink as={Link} to="/comunidades/peliculas">
            <Option src={cine} />
          </OptionLink>
        </ListItem>
        <ListItem>
          <OptionLink>
            <Option src={chat} />
          </OptionLink>
        </ListItem>
        <ListItem>
          <OptionLink>
            <Option src={programacion} />
          </OptionLink>
        </ListItem>
      </List>
      <Arrow src={arrowOptions} />
    </Options>
  );
};

export default NavOptions;
