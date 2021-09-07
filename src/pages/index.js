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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 80%;
  visibility: hidden;

  @media screen and (max-width: 480px) {
    visibility: visible;
  }
`

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #FFC115;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`

const LetsConnectContainer = styled.div`
  display: flex;
  padding-left: 20px;

  @media screen and (max-width: 780px) {
    padding-left: 0;
  }
`

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

const Copyright = styled.div`
  display: flex;
  padding-right: 20px;
  align-items: center;

  @media screen and (max-width: 780px) {
    padding-right: 0;
    padding-top: 15px;
  }
`


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
        <Footer>
          <LetsConnectContainer>
            <div style={letsConnectText}> LET'S CONNECT </div>
            <div style={separator}/>
            <a href="mailto:colens3@gmail.com"> <MailIcon style={icon}/></a>
            <div style={separator}/>
            <a href="https://linkedin.com/company/colens"> <LinkedInIcon style={icon}/></a>
          </LetsConnectContainer>
          <Copyright>
            <small>&copy; Copyright {new Date().getFullYear()}, CoLens, All Rights Reserved</small>
          </Copyright>
        </Footer>

        <CookieConsent
          overlay
          location="bottom"
          buttonText="Accept"
          buttonStyle={{background: "#FFC115", borderRadius: "3px"}}
          enableDeclineButton="True"
          declineButtonText="Decline"
          declineButtonStyle={{background: "#353535"}}
          style={{fontSize: "14px", lineHeight: 1.6}}
          cookieName="gatsby-gdpr-google-analytics"
          onAccept={() => {
            initializeAndTrack(location) 
          }}>
          This website stores cookies on your computer. These cookies are used to collect information about how you interact with this website.
          We use this information for analytics and metrics about our visitors on this website. If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
        </CookieConsent>
      </>
  )
}

export default IndexPage
