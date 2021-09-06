import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import CookieConsent from 'react-cookie-consent';
import LinkedInIcon from "../../static/images/linkedin.inline.svg";
import MailIcon from "../../static/images/mail.inline.svg";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: "Montserrat";
  }
`

// styles
const LogoContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  @media screen and (max-width:632px) {
    width: 100%;
  }
`

const footer = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: "#FFC115",
  display: "flex",
  flexDirection: "row",
  padding: "20px 40px",
}

const separator = {
  borderLeft: "2px solid black",
  margin: "0 30px",
}

const icon = {
  display: "flex",
  width: "30px",
  height: "30px",
  justifyContent: "center"
}


const IndexPage = () => {
  const location = useLocation()
  return (
      <>
        <GlobalStyle/>
        <LogoContainer>
          <StaticImage src="../../static/images/logo.jpg" alt="CoLens"/>
        </LogoContainer>
        <footer style={footer}>
          <a href="mailto:colens3@gmail.com"> <MailIcon style={icon}/></a>
          <div style={separator}/>
          <a href="https://linkedin.com/company/colens"> <LinkedInIcon style={icon}/></a>
        </footer>

        <CookieConsent
          overlay
          location="bottom"
          buttonText="Accept"
          buttonStyle={{background: "#FFC115", borderRadius: "3px"}}
          enableDeclineButton="True"
          declineButtonText="Decline"
          declineButtonStyle={{background: "#353535"}}
          cookieName="gatsby-gdpr-google-analytics"
          onAccept={() => {
            initializeAndTrack(location) 
          }}>
          This website stores cookies on your computer. <br/>These cookies are used to collect information about how you interact with this website.
          We use this information for analytics and metrics about our visitors on this website.
          <br/>If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
        </CookieConsent>
      </>
  )
}

export default IndexPage
