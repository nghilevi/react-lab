import {PageLayout, Input, PasswordInput, Button, Spinner} from 'components/common'
import styled from 'styled-components'
import { useEffect, useState } from 'react';

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;

    .alt-text{
        text-align: center;
    }

    >${Button}{ // ref direct child component
        margin-top: 40px;
    }

    >${Input}{
        margin-top: 20px;
    }

`

let timeout;

export default function Login(){
    const [formFields, setFormFields] = useState({username: '', password: ''})
    const [loading, setLoading] = useState(false)

    function handleInputChange(e){

        //  access event object’s properties after the event handler has run, you need to call e.persist(). only relevant for React 16-
        e.persist(); // we're going to be using the event in a callback fn within setFormFields
        
        setFormFields(s => ({ // using callback to retrieve current state
            ...s,
            [e.target.name]: e.target.value // override value
        }))
    }

    function handleSubmit(e){
        e.preventDefault() // dont want page to refresh
        setLoading(true)
        timeout = setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    /* 
    lets say we set loading state and then navigate away from this page
    then we're going to get an error because this component is no longer mounted
    */
    useEffect(() => {
        return () => { // this fn will only be returned when the component unmounted
            if(timeout){
                clearTimeout(timeout)
            }
        }
    }, []) // only run when the component mounts

    return (
        <PageLayout>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                {loading ? <Spinner/> : 
                <>  
                    <span>Login if you have an account</span>    
                    <Input
                        value={formFields.username}
                        onChange={handleInputChange}
                        type="text"
                        name="username" placeholder="Username" />
                    <PasswordInput
                        value={formFields.password}
                        onChange={handleInputChange}
                        name="password" />  
                </>
                }
                <Button large type="submit" disabled={loading}> 
                        {loading ? 'Loading...' : 'Login'}
                    </Button>  
                {!loading && 
                <>
                    <div className="alt-text">or</div>
                    <Button secondary type="button"> 
                        Register
                    </Button>
                </>
                }
                
            </Form>
        </PageLayout>
    )
}