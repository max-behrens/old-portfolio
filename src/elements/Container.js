import styled from "styled-components"
import {
  Accent
} from "../elements"

const CenterX = styled.div`
width: 100vw;
padding: 5vh 2vh;
text-align: center;
`;

const CardLayout = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 1rem;
margin: 0;
justify-items: center;




`;

const CardWrapper = styled.div`

height: ${props => props.height || "50px"};
width:  ${props => props.width || "50px"};
padding:  ${props => props.padding || "0px"};
background-color: ${props => props.color || "white"};
border-radius: ${props => props.borderRadius || "50px"};
box-shadow: 0px 0px 20px black;



`;

const CenterXY = styled(CenterX)`
height: ${props => props.height || "100px"};
width: ${props => props.width || "100px"};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const HoverContainer = styled(CenterXY)`
color: transparent;
padding: 0;
justify-content: space-around;
${Accent}{
  color : transparent;
  
}

&:hover{
  background: ${props => `
  linear-gradient(
    ${props.theme.primaryOpacity},
    ${props.theme.primaryOpacity}
    )
    `};
    
    color: ${props => props.theme.primaryText};
    
    ${Accent} {
      color: ${props => props.theme.secondary};
    }
  }
  `;


export {
  CenterX,
  CenterXY,
  CardLayout,
  CardWrapper,
  HoverContainer,
};