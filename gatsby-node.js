const path = require('path');
const _ = require('lodash');
const fs = require("fs")
const yaml = require("js-yaml")

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const ymlDoc = yaml.safeLoad(fs.readFileSync("./src/data/author.yaml", "utf-8"))
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            
            fictionarchive: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/fiction/" } }
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
              filter: { fileAbsolutePath: { regex: "/non-fiction/" } }
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
              filter: { fileAbsolutePath: { regex: "/letters/" } }
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

            authorarchive: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/" } }
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
        ymlDoc.forEach(element => {
          createPage({
            path: element.idpath,
            component: require.resolve("./src/templates/eachauthor.js"),
            context: {
              idname: element.id,
              bio: element.bio,
              twitter: element.twitter,
              picture: element.picture,
              stories: element.stories,
            },
          })
        })
        result.data.fictionarchive.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/allposts.js');                      /*creates INIDIVUAL FICTION PAGES*/
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.nonfictionarchive.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/allposts.js');                      /*creates INIDIVUAL NON-FICTION PAGES*/
        createPage({
          path: node.frontmatter.path,
          component,
          context: {
            id: node.id,
          },
        });
      });
        result.data.futurearchive.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/allposts.js');                      /*creates INIDIVUAL LETTER PAGES*/
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.issuesarchive.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/allposts.js');                      /*creates INIDIVUAL ISSUE PAGES; change template to change every issue page*/
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        const FICposts = result.data.fictionarchive.edges                                   /*creates FICTION LIST PAGES*/
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
        const NONFICposts = result.data.nonfictionarchive.edges                             /*creates NON-FICTION LIST PAGES*/
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
        const FUTposts = result.data.futurearchive.edges                                   /*creates LETTERS FROM THE FUTURE LIST PAGES*/
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
        const FULLposts = result.data.issuesarchive.edges                                   /*creates ISSUES LIST PAGES*/
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
        const AUTposts = result.data.authorarchive.edges
        const AUTpostsPerPage = 10
        const AUTnumPages = Math.ceil(AUTposts.length / AUTpostsPerPage)
        Array.from({ length: AUTnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/contributors` : `/contributors/${i + 1}`,
            component: path.resolve('src/templates/authorarchive.js'),
            context: {
              limit: AUTpostsPerPage,
              skip: i * AUTpostsPerPage,
              AUTnumPages,
              AUTcurrentPage: i + 1,
            },
          });
        });
        resolve();
      }),
    );
  });
};


