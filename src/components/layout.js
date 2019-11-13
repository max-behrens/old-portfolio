import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import  { ThemeProvider } from "styled-components"
import Header from './Header'

const theme = {

  primary: 'rgb(101,57,52)',
  primaryOpacity: 'rgba(253,155,105,0.1)',
  primaryText: 'white',
  secondary: 'rgb(247,213,173)',
  secondaryText: 'rgb(247,213,173)',
  mobileMenuOpacity: '0.50',
  mobileBreakpoint: '700px',

  iconMixin: (size, color, breakpoint) => `
  color: ${color};
  width: ${size};
  height: ${size};
  @media(max-width:${breakpoint}){
    width: calc(${size}/2);
    height: calc(${size}/2);
  }
  `,

  easeOut: (time) => `
  transition: all ease-in-out ${time}s;
  `,

  hoverColorMixin: (color, time) => `
  &:hover{
    color: ${color};
    transition: all ease-in-out ${time}s;
  }
  `,

}




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          menuLinks{
            name
            link
          }
         
        }
      }
    }
  `)

  return (

    <ThemeProvider theme={theme}>

      <div>
        <Header title = {data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks}/>
        <main>{children}</main>

      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout