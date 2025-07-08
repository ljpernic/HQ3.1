const path = require('path');
const _ = require('lodash');
const fs = require("fs")
const yaml = require("js-yaml")
require('events').defaultMaxListeners = 50;

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
              filter: { fileAbsolutePath: { regex: "/content/" } }
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
                    issue {
                      id
                    }
                    authors {
                      id
                    }
                    issuecover
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
            component: require.resolve("./src/templates/eachauthor.js"),                                    
            context: {                                                                                      
              idname: element.id,                                                                           
              bio: element.bio,                                                                             
              twitter: element.twitter,
              url: element.url,
              facebook: element.facebook,
              picture: element.picture,
              stories: element.stories,
              poems: element.poems,
            },
          });
        });

        ymlIssueDoc.forEach(element => {
          createPage({
            path: element.idpath,
            component: require.resolve("./src/templates/eachissue.js"),
            context: {
              issueidname: element.id,
              text: element.text,
              issuecover: element.issuecover,
              issueUrl: element.issueUrl,
              artist: element.artist,
              artistbio: element.artistbio,
              artistimage: element.artistimage,
              artistTwitter: element.artistTwitter,
              artistFacebook: element.artistFacebook,
              artistUrl: element.artistUrl,
            },
          });
        });

        // Arrays to store unique issues, authors, and categorized posts
        var allFiction = [];                                                                    
        var allPoetry = [];                                                                     
        var allNonFiction = [];                                                                 
        var allIssuesWithDuplicates = [];                                                       
        var allAuthorsWithDuplicates = [];                                                      
        
        // Iterate through each markdown node
        result.data.postContent.edges.forEach(({ node }) => {                                   
          const component = path.resolve('src/templates/eachpost.js');                          
          createPage({                                                                          
            path: node.frontmatter.path,                                                        
            component,
            context: {
              id: node.id,
            },
          });

          var individualPost = JSON.parse(JSON.stringify(node.frontmatter));                  
          var postCategory = individualPost.category;                                         
          var postIssue = individualPost.issue;                                               
          var postAuthors = individualPost.authors;                                             

          allIssuesWithDuplicates.push(postIssue);
          allAuthorsWithDuplicates.push(...postAuthors);                                     

          if (postCategory === 'FICTION') {
            allFiction.push(individualPost);
          } else if (postCategory === 'POETRY') {
            allPoetry.push(individualPost);
          } else if (postCategory === 'NON-FICTION') {
            allNonFiction.push(individualPost);
          }
        });

        // Deduplicate issues and authors
        const seenIssue = new Set();
        const allIssues = allIssuesWithDuplicates.filter(oneIssue => {
          const duplicate = seenIssue.has(oneIssue.id);
          seenIssue.add(oneIssue.id);
          return !duplicate;
        });

        const seenAuthor = new Set();
        const allAuthors = allAuthorsWithDuplicates.filter(oneAuthor => {
          const duplicate = seenAuthor.has(oneAuthor.id);
          seenAuthor.add(oneAuthor.id);
          return !duplicate;
        });

        const postsPerPage = 10
        const fictionPagination = Math.ceil(allFiction.length / postsPerPage)
        const poetryPagination = Math.ceil(allPoetry.length / postsPerPage)
        const nonFictionPagination = Math.ceil(allNonFiction.length / postsPerPage)
        const issuePagination = Math.ceil(allIssues.length / postsPerPage)
        const authorPagination = Math.ceil(allAuthors.length /postsPerPage)

        const createArchivePages = (category, pagination) => {
          Array.from({ length: pagination }).forEach((_, i) => {                           
            createPage({
              path: i === 0 ? `/${category.toLowerCase()}` : `/${category.toLowerCase()}/${i + 1}`,
              component: path.resolve('src/templates/archiveContent.js'),
              context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                pagination,
                currentPage: i + 1,
                category: category.toUpperCase(),
              },
            });
          });
        };

        createArchivePages('fiction', fictionPagination);
        createArchivePages('poetry', poetryPagination);
        createArchivePages('non-fiction', nonFictionPagination);

        Array.from({ length: issuePagination }).forEach((_, i) => {                           
          createPage({
            path: i === 0 ? `/all-issues` : `/all-issues/${i + 1}`,
            component: path.resolve('src/templates/archiveIssues.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              issuePagination,
              issueCurrentPage: i + 1,
            },
          });
        });

        Array.from({ length: authorPagination }).forEach((_, i) => {                         
          createPage({
            path: i === 0 ? `/contributors` : `/contributors/${i +1}`,
            component: path.resolve('src/templates/archiveAuthor.js'),
            context: {
              limit:postsPerPage,
              skip: i *postsPerPage,
              authorPagination,
              authorCurrentPage: i + 1,
            },
          });
        });
        resolve();
      }),
    );
  });
};
