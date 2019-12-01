import React from 'react'
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'

import {
    Circle,
    HoverContainer,
    CardWrapper,
    Accent,
    Paragraph,

} from '../elements'


const AboutCard = ({description, github, image }) => (
    <CardWrapper borderRadius="6px" width="429px" height="401px">
   
        <BackgroundImage fluid={image} >
            <HoverContainer height="393px" width="0px">
               
            </HoverContainer>

        </BackgroundImage>

     

    </CardWrapper>
    
    

    

)



export default AboutCard