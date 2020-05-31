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
        resolve();
      }),
    );
  });
};


