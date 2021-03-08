const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Haven Quarterly',
    description: 'a magazine of science fiction and fantasy',
    submit: {
      phone: 'XXX XXX XXX',
      email: 'havenquarterly@gmail.com',
    },
    menuLinks: [
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Fiction',
        link: '/fiction',
      },
      {
        name: 'Non-fiction',
        link: '/non-fiction',
      },
//      {
//        name: 'Letters from the Future',
//        link: '/future',
//      },
      {
        name: 'Issues',
        link: '/fullissues',
      },
      {
        name: 'Contributors',
        link: '/contributors',
      },
      {
        name: 'Support',
        link: '/subscribe',
      },
      {
        name: 'Submit',
        link: '/submit',
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
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
/*    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },*/
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
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 95, 
            },
          },
        ], 
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
  `gatsby-transformer-yaml`,
  ],
  mapping: {
    // 3. map author to author.yaml
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
    "MarkdownRemark.frontmatter.issue": `IssueYaml`,
  },
};
