import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// styles
const logoStyles = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%'
}

const IndexPage = () => {
  return (
    <StaticImage src="../../static/images/logo.jpg" alt="CoLens" style={logoStyles}/>
  )
}

export default IndexPage
