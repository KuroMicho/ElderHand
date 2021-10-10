import React from "react";

import {
  PostContainer,
  Posted,
  ContainerDesc,
  Title,
  Descripcion,
  Img,
} from "./style";

const Post = ({ title, desc, image, children }) => {
  return (
    <Posted>
      <Img src={image} />
      <ContainerDesc>
        <Title>{title}</Title>
        <Descripcion>{desc}</Descripcion>
        {children}
      </ContainerDesc>
    </Posted>
  );
};

export default Post;
