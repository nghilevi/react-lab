import { useState } from 'react'
import styled from 'styled-components'
import {Input} from './Input'

const PasswordInputWrapper = styled.div`
    display: flex;
`

const PasswordInputStyled = styled(Input).attrs(() => ({ // pass a callback that returns an object containing any attributes that we want to pass down to this particular component
    type: 'password',
    placeholder: 'Password'
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`
const ToggleButton = styled.div`
    height: 32px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 4px;
    border-left:0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: white;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    color: black;
`

export function PasswordInput(props){
    const [showPassword, setShowPassword] = useState(false)

    return(
        <>
            <PasswordInputWrapper>
                <PasswordInputStyled {...props} />
                <ToggleButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'}
                </ToggleButton>
            </PasswordInputWrapper>
            <div> 
                {showPassword ? props.value : ''}
            </div> 
        </>
    )
}