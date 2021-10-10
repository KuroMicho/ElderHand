import React, {useState} from 'react'

import { BtnSubmit, Field, Form, Label, TextForm, Arrow } from './style'
import arrow from '../../assets/img/Arrow.png'

const CardForm = ({labelText, placeHolder}) => {

    const [field, setField] = useState("")

    const handleChange= (event)=> {    
        setField(event.target.value) 
    }

    return (

            <Form>
                <Label>
                    <TextForm>{labelText}</TextForm>
                    <Arrow src={arrow}/>
                    <Field type="text"value={field}  onChange={handleChange} placeholder={placeHolder} />    
                </Label>
                <BtnSubmit>
                    Continuar
                </BtnSubmit>
            </Form>  

    )
}

export default CardForm
