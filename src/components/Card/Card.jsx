import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ img, desc }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt="adulto mayor" />
      <CardDesc>{desc}</CardDesc>
      <Link to="/comunidades">
        <ButtonMore>Ver mas</ButtonMore>
      </Link>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: inline-block;
  width: 90%;
  max-width: 20rem;
  margin: 1rem;
  font-size: 1rem;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.5);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s;

  > img {
    display: block;
    width: 100%;
  }

  &:hover {
    transform: translateY(-0.5rem) scale(1.0125);
    box-shadow: 0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5);
  }
`;

const CardImage = styled.img`
  display: block;
  min-height: 20rem; /* hack */
  background: #fff center center no-repeat;
  background-size: cover;
  /* filter: lighten(2px); */
`;

const CardDesc = styled.h3`
  display: block;
  padding: 1em 0.5em;
  color: #515151;
  text-decoration: none;
`;

const ButtonMore = styled.button`
  color: #e4dada;
  background-color: #515151;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;
