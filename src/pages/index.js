import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import homeImage from "../data/images/home-img.jpg"
import { useStaticQuery, graphql } from "gatsby";

import {
  LandingImage,
  LargeTitle,
  Accent,
  CenterXY,
  Paragraph,
  Divider,
  LandingPageIcons,
  MailIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  FileIcon,
} from "../elements"



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    dataJson{
      email
      github
      twitter
      linkedIn
      resume{
        publicURL
        name
      }
    }
  }
  `);
  const links = data.dataJson;

  return (
    <Layout>
      <SEO title="Home" />
      <LandingImage img={homeImage}>
        <CenterXY height="100vh" width='100vw'>

          <LargeTitle>Hello <Accent>World</Accent></LargeTitle>

          <Paragraph>
            I'm James, a Computer Science student with a passion for web development.
    </Paragraph>

          <Divider />

          <LandingPageIcons width="500px" >
            <a href={links.email}><MailIcon /></a>
            <a href={links.github} target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
            <a href={links.twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href={links.linkedIn} target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            <a href={links.resume.publicURL} target="_blank" rel="noopener noreferrer"><FileIcon /></a>


          </LandingPageIcons>

        </CenterXY>

      </LandingImage>
    </Layout>
  );
}

export default IndexPage
