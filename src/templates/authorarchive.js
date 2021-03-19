import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';

export default class Authorarchive extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const json = this.props.data.allFeaturesJson.edges;
    const data = this.props.data;
    const people = this.props.data.allAuthorYaml.edges;
    

    const { AUTcurrentPage, AUTnumPages } = this.props.pageContext
    const isFirst = AUTcurrentPage === 1
    const isLast = AUTcurrentPage === AUTnumPages
    const prevPage = AUTcurrentPage - 1 === 1 ? "/" : `/contributors/${AUTcurrentPage - 1}`
    const nextPage = `/contributors/${AUTcurrentPage + 1}`
       
    return (
      <Layout bodyClass="page-home">
      <SEO title="Contributors" />
      <Helmet>
        <meta
          name="description"
          content="Every contributor to Haven Spec"
        />
      </Helmet>

      <div className="intro pb-0">                                                                {/*CONTRIBUTORS*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <h4 className="pb-1">CONTRIBUTORS</h4>
                  <hr />
                </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">

          {people.map(({ node: author }, index) => (
                <div>                    
                  <Image className="authorimage"
                    fluid={author.picture.childImageSharp.fluid}            /*Where the image in the post on the front page is called*/
                  />
                  <h1 pb><Link to={author.idpath}>{author.id}</Link></h1>
                  <p dangerouslySetInnerHTML={{ __html: paragraphs(author.bio) }} />
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
                      {Array.from({ length: AUTnumPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/contributors/${i === 0 ? "" : i + 1}`}>
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

export const authorarchiveQuery = graphql`
  query authorarchiveQuery($skip: Int!, $limit: Int!) {
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
      edges {
        node {
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
              fluid(maxWidth: 200, maxHeight: 200) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
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
                  fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 200) {                                        #This changed the post picture sizes on the front page (originally 75)
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








