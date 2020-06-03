const path = require('path');

// Create pages from markdown files                                                   Deleted everything and it changed nothing, so what is this file for??
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            allposts: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/allposts/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    category
                    featured
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }

            fictionarchive: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/allposts/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    category
                    featured
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }

            nonfictionarchive: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/allposts/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    category
                    featured
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }

            futurearchive: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/allposts/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    category
                    featured
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }

            issuesarchive: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/allposts/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    category
                    featured
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }

          }
        `,
      ).then((result) => {
        result.data.allposts.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/allposts.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });        
        const FICposts = result.data.fictionarchive.edges
        const FICpostsPerPage = 10
        const FICnumPages = Math.ceil(FICposts.length / FICpostsPerPage)
        Array.from({ length: FICnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/fiction` : `/fiction/${i + 1}`,
            component: path.resolve('src/templates/fictionarchive.js'),
            context: {
              limit: FICpostsPerPage,
              skip: i * FICpostsPerPage,
              FICnumPages,
              FICcurrentPage: i + 1,
            },
          });
        });
        const NONFICposts = result.data.nonfictionarchive.edges
        const NONFICpostsPerPage = 10
        const NONFICnumPages = Math.ceil(NONFICposts.length / NONFICpostsPerPage)
        Array.from({ length: NONFICnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/non-fiction` : `/non-fiction/${i + 1}`,
            component: path.resolve('src/templates/nonfictionarchive.js'),
            context: {
              limit: NONFICpostsPerPage,
              skip: i * NONFICpostsPerPage,
              NONFICnumPages,
              NONFICcurrentPage: i + 1,
            },
          });
        });
        const FUTposts = result.data.futurearchive.edges
        const FUTpostsPerPage = 10
        const FUTnumPages = Math.ceil(FUTposts.length / FUTpostsPerPage)
        Array.from({ length: FUTnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/future` : `/future/${i + 1}`,
            component: path.resolve('src/templates/futurearchive.js'),
            context: {
              limit: FUTpostsPerPage,
              skip: i * FUTpostsPerPage,
              FUTnumPages,
              FUTcurrentPage: i + 1,
            },
          });
        });
        const FULLposts = result.data.issuesarchive.edges
        const FULLpostsPerPage = 10
        const FULLnumPages = Math.ceil(FULLposts.length / FULLpostsPerPage)
        Array.from({ length: FULLnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/fullissues` : `/fullissues/${i + 1}`,
            component: path.resolve('src/templates/issuesarchive.js'),
            context: {
              limit: FULLpostsPerPage,
              skip: i * FULLpostsPerPage,
              FULLnumPages,
              FULLcurrentPage: i + 1,
            },
          });
        });
        resolve();
      }),
    );
  });
};


