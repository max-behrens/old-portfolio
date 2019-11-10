import React from 'react'
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'

import {
    Circle,
    HorizontalIcons,
    HoverContainer,
    Button,
    CardWrapper,
    Accent,

} from '../elements'

const TitleBar = styled.div`
display: grid;
width: 100%;
height: 20px;
grid-template-columns: 1fr 5fr;
color: ${props => props.theme.primary};
font-size: 0.9rem;
align-content: center;

background: linear-gradient(#ebebeb, #d5d5d5);
border-top: 1px solid #f3f1f3;
border-bottom: 1px solid #b1aeb1;
border-radius: 6px 6px 0px 0px;
padding: 0px 5px;

`;

const ProjectCard = ({ title, description, languages, github, url, image }) => (
    <CardWrapper borderRadius="6px" width="300px" height="320px">

        <TitleBar>

            <HorizontalIcons width="3rem" height="1rem">
                <Circle radius="0.75rem" color="#ff5c5c" />
                <Circle radius="0.75rem" color="#ffbd4c" />
                <Circle radius="0.75rem" color="#00ca56" />
            </HorizontalIcons>

            {title}

        </TitleBar>

        <BackgroundImage fluid={image} >
            <HoverContainer height="250px" width="300px">
                <p> <Accent>Tools : </Accent>{languages}</p>
                <p><Accent>Description : </Accent>{description}</p>
            </HoverContainer>

        </BackgroundImage>




        <HorizontalIcons width="300px" height="50px">
            <a href={github} target="_blank" rel="noopener noreferrer">

                <Button activeLink={github} height="30px" width="120px">Github</Button>
            </a>

            <a href={url} target="_blank" rel="noopener noreferrer">

                <Button activeLink={url} height="30px" width="120px">Live url</Button>
            </a>

        </HorizontalIcons>

    </CardWrapper>

)


export default ProjectCard