import styled from 'styled-components';

export const Options = styled.section`
position: sticky;
top:10px;
width: 70%;
margin: .5em auto;
padding: .25em;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #B885E5;
border-radius: 40px;
`;

export const List = styled.ul`
padding: 0;
margin: .25em 0 0 0;
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  padding: 0;
  margin: 0;
`;

export const OptionLink = styled.a`
  padding: 0;
  margin: 0;
`;

export const Option = styled.img`
  width: 60px;
`;

export const Arrow = styled.img`
  transform: ${({rotate})=>rotate?"rotate(180deg)":"rotate(0)"};
  margin:0 .5em;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.25) ;
`;