import styled from "styled-components";

export const PostContainer = styled.section`
  width: 60%;
  height: 120%;
  margin: 1em auto;
  padding: 20px 10px;
  box-shadow: 0 4px 10px 0px rgba(0, 0, 0, 0.25);

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input {
      margin-top: 20px;
      padding: 20px 15px;
      border: 1px solid #000;
      border-radius: 10px;
      outline: none;
      margin-right: 10px;

      &:last-of-type {
        margin-right: 0px;
      }
    }

    button {
      padding: 15px 10px;
      border-radius: 10px;
      outline: none;
      border: none;
      box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4);
      margin-top: 10px;
      cursor: pointer;
    }
  }
  button {
    padding: 15px 10px;
    border-radius: 10px;
    outline: none;
    border: none;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4);
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const Posted = styled.article`
  width: 100%;
  margin: 20px 0;
  display: flex;
  background-color: #677bbb;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const ContainerDesc = styled.div`
  margin: 1em;
`;

export const Title = styled.h2``;

export const Descripcion = styled.p``;

export const Rating = styled.div``;

export const Star = styled.img``;
