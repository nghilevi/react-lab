import styled from "styled-components";
import {Link} from 'react-router-dom'

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-color: #eee;
`

const Menu = styled.nav`
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    font-family: 'Open Sans';
    background: none;
    left: initial;
    top: initial;
`

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
`

export function Header(){
    return(
        <HeaderWrapper>
            <Menu>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/login">Login</StyledLink> 
            </Menu>
        </HeaderWrapper>
    )
}