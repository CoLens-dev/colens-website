import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { createGlobalStyle } from "styled-components"
import LinkedInIcon from "../../static/images/linkedin.inline.svg";
import MailIcon from "../../static/images/mail.inline.svg";

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

const icon = {
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
          <a href="mailto:colens3@gmail.com"> <MailIcon style={icon}/></a>
          <div style={letsTalk}>|</div>
          <a href="https://linkedin.com/company/colens"> <LinkedInIcon style={icon}/></a>
        </footer>
      </div>
  )
}

export default IndexPage
