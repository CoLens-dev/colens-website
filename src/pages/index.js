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

const footer = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: "#FFC115",
  display: "flex",
  flexDirection: "row",
  padding: "20px",
}

const separator = {
  fontSize: "20px",
  padding: "0 10px"
}

const icon = {
  padding: "0 20px",
  width: "25px"
}


const IndexPage = () => {
  return (
      <>
        <GlobalStyle/>
        <StaticImage src="../../static/images/logo.jpg" alt="CoLens" style={logoStyles}/>
        <footer style={footer}>
          <a href="mailto:colens3@gmail.com"> <MailIcon style={icon}/></a>
          <div style={separator}>|</div>
          <a href="https://linkedin.com/company/colens"> <LinkedInIcon style={icon}/></a>
        </footer>
      </>
  )
}

export default IndexPage
