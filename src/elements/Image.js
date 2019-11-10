import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'
import {
    Accent
} from "../elements"

const LandingImage = styled.div`
height: 100vh;
width: 100vw;
/* position: fixed; */




background: ${props => `
linear-gradient(
    ${props.theme.primaryOpacity},
    ${props.theme.primaryOpacity}
    ),
    url(${props.img}) no-repeat center center fixed
    `};
    background-size: cover;
    
    
    `;
    
    const HoverImage = styled(BackgroundImage)`
    height: ${props => props.height || "500px"};
    width:  ${props => props.width || "500px"};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-around;
    text-align: center;
    color: transparent; 
    
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
            background-color: ${props => props.theme.primary};
            
            color: ${props => props.theme.primaryText};
            
            ${Accent} {
                color: ${props => props.theme.secondary};
            }
        }
        
        `;
        
        export {
            LandingImage,
            HoverImage,
            
        }