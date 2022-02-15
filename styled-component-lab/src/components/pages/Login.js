import {PageLayout, Input, PasswordInput} from 'components/common'
import styled from 'styled-components'
import { useState } from 'react';

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;
`

export default function Login(){
    const [formFields, setFormFields] = useState({username: '', password: ''})

    function handleInputChange(e){

        //  access event object’s properties after the event handler has run, you need to call e.persist(). only relevant for React 16-
        e.persist(); // we're going to be using the event in a callback fn within setFormFields
        
        setFormFields(s => ({ // using callback to retrieve current state
            ...s,
            [e.target.name]: e.target.value // override value
        }))
    }

    return (
        <PageLayout>
            <h1>Login</h1>
            <Form>
                <Input
                    value={formFields.username}
                    onChange={handleInputChange}
                    type="text"
                    name="username" placeholder="Username" />
                <PasswordInput
                    value={formFields.password}
                    onChange={handleInputChange}
                    name="password" />
            </Form>
        </PageLayout>
    )
}