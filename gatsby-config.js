const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Gatsby Serif',
    description: 'my theme',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'zerostaticthemes@gmail.com',
    },
    menuLinks: [
      {
        name: 'Full Issues',
        link: '/fullissues',
      },
      {
        name: 'Fiction',
        link: '/fiction',
      },
      {
        name: 'Non-fiction',
        link: '/non-fiction',
      },
      {
        name: 'Letters from the Future',
        link: '/future',
      },
      {
        name: 'Art and Covers',
        link: '/artandcovers',
      },
      {
        name: 'Contributors',
        link: '/contributors',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
