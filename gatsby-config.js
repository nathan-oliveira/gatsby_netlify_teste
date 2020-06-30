module.exports = {
  siteMetadata: {
    title: `Web Site`,
    description: `Lorem Ipsum`,
    author: `@gatsbyjs`,
    copyright: `© Copyright - All rights Reserved`,
    siteUrl: `https://www.example.com`,
    socialMedia: {
      github: 'https://github/nathan-oliveira',
      codepen: 'https://codepen.io',
      facebook: 'https://www.facebook.com'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PayCoo`,
        short_name: `PayCoo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
