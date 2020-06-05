import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';

export default class Issuesarchive extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const json = this.props.data.allFeaturesJson.edges;
    
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
      <div className="container pt-md-5">
        <div className="row2 justify-content-start">
          <div className="col-12">
                <h3>Full Issues</h3>
            <hr />
          </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">

          {posts
              .filter(post => post.node.frontmatter.category === "issue")
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.currentcover.childImageSharp.fluid}            /*Where the image in the post on the front page is called*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By  <Link to="/"> {post.frontmatter.author}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}
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

    <div className="postbody">
      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row2 justify-content-start">
          <div className="col-12">
          <Link to="/">
                <h3>Latest Issues</h3>
            </Link>
            <hr />
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-cover">
                    <Link to="/">               
                      <img src={withPrefix(edge.node.image)} />
                    </Link>
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    </Layout>
    )
  }
}

export const fullissuesarchiveQuery = graphql`
  query issuesarchiveQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: {category:{eq:"issue"} } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 750)    
          frontmatter {
            category
            featured
            path
            title
            author
            issue
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp {
                fixed(width: 322) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 450) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            currentcover {
              childImageSharp {
                fixed(width: 322) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 450) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
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