const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.colens.space",
    title: "CoLens",
    description: "Software development company, turning light bulbs into awesome code",
    url: "https://www.colens.space",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/icon.png",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Montserrat`]
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: `UA-206612752-1`,
          cookieName: `gatsby-gdpr-google-analytics`,
          head: true
        },
        hotjar: {
          hjid: `2586490`,
          hjsv: `6`,
          cookieName: `gatsby-gdpr-hotjar`,
        },
        environments: [`production`, `development`]
      },
    },
  ],
};
