import React from 'react'
import {
    CardStyle,
    Icon,
    TextAnswer,
    List,
    ItemList,
    BtnContinue,
    User,
  } from "./style";

  

const Card = ({image,user, text, width = "25%", heigth = "90%", widthImg, heigthImg}) => {
    return (
        <>
         <CardStyle heigth={heigth} width={width}>
          <Icon src={image} widthImg={widthImg} heigthImg={heigthImg}/>
          <User> {user}</User>
          <TextAnswer>
            {text}
          </TextAnswer>
          <List>
            <ItemList></ItemList>
          </List>
          <BtnContinue>Quiero</BtnContinue>
        </CardStyle>   
        </>
    )
}

export default Card;