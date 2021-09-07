import * as React from "react"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import CookieConsent from 'react-cookie-consent';
import LinkedInIcon from "../../static/images/linkedin.inline.svg";
import MailIcon from "../../static/images/mail.inline.svg";
import LogoIconScreen from "../../static/images/logo-screen.inline.svg"
import LogoIconMobile from "../../static/images/logo-mobile.inline.svg"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: "Montserrat";
  }
`

// styles
const LogoContainerScreen = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: visible;
  width: 40%;

  @media screen and (max-width:768px) {
    visibility: visible;
    width: 60%;
  }

  @media screen and (max-width:480px) {
    visibility: hidden;
  }
`

const LogoContainerMobile = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  visibility: hidden;

  @media screen and (max-width: 480px) {
    visibility: visible;
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

const letsConnectText = {
  display: "flex",
  alignItems: "center"
}

const separator = {
  borderLeft: "1px solid black",
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
        <LogoContainerScreen>
          <LogoIconScreen></LogoIconScreen>
        </LogoContainerScreen>
        <LogoContainerMobile>
          <LogoIconMobile></LogoIconMobile>
        </LogoContainerMobile>
        <footer style={footer}>
          <div style={letsConnectText}> LET'S CONNECT </div>
          <div style={separator}/>
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
