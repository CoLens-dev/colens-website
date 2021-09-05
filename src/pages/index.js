import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { createGlobalStyle } from "styled-components"
import LinkedInIcon from "../../static/images/linkedin.inline.svg";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: "Montserrat";
  }
`

// styles
const logoStyles = {
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '40%'
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
}

const content = {
  flex: "1"
}

const footer = {
  backgroundColor: "#FFC115",
  display: "flex",
  flexDirection: "row",
  padding: "20px"
}

const letsTalk = {
  fontSize: "20px",
  padding: "0 10px"
}

const linkedIn = {
  padding: "0 10px",
  width: "25px"
}


const IndexPage = () => {
  return (
      <div style={container}>
        <GlobalStyle/>
        <div style={content}>
          <StaticImage src="../../static/images/logo.jpg" alt="CoLens" style={logoStyles}/>
        </div>
        <footer style={footer}>
          <div style={letsTalk}>Let's connect !</div>
          <div style={letsTalk}>|</div>
          <div style={letsTalk}>colens3@gmail.com</div>
          <div style={letsTalk}>|</div>
          <a href="https://linkedin.com/company/colens"> <LinkedInIcon style={linkedIn}/></a>
        </footer>
      </div>
  )
}

export default IndexPage
