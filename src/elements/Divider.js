import styled from "styled-components"


const Divider = styled.hr`

margin: 1rem auto;
opacity: 0.2;
width: ${props => props.width || "75%"};
background-color: ${props => props.color || props.theme.primary};
`;


export default Divider;