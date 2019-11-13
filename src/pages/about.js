import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutImage from "../data/images/about-img.jpg"


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

const AboutPage = props => (
  <Layout>

    <SEO title="About" />
    <LandingImage img={aboutImage}>

    <CenterX>

      <SmallTitle>About <Accent>Me</Accent> </SmallTitle>

      <SmallParagraph>
        I'm James, a student currently studying Computer Science at Liverpool University.
        I enjoy producing high-qulaity and efficient applications that fuel engagement with users.
      </SmallParagraph>

      <Divider />

      <SmallTitle>My <Accent>Tools</Accent> </SmallTitle>

      



      <CardLayout>

        <CardWrapper color="transparent" width="300px" height="350px" borderRadius="20px" padding="10px">
          <Paragraph>Languages</Paragraph>
          <Divider />
          <SmallParagraph>HTML / CSS / Sass</SmallParagraph>
          <SmallParagraph>JavaScript</SmallParagraph>
          <SmallParagraph>React / Gatsby</SmallParagraph>
          <SmallParagraph>Python</SmallParagraph>
          <SmallParagraph>R</SmallParagraph>
          <SmallParagraph>Java</SmallParagraph>
          <SmallParagraph>Flutter / Dart</SmallParagraph>


        </CardWrapper>

        <CardWrapper color="transparent" width="300px" height="350px" borderRadius="20px" padding="10px">
          <Paragraph>Tools</Paragraph>
          <Divider />
          <SmallParagraph>Git / Github</SmallParagraph>
          <SmallParagraph>Gulp</SmallParagraph>
          <SmallParagraph>GraphQL</SmallParagraph>

        </CardWrapper>



      </CardLayout>

    </CenterX>
    </LandingImage>

  </Layout>
)

export default AboutPage