module.exports = {
  pathPrefix: "/colens-website",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CoLens",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-206612752-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.jpg",
      },
    },
  ],
};
