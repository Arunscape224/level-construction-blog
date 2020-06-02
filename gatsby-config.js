/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `Level Construction & Design`,
    description: `Level Construction & Design was originally developed as a labor company for quality installations of natural stone, tile and hardwood flooring. This solid foundation and high rate of customer satisfaction has led Level Construction & Design to expand it's network throughout the Midwest.`,
    author: `@levelconstructionanddesign`,
    siteUrl: `https://www.levelconstructiondesign.com`,
    keywords: ["Level", "Construction", "Design", "Surface", "Group", "International", "Installation", "Natural Stone"]
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mq9pxrzhf3cy`,
        accessToken: process.env.CONTENTFUL_KEY
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // your another plugins
  ]
};