import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';


export default class Fictionarchive extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const json = this.props.data.allFeaturesJson.edges;
    
    const { FICcurrentPage, FICnumPages } = this.props.pageContext
    const isFirst = FICcurrentPage === 1
    const isLast = FICcurrentPage === FICnumPages
    const prevPage = FICcurrentPage - 1 === 1 ? "/" : `/fiction/${FICcurrentPage - 1}`
    const nextPage = `/fiction/${FICcurrentPage + 1}`
       
    return (
      <Layout bodyClass="page-home">
      <SEO title="Fiction" />
      <Helmet>
        <meta
          name="description"
          content="all fiction of Haven Spec"
        />
      </Helmet>

      <div className="postbody pb-4">
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="col-12">
                  <h4 className="pt-3 pb-1">FICTION</h4>

            <hr />
          </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">

          {posts
              .filter(post => post.node.frontmatter.category === "fiction")
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}            /*Where the image in the post on the front page is called*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
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
                      {Array.from({ length: FICnumPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/fiction/${i === 0 ? "" : i + 1}`}>
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

export const fictionarchiveQuery = graphql`
  query fictionarchiveQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: {category:{eq:"fiction"} } }
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
            author {
              id
              idpath
              bio
              twitter
              picture {
                childImageSharp {
                  fixed(width: 400) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 400, maxHeight: 400) {                                        #This changed the post picture sizes on the front page (originally 75)
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
                  fixed(width: 350) {                                           #This changed the post picture sizes on the front page (originally 75)
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