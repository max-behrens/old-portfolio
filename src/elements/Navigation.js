import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
display: inline-block;
padding: 18px 20px;
font-size: 20px;
color: white;
cursor: pointer;
${props => props.theme.hoverColorMixin(`${props.theme.secondary}`, 0.5)}

@media (max-width: ${props => props.theme.mobileBreakpoint}){
    display: block;
    text-align: center;
    width: 100%
}

`;


const Nav = styled.nav`
grid-area: Nav;
justify-self: end;
${props => props.theme.easeOut(0.5)};

@media (max-width: ${props => props.theme.mobileBreakpoint}){
    top: 0;
    padding: 0;
    width: 100%;
    height: auto;
    max-height: ${(props) => props.showMenu ? "100vh" : "0"} ;
    overflow: hidden;
    position: absolute;
    justify-items: center;
    background-color: rgb(68,68,68);
    opacity: ${props => props.theme.mobileMenuOpacity};
    
}
`;

const NavTogglerLine = styled.div`
width: 28px;
height: 3px;
background-color: ${(props) => props.showMenu ? props.theme.secondary : "white"};
margin: 6px 0;
padding: 0;

${props => props.theme.easeOut(0.5)};


&:nth-child(1){
    transform: ${(props) => props.showMenu ? "translateY(8px) scale(0.75) rotate(45deg)" : "none"} ;
}

&:nth-child(2){
    background-color: ${(props) => props.showMenu ? "transparent" : "white"} ;
}

&:nth-child(3){
    transform: ${(props) => props.showMenu ? "translateY(-10px) scale(0.75) rotate(-45deg)" : "none"} ;
}
`;

const NavToggler = props => (
    <MenuIcon onClick={props.handleClick}>
        <NavTogglerLine showMenu={props.showMenu} />
        <NavTogglerLine showMenu={props.showMenu} />
        <NavTogglerLine showMenu={props.showMenu} />
    </MenuIcon>
)

const MenuIcon = styled.button`
    
    grid-area: NavToggler;
    
    display: none;
    
    @media (max-width: ${props => props.theme.mobileBreakpoint}){
        height: 40px;
        display: block;
        padding: 0 5px;
        outline: none;
        border: none;
        margin-right: 20px;
        background-color: transparent;
        cursor: pointer;
        justify-self: end;
    }
    
    
    
    `;

const NavBrand = styled(Link)`
    grid-area: NavbarBrand;
    margin-left: 20px;
    font-size: 20px;
    color: white;
    `;

const Navbar = styled.header`
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-areas: "NavbarBrand Nav";
    align-items: center;
    background-color: rgb(68,68,68);
    /* background-color: ${(props) => props.darkenNav ? "rgb(68,68,68)" : "none"} ; */
    
    
    @media (max-width: ${props => props.theme.mobileBreakpoint}){
        grid-template-areas: "NavbarBrand NavToggler" "Nav Nav";
        grid-template-rows: 60px auto;
    }
    
    `;



export {
    Nav,
    NavLink,
    NavToggler,
    NavBrand,
    Navbar,
}