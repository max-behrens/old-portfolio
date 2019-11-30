import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutImage from "../data/images/about-img.jpg"
import logoImage from "../data/images/logo.png"
import AboutCard from "../components/AboutCard";
import AboutCardTwo from "../components/AboutCardTwo"



import {
  
  SmallTitle,
  Accent,
  LandingImage,
  CenterX,
  SmallParagraph,
  Paragraph,
  Divider,
  CardLayout,
  CardWrapper,
} from "../elements"

const AboutPage = () => {

const data = useStaticQuery(graphql`
  {
    allAboutJson{
      edges{
        node{
          description
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }	
            }
          }
        }
      }
    }
  }
  `);

  const about = data.allAboutJson.edges;
  return (


  <Layout>

    <SEO title="About" />
    <LandingImage img={aboutImage}>

    <CenterX>

      <SmallTitle> <Accent></Accent>About Me </SmallTitle>

      <SmallParagraph>
      <Accent>I am a third year computer science and mathematics undergraduate
         studying at the University of Liverpool. I study problem solving techniques
         in computational and mechanical systems, and have created various projects
         such as data handling applications for companies for their organisational gain.
         
         Outside of STEM based research, I have created digital art for various clients. </Accent>
      </SmallParagraph>

      <Divider />

      <SmallTitle> <Accent></Accent> </SmallTitle>

      



      <CardLayout>

        <CardWrapper color="transparent" width="900px" height="350px" borderRadius="20px" padding="10px">
        {about.map(({ node: about }) => {
            const description = about.description;
            const image = about.image.childImageSharp.fluid;

            return (
              <AboutCard
                description={description}
                image={image}
              />
            )

          })}

        </CardWrapper>

      



      </CardLayout>

    </CenterX>
    </LandingImage>

  </Layout>

);
        }
      

export default AboutPage