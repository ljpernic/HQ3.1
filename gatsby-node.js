const path = require('path');
const _ = require('lodash');
const fs = require("fs")
const yaml = require("js-yaml")

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const ymlAuthorDoc = yaml.load(fs.readFileSync("./src/data/author.yaml", "utf-8"))
  const ymlIssueDoc = yaml.load(fs.readFileSync("./src/data/issue.yaml", "utf-8"))
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            postContent: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/*/" } }
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
            archiveIssues: allMarkdownRemark(
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

            archiveAuthor: allMarkdownRemark(
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
        ymlAuthorDoc.forEach(element => {
          createPage({
            path: element.idpath,
            component: require.resolve("./src/templates/eachauthor.js"),                                    /*creates INDIVIDUAL AUTHOR PAGES*/
            context: {
              idname: element.id,
              bio: element.bio,
              twitter: element.twitter,
              picture: element.picture,
              stories: element.stories,
            },
          });
        });
        ymlIssueDoc.forEach(element => {
          createPage({
            path: element.idpath,
            component: require.resolve("./src/templates/eachissue.js"),                                    /*creates INDIVIDUAL ISSUE PAGES*/
            context: {
              issueidname: element.id,
              text: element.text,
              currentcover: element.currentcover,
              artist: element.artist,
              artistbio: element.artistbio,
              artistimage: element.artistimage,
              artistTwitter: element.artistTwitter,
            },
          });
        });
        result.data.postContent.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/eachpost.js');                                    /*creates INDIVIDUAL CONTENT PAGES*/
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.archiveIssues.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/eachpost.js');                      /*creates INIDIVUAL ISSUE PAGES; change template to change every issue page*/
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        const FICposts = result.data.postContent.edges.frontmatter.category === 'FICTION'                                   /*creates FICTION LIST PAGES*/
        const FICpostsPerPage = 10
        const FICnumPages = Math.ceil(FICposts.length / FICpostsPerPage)
        Array.from({ length: FICnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/fiction` : `/fiction/${i + 1}`,
            component: path.resolve('src/templates/archiveFiction.js'),
            context: {
              limit: FICpostsPerPage,
              skip: i * FICpostsPerPage,
              FICnumPages,
              FICcurrentPage: i + 1,
            },
          });
        });
        const POEposts = result.data.postContent.edges.frontmatter.category === 'POETRY'                                   /*creates POETRY LIST PAGES*/
        const POEpostsPerPage = 10
        const POEnumPages = Math.ceil(POEposts.length / POEpostsPerPage)
        Array.from({ length: POEnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/poetry` : `/poetry/${i + 1}`,
            component: path.resolve('src/templates/archivePoetry.js'),
            context: {
              limit: POEpostsPerPage,
              skip: i * POEpostsPerPage,
              POEnumPages,
              POEcurrentPage: i + 1,
            },
          });
        });
        const NONFICposts = result.data.postContent.edges.frontmatter.category === 'NON-FICTION'                                   /*creates NON-FICTION LIST PAGES*/
        const NONFICpostsPerPage = 10
        const NONFICnumPages = Math.ceil(NONFICposts.length / NONFICpostsPerPage)
        Array.from({ length: NONFICnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/non-fiction` : `/non-fiction/${i + 1}`,
            component: path.resolve('src/templates/archiveNonFiction.js'),
            context: {
              limit: NONFICpostsPerPage,
              skip: i * NONFICpostsPerPage,
              NONFICnumPages,
              NONFICcurrentPage: i + 1,
            },
          });
        });
        const FUTposts = result.data.postContent.edges.frontmatter.category === 'FUTURE'                                   /*creates NON-FICTION LIST PAGES*/
        const FUTpostsPerPage = 10
        const FUTnumPages = Math.ceil(FUTposts.length / FUTpostsPerPage)
        Array.from({ length: FUTnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/future` : `/future/${i + 1}`,
            component: path.resolve('src/templates/archiveFuture.js'),
            context: {
              limit: FUTpostsPerPage,
              skip: i * FUTpostsPerPage,
              FUTnumPages,
              FUTcurrentPage: i + 1,
            },
          });
        });
        const FULLposts = result.data.archiveIssues.edges                                   /*creates ISSUES LIST PAGES*/
        const FULLpostsPerPage = 10
        const FULLnumPages = Math.ceil(FULLposts.length / FULLpostsPerPage)
        Array.from({ length: FULLnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/fullissues` : `/fullissues/${i + 1}`,
            component: path.resolve('src/templates/archiveIssues.js'),
            context: {
              limit: FULLpostsPerPage,
              skip: i * FULLpostsPerPage,
              FULLnumPages,
              FULLcurrentPage: i + 1,
            },
          });
        });
        const AUTposts = result.data.archiveAuthor.edges
        const AUTpostsPerPage = 10
        const AUTnumPages = Math.ceil(AUTposts.length / AUTpostsPerPage)
        Array.from({ length: AUTnumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/contributors` : `/contributors/${i + 1}`,
            component: path.resolve('src/templates/archiveAuthor.js'),
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


