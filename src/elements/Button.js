import styled from "styled-components"

const Button = styled.button`
height: ${props => props.height || "50px"};
width:  ${props => props.width || "50px"};
cursor: ${props => props.activeLink === null ? "not-allowed" : "pointer"};
opacity: ${props => props.activeLink === null ? "0.5" : "1"};
background-color:${props => props.color || props.theme.primary};
color: white;
border-radius: 5px;
border: none;
outline:none;
font-size: 1rem;

${props => props.theme.hoverColorMixin(`${props.theme.secondary}`, 0.5)}


`;

export {
    Button,
}