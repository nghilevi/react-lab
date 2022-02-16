import styled, {css} from 'styled-components'

const largeStyles = ({large}) => { // large is the prop
    if(large){
        return css`
            padding: 10px;
            border-radius: 5px;
            font-size: 1.5em;
        `
    }else{
        return css`
            padding: 8px;
            border-radius: 4px;
            font-size: 1em;
        `
    }
}

const backgroundBtn = ({secondary, theme}) => secondary ? theme.secondaryColor : theme.primaryColor

const Button = styled.button`
    color: white;
    background: ${backgroundBtn};
    font-weight: bold;
  
    ${largeStyles}

    box-shadow: none;
    border: none;
    width: 100%;
    display: block;
    white-space: none;
    &:disabled{
        background: #eee;
        color: #666
    }
`

export {Button}