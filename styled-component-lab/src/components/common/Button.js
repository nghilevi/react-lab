import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

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
/*
    as our components grow, we may get lost in all these styles 
    and not know what props we can actually pass into the styled component
    -> documenting

    for each of our props that we can pass into this button, we want to pass as a key to this obj
*/
Button.propTypes = {
    large: PropTypes.bool,
    secondary: PropTypes.bool
}

export {Button}