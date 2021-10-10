import styled from 'styled-components';

export const Form = styled.form.attrs({method:"POST",enctype:"multipart/formdata"})`
width:60%;
margin:1em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:#677bbb;
  padding:2em;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FieldTitle = styled.input.attrs({ 
    type: 'text',
  })`
  
`;

export const FieldDesc = styled.textarea`
  
`;

export const FieldImg = styled.input.attrs({ 
    type: 'file',
    
  })`
  
`;

export const BtnSubmit = styled.button.attrs({type: 'submit'})`
  
`;

