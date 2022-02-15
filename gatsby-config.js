require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Flavorite Places',
    author: 'Douglas Odell',
    social: {
      instagram: 'https://www.instagram.com/itsnebulose/',
      instagramHandle: 'itsnebulose'
    },
    menuLinks:[
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'Places',
        link: '/places',
      },
      {
        name: 'about',
        link: '/about',
      }
    ],
    socialLinks:[
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/itsnebulose/',
      }
    ]
  },
  plugins: [
		{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-156977765-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 200,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
		{
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2e94reghz8w0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				// accessToken: `P8LfgzM7FSBE1X43ZvKseeJnWdGvbaHaMKOI26vB4bY`,
			},
    },
  ],
}
