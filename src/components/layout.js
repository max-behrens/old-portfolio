import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import  { ThemeProvider } from "styled-components"
import Header from './Header'

const theme = {

  primary: 'rgb(80,57,52)',
  primaryOpacity: 'rgba(253,100,105,0.2)',
  primaryText: 'white',
  secondary: 'rgb(189,86,84)',
  secondaryText: 'rgb(130,70,84)',
  mobileMenuOpacity: '1',
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