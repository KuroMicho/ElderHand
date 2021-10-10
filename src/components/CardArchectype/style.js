import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #677bbb;
`;

export const ContainerCard = styled.section`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
`;

export const CardStyle = styled.article`
  width: ${({ width }) => (width ? width : "25%")};
  height: ${({ heigth }) => (heigth ? heigth : "90%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.25);
`;

export const Icon = styled.img`
  margin: 1em;
  width: ${({ widthImg }) => widthImg};
  height: ${({ heightImg }) => heightImg};
`;

export const User = styled.h2`
  color: #3c4355;
  font-weight: bold;
`;

export const TextAnswer = styled.p`
  width: 80%;
  color: #3c4355;
  font-size: 14pt;
  text-align: center;
  margin: 0.5em;
`;
export const List = styled.ul`
  list-style: none;
`;

export const ItemList = styled.li``;

export const BtnContinue = styled.button`
  position: absolute;
  bottom: 120px;
  background-color: #b885e5;
  color: white;
  padding: 1em 1.5em 1em 1.5em;
  border: 3px solid #8134c3;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.25);
`;
