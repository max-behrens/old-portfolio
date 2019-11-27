import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/ProjectCard";
import projectsImage from "../data/images/about-img.jpg"


import {
  SmallTitle,
  LandingImage,
  Accent,
  CenterX,
  CardLayout,
} from "../elements"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson{
      edges{
        node{
          title
          description
          languages
          github
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

  const projects = data.allProjectsJson.edges;
  return (
    <Layout>
      <SEO title="Projects"/>
      <LandingImage img = {projectsImage}>
      <CenterX>

        <SmallTitle> HTML PORTFOLIO ________ UNIT CONVERTER<Accent></Accent> </SmallTitle>

        <CardLayout>

          {projects.map(({ node: project }) => {
            const title = project.title;
            const description = project.description;
            const languages = project.languages;
            const github = project.github;
            const url = project.url;
            const image = project.image.childImageSharp.fluid;

            return (
              <ProjectCard
                title={title}
                description={description}
                languages={languages}
                github={github}
                url={url}
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

export default ProjectsPage