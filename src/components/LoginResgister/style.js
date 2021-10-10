import styled from "styled-components";

export const Form = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.25);
  margin: 0 auto;
`;

export const Label = styled.label`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const TextForm = styled.p`
  color: #3c4355;
  font-size: 18pt;
  text-align: center;
  margin: 1em 0 1em 0;
`;

export const Arrow = styled.img`
  width:50px;
  margin: .25em auto .25em auto;
`;
export const Field = styled.input`
  padding: 1em;
  background-color: #cba0f0;
  border: 3px solid #8134c3;
  border-radius: 30px;
  font-size: 18px;
  width: 80%;
  margin: 1em auto;
`;
export const BtnSubmit = styled.button`
  position: relative;
  bottom: 20px;
  background-color: #b885e5;
  color: white;
  padding: 1em 1.5em 1em 1.5em;
  margin: .5em 0 0 0 ;
  border: 3px solid #8134c3;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.25);
  font-size: 12pt;
`;
