import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';

export default class Fictionarchive extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const json = this.props.data.allFeaturesJson.edges;
    const data = this.props.data;
    
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

      <div className="intro pb-0">                                                                {/*FICTION*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <h4 className="pb-1">FICTION</h4>
                  <hr />
                </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">

          {posts
              .filter(post => post.node.frontmatter.category === "FICTION")          /*This should only pull from md files with category "fiction", excluding posts marked featured*/
              .map(({ node: post }) => {
                return (
                  <div className="pb-1 container" key={post.id}>
                      <h1 className="pt-1">
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
                      <span dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.shortdescription) }} />
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
          <div className="thin">
          <div>
            <Link to="">
              <Image className="topimage"
                fixed={data.image.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
              />
            </Link>
            <div className="text-center">
              <Link className="buybutton button-primary" to="">
                BUY THIS ISSUE
              </Link>
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
    image: file(relativePath: {eq: "CurrentCover.jpg"}) {
      id
      childImageSharp {
        fixed(width:300) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
      filter: { frontmatter: {category:{eq:"FICTION"} } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 750)
          html
          id
          frontmatter {
            category
            featured
            path
            title
            description
            shortdescription
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
                  fixed(width: 300) {                                           #This changed the post picture sizes on the front page (originally 75)
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
                fixed(width: 300) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cover {
              childImageSharp {
                fixed(width: 300) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
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
