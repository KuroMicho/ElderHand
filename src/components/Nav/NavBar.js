import React from "react";
import {
  Nav,
  LogoContainer,
  Logo,
  TextLogo,
  List,
  ListItem,
  Profile,
  ItemLink,
} from "./style";

import logo from "../../assets/img/Logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/userSlice";

const NavBar = ({ avatar }) => {
  const history = useHistory();
  const user = useSelector(selectUser);
  console.log(user);

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log("log out");
    });
  };
  return (
    <Nav>
      <LogoContainer onClick={() => history.push("/")}>
        <Logo src={logo} />
        <TextLogo>ElderHand</TextLogo>
      </LogoContainer>

      <List>
        <ListItem>
          <ItemLink as={Link} to="/clases">
            Clases
          </ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink as={Link} to="/comunidades">
            Comunidades
          </ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink>Preguntas</ItemLink>
        </ListItem>
        <ListItem>
          <Profile src={user ? user.photoURL : avatar} />
        </ListItem>
        <ListItem>
          {user && <ItemLink onClick={handleLogout}>Salir</ItemLink>}
        </ListItem>
      </List>
    </Nav>
  );
};

export default NavBar;
