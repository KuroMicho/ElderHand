import {
  Container as Container1,
  ContainerCard as ContainerCard1,
} from "../CardArchectype/style";
import styled from "styled-components";

export const Container = styled(Container1)`
  width: 70vw;
  height:100%;
  background-color: white;
  justify-content: center;
  margin: 1em auto;
`;

export const ContainerCard = styled(ContainerCard1)`

`;

export const Card = styled.div`
width:40%;
height:90%;
margin:2em;
display:flex;
flex-direction:column;
align-items:center;
background-color:#677bbb;
  box-shadow:4px 2px 10px 2px rgba(0,0,0,.5 ) ;
`;

export const Img =styled.img`
  width:100%  ;
  height:200px;

`;
export const Title = styled.h3`
  margin:.5em;
`;

export const Text = styled.p`
  width: 100%;
  text-align:center;
  margin:.5em;
`;

export const BtnChoose = styled.button`
  margin:.5em;
  padding:.5em;
  color:white;
  background-color:#B885E5;
  border:2px solid #8134C3;
  border-radius: 15px;
  font-size:12pt;
`;
