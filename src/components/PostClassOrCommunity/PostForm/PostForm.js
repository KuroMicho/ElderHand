import React  from "react";
import { FieldImg, FieldTitle,FieldDesc, Form, BtnSubmit, Label } from "./style";

const PostForm = ()=>{
    return (
        <>
            <Form>
                <Label>
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
    )
}

export default PostForm

