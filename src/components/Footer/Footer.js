import React from "react";
import logo from "../../assets/img/Logo.png";
import {
  FooterContainer,
  LogoContainer,
  Logo,
  ElderHandText,
  List,
  ListItem,
  ItemLink,
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <List>
        <ListItem>
          <ItemLink>¡Ayuda a nuestros mayores!</ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink>Preguntas frecuentes</ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink>Terminos y condiciones</ItemLink>
        </ListItem>
        <ListItem>
          <ItemLink>Sobre Nosotros</ItemLink>
        </ListItem>
      </List>
      <LogoContainer>
        <Logo src={logo} />
        <ElderHandText>Elder Hand</ElderHandText>
        <Logo src={logo} />
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;
