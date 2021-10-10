import React from "react";
import styled from "styled-components";

const Comunidades = () => {
  return (
    <>
      <Form>
        <Label>
          <h3>Creacion de comunidad</h3>
          Titulo:
          <FieldTitle></FieldTitle>
          Descripcion:
          <FieldDesc></FieldDesc>
          Imagen:
          <FieldImg></FieldImg>
        </Label>

        <BtnSubmit>Postear</BtnSubmit>
      </Form>
    </>
  );
};

export default Comunidades;

export const Form = styled.form.attrs({
  method: "POST",
  enctype: "multipart/formdata",
})`
  width: 60%;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #677bbb;
  padding: 2em;

  h3 {
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FieldTitle = styled.input.attrs({
  type: "text",
})`
  margin-bottom: 20px;
  padding: 10px 5px;
`;

export const FieldDesc = styled.textarea`
  margin-bottom: 20px;
`;

export const FieldImg = styled.input.attrs({
  type: "file",
})`
  margin-bottom: 20px;
`;

export const BtnSubmit = styled.button.attrs({ type: "submit" })`
  width: fit-content;
  padding: 15px 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.4);
  margin-top: 10px;
  cursor: pointer;
`;
