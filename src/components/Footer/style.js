import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  position: sticky;
  bottom: 0;
  display: flex;
  background-color: #204d92;
  color: white;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5em;
`;

export const Logo = styled.img`
  width: 70px;
`;

export const ElderHandText = styled.h3`
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 1em;
  padding: 0;
`;

export const ItemLink = styled.a`
  font-size: 14pt;
  margin: 0;
  padding: 0;
`;

export const Copy = styled.p`
  font-size: 14pt;
`;
