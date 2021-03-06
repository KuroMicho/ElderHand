import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  background-color: #386ab7;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 0.5em;
`;

export const TextLogo = styled.h1`
  color: white;
  font-size: 20pt;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 1em;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16pt;
  cursor: pointer;
`;

export const Profile = styled.img`
  width: 50px;
  object-fit: cover;
  height: 50px;
`;
