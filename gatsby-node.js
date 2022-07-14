const path = require('path');
const _ = require('lodash');
const fs = require("fs")
const yaml = require("js-yaml")

//////// MAKES THE VARIOUS RESOURCES FROM GRAPHQL AND CREATEPAGES AVAILABLE ////////
exports.createPages = ({ graphql, actions }) => {                                                         // Makes the createPages and graphQL functionality available. 
  const { createPage } = actions;
  const ymlAuthorDoc = yaml.load(fs.readFileSync("./src/data/author.yaml", "utf-8"))                      // Makes the author data in the author.yaml file available.
  const ymlIssueDoc = yaml.load(fs.readFileSync("./src/data/issue.yaml", "utf-8"))                        // Makes the issue data in the issue.yaml file available.
  return new Promise((resolve, reject) => {                                                               // Makes these fragments available from the markdown files.
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
                    author {
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

//////// CREATES PAGES FOR EACH AUTHOR IN THE YAML FILE, BASED ON THE EACHAUTHOR TEMPLATE AND USING THE VALUES IN THE YAML //////
      ).then((result) => {
        ymlAuthorDoc.forEach(element => {                                                                   // For each entry on the author yaml file,  
          createPage({                                                                                      //// it creates a page using 
            path: element.idpath,                                                                           //// the path provided in the yaml file and
            component: require.resolve("./src/templates/eachauthor.js"),                                    //// the template make available here.
            context: {                                                                                      // As it creates the page, it passes to the created page 
              idname: element.id,                                                                           //// all of the named elements listed here, each of which 
              bio: element.bio,                                                                             //// corresponds to a field in the yaml file.
              twitter: element.twitter,
              url: element.url,
              facebook: element.facebook,
              picture: element.picture,
              stories: element.stories,
              poems: element.poems,
            },
          });
        });

//////// CREATES PAGES FOR EACH ISSUE IN THE YAML FILE, BASED ON THE EACHISSUE TEMPLATE AND USING THE VALUES IN THE YAML //////
        ymlIssueDoc.forEach(element => {
          createPage({
            path: element.idpath,
            component: require.resolve("./src/templates/eachissue.js"),
            context: {
              issueidname: element.id,
              text: element.text,
              issuecover: element.issuecover,
              artist: element.artist,
              artistbio: element.artistbio,
              artistimage: element.artistimage,
              artistTwitter: element.artistTwitter,
            },
          });
        });

//////// SETS UP EMPTY ARRAYS THAT EACH POST WILL BE PUSHED TO DEPENDING ON TYPE. //////// 
//////// WE NEED THIS TO CALCULATE LENGTH OF EACH CATEGORY! ////////
        var allFiction = [];                                                                    // Creates an array to push the inidividual fiction data to.
        var allPoetry = [];                                                                     // Creates an array to push the inidividual poetry data to.
        var allNonFiction = [];                                                                 // Creates an array to push the inidividual non-fiction data to.
        var allIssuesWithDuplicates = [];                                                       // Creates an array to push the inidividual issue data to.
        var allAuthorsWithDuplicates = [];                                                      // Creates an array to push the inidividual issue data to.

//////// LOOPS THROUGH EACH ITEM IN THE POSTCONTENT DATA AND CREATES A PAGE FOR EACH NODE ////////
        result.data.postContent.edges.forEach(({ node }) => {                                   // For each node of fiction, poetry, and non-fiction, do the following:

          const component = path.resolve('src/templates/eachpost.js');                          //// make the individual template for each post available and 
          createPage({                                                                          //// create the individual post page  
            path: node.frontmatter.path,                                                        //// using the path in its markdown file.
            component,
            context: {
              id: node.id,
            },
          });

//////// TURNS THE FRONTMATTER VALUES FROM EACH NODE INTO AN OBJECT AND SORTS IT BY CATEGORY////////
          var individualPost = JSON.parse(JSON.stringify(node.frontmatter));                  // For each post, create an array of its frontmatter values with keypairs.
          var postCategory = individualPost.category;                                         // Assigns the specific category of the post to postCategory.
          var postIssue = individualPost.issue;                                               // Assigns the specific issue of the post to postIssue.
          var postAuthor = individualPost.author;                                             // Assigns the specific issue of the post to postIssue.

            allIssuesWithDuplicates.push(postIssue)                                           // Pushes all issue data of specific node to array, including duplicates.
            allAuthorsWithDuplicates.push(postAuthor)                                         // Pushes all author data of specific node to array, including duplicates.

            if (postCategory === 'FICTION')                                                   // If the category is fiction, 
              {
                allFiction.push(individualPost)                                               //// it pushes the array to the allFiction array.
              } 
                else if (postCategory === 'POETRY')                                           // It does the same for poetry
                  {
                    allPoetry.push(individualPost)
                  } 
                    else if (postCategory === 'NON-FICTION')                                  //// and non-fiction.
                      {
                        allNonFiction.push(individualPost)
                      }
                        else 
                          {
                            postCategory === null                                             //// And if it is none of the above, it sets the category to null.
                          }
        });

//////// FILTERS THE ISSUE ARRAY SO THERE'S ONLY ONE OF EACH ISSUE ////////
        let seenIssue = new Set();
        const allIssues = allIssuesWithDuplicates.filter(oneIssue => {
          const duplicate = seenIssue.has(oneIssue.id);
          seenIssue.add(oneIssue.id);
          return !duplicate;
        });
        

//////// FILTERS THE AUTHOR ARRAY SO THERE'S ONLY ONE OF EACH AUTHOR ////////
        let seenAuthor = new Set();
        const allAuthors = allAuthorsWithDuplicates.filter(oneAuthor => {
          const duplicate = seenAuthor.has(oneAuthor.id);
          seenAuthor.add(oneAuthor.id);
          return !duplicate;
        });

//////// SETS UP THE PAGINATION FOR EACH PAGE TYPE ////////
        const postsPerPage = 10
        const fictionPagination = Math.ceil(allFiction.length / postsPerPage)
        const poetryPagination = Math.ceil(allPoetry.length / postsPerPage)
        const nonFictionPagination = Math.ceil(allNonFiction.length / postsPerPage)
        const issuePagination = Math.ceil(allIssues.length / postsPerPage)
        const authorPagination = Math.ceil(allAuthors.length /postsPerPage)

//////// CREATES ARCHIVE PAGES, WITH EACH PAGE CONTAINING NO MORE THAN 10 ENTRIES ////////
        Array.from({ length: fictionPagination }).forEach((_, i) => {                           // Fiction pagination
          createPage({
            path: i === 0 ? `/fiction` : `/fiction/${i + 1}`,
            component: path.resolve('src/templates/archiveFiction.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              fictionPagination,
              FICcurrentPage: i + 1,
            },
          });
        });

        Array.from({ length: poetryPagination }).forEach((_, i) => {                           // Poetry pagination
          createPage({
            path: i === 0 ? `/poetry` : `/poetry/${i + 1}`,
            component: path.resolve('src/templates/archivePoetry.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              poetryPagination,
              POEcurrentPage: i + 1,
            },
          });
        });

        Array.from({ length: nonFictionPagination }).forEach((_, i) => {                       // Non-fiction pagination
          createPage({
            path: i === 0 ? `/non-fiction` : `/non-fiction/${i + 1}`,
            component: path.resolve('src/templates/archiveNonFiction.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              nonFictionPagination,
              NONFICcurrentPage: i + 1,
            },
          });
        });

        Array.from({ length: issuePagination }).forEach((_, i) => {                           // Issue pagination
          createPage({
            path: i === 0 ? `/all-issues` : `/all-issues/${i + 1}`,
            component: path.resolve('src/templates/archiveIssues.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              issuePagination,
              FULLcurrentPage: i + 1,
            },
          });
        });

        Array.from({ length: authorPagination }).forEach((_, i) => {                         // Author pagination
          createPage({
            path: i === 0 ? `/contributors` : `/contributors/${i +1}`,
            component: path.resolve('src/templates/archiveAuthor.js'),
            context: {
              limit:postsPerPage,
              skip: i *postsPerPage,
              authorPagination,
              AUTcurrentPage: i + 1,
            },
          });
        });
        resolve();
      }),
    );
  });
};


