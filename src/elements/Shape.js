import styled from "styled-components"


const Circle = styled.div `
  height: ${props => props.radius || "50px"};
  width:  ${props => props.radius || "50px"};
  background-color: ${props => props.color || "white"};
  border-radius: 50%;
`;


export{
    Circle,
}