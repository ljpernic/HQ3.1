import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import paragraphs from "lines-to-paragraphs";

export default class Issuesarchive extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const json = this.props.data.allFeaturesJson.edges;
    const issueNodes = this.props.data.allIssueYaml.edges;

    const { FULLcurrentPage, FULLnumPages } = this.props.pageContext
    const isFirst = FULLcurrentPage === 1
    const isLast = FULLcurrentPage === FULLnumPages
    const prevPage = FULLcurrentPage - 1 === 1 ? "/" : `/fullissues/${FULLcurrentPage - 1}`
    const nextPage = `/fullissues/${FULLcurrentPage + 1}`
        
    return (
      <Layout bodyClass="page-home">
      <SEO title="Full Issues" />
      <Helmet>
        <meta
          name="description"
          content="Every issue of Haven Quarterly"
        />
      </Helmet>

    <div className="postbody">
      <div className="container pt-5 pb-5">
        <div className="row2 justify-content-start">
          <div className="col-12">
                <h3>Full Issues</h3>
            <hr />
          </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">

          {issueNodes.map(({ node: issue }, index) => (
                <div>                    
                  <Image className="topimage"
                    fixed={issue.currentcover.childImageSharp.fixed}            /*Where the image in the post on the front page is called*/
                  />
                  <h1 pb><Link to={issue.idpath}>{issue.id}</Link></h1>
                  <p dangerouslySetInnerHTML={{ __html: paragraphs(issue.text) }} />
                  <hr />
                </div>
              ))}
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <p className="text-left">
                      {!isFirst && (
                        <Link to={prevPage} rel="prev">
                          ← Previous Page
                        </Link>
                      )}
                    </p>
                  </div>            
                  <div className="col-sm">
                    <p className="text-center">
                      {Array.from({ length: FULLnumPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/fullissues/${i === 0 ? "" : i + 1}`}>
                          &nbsp;&nbsp;&nbsp;{i + 1}&nbsp;&nbsp;&nbsp;
                        </Link>
                      ))}
                    </p>
                  </div>
                  <div className="col-sm">
                    <p className="text-right">
                      {!isLast && (
                        <Link to={nextPage} rel="next">
                          Next Page →
                        </Link>
                      )}
                    </p>
                  </div>
                </div>         
              </div>
          </div>
        </div>
      </div>
    </div>

    </Layout>
    )
  }
}


export const fullissuesarchiveQuery  = graphql`
  query {
    allAuthorYaml {
      nodes {
        bio
        id
        idpath
        picture {
          childImageSharp {
            fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
              ...GatsbyImageSharpFixed 
            }
            fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories {
          item
        }
        twitter
      }
    }
    allIssueYaml {
      edges {
        node {
          artist
          artistbio
          id
          idpath
          text
          artistimage {
            childImageSharp {
              fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
          currentcover {
            childImageSharp {
              fixed(width: 250) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 300, maxHeight: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*.md$/" }}                  #This tells this file to pull from the md files generated by allposts?
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          html
          id
          frontmatter {
            featured
            path
            title
            author {
              id
              idpath
              bio
              twitter
              picture {
                childImageSharp {
                  fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            issue {
              id
              idpath
              currentcover {
                childImageSharp {
                  fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              text
              artist
              artistimage {
                childImageSharp {
                  fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              artistbio 
            }
            date(formatString: "DD MMMM YYYY")
            category
            currentcover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
          excerpt(
            pruneLength: 650
            )
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`