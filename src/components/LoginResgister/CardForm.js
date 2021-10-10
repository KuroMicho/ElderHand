import React, {useState} from 'react'
import { BtnContinue, Container } from '../CardArchectype/style'
import { Field, Form, Label, TextForm } from './style'

const CardForm = ({labelText, placeHolder}) => {

    const [field, setField] = useState("")

    const handleChange= (event)=> {    
        setField(event.target.value) 
    }

    return (
        <Container>
            <Form>
                <Label>
                    <TextForm>Ingresa tu {labelText} en el siguiente campo</TextForm>

                    <Field type="text"value={field}  onChange={handleChange} placeholder={placeHolder} />    
                </Label>
                <BtnContinue>
                    Continuar
                </BtnContinue>
            </Form>  
        </Container>
    )
}

export default CardForm
