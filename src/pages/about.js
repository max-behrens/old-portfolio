import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutImage from "../data/images/about-img.jpg"
import logoImage from "../data/images/logo.png"
import AboutCard from "../components/AboutCard";



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


      <SmallTitle> <Accent>About Me</Accent> </SmallTitle>

      <SmallParagraph>
      <Accent>I have graduated from the University of Liverpool with an Honours Degree
         in Mathematics and Computer Science, having studied problem solving techniques
          in computational and mechanical systems and created data handling and other
           applications for client companies. Among these is the Liverpool-based
            tutoring establishment Academy International, where I also have three years'
             experience in teaching maths and physics to GCSE and A-level students.
             I have developed projects in JavaScript, having used different frameworks such as React 
             and Flutter; and am designing a prototype for a 3D combat game in C# using Unity. </Accent>
      </SmallParagraph>

      <Divider />

      <SmallTitle> <Accent></Accent> </SmallTitle>

      



      <CardLayout>
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

      



      </CardLayout>

    </CenterX>
    </LandingImage>

  </Layout>

);
        }
      

export default AboutPage