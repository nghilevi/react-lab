import styled from "styled-components";
import {Link as ReactRouterDomLink, useLocation} from 'react-router-dom'

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
    // default mobile view
    display: flex;
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;

    @media (min-width: 768px){
        display: flex;
        position: relative;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
        background: none;
        left: initial;
        top: initial;
    }
`

// we dont want to pass isActive to the normal Link/ReactRouterDomLink component
// the isActive will then never be set on Link component
// this is to avoid 
const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
    )
}

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
`

export function Header(){
    const {pathname} = useLocation()

    return(
        <HeaderWrapper>
            <Menu>
                <StyledLink to="/" isActive={pathname === '/'}>Home</StyledLink>
                <StyledLink to="/login" isActive={pathname === '/login'}>Login</StyledLink> 
            </Menu>
        </HeaderWrapper>
    )
}