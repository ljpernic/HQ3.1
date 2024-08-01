const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Haven Spec Magazine',
    description: 'Fiction for the 21st Century!',
    siteUrl: 'https://www.havenspec.com',
    submit: {
      phone: 'XXX XXX XXX',
      email: 'havenspec@gmail.com',
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
        name: 'Poetry',
        link: '/poetry',
      },
      {
        name: 'Non-fiction',
        link: '/non-fiction',
      },
//      {
//        name: 'Letters',
//        link: '/future',
//      },
      {
        name: 'Issues',
        link: '/all-issues',
      },
      {
        name: 'Contributors',
        link: '/contributors',
      },
      {
        name: 'Subscribe',
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
              quality: 80, 
            },
          },
        ], 
      },
    },
  `gatsby-transformer-yaml`,
  ],
  mapping: {
    // 3. map author to author.yaml
    "MarkdownRemark.frontmatter.authors": `AuthorYaml`,
    "MarkdownRemark.frontmatter.issue": `IssueYaml`,
  },
};
