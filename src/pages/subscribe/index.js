import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';



const Subscribe = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const subscribe = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  const data = props.data;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Subscribe" />
      <Helmet>
        <meta
          name="description"
          content="Subscribe page of Haven Spec"
        />
      </Helmet>

      <div className="intro pb-0">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <h4 className="pb-1">SUBSCRIBE AND SUPPORT</h4>

                  <hr />
                </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">
            <p>
              Subscribe... Subscribe... Subscribe... Subscribe... Subscribe... Subscribe... Subscribe... Subscribe... 
              Subscribe... Subscribe... Subscribe... Subscribe... Subscribe... Subscribe... Subscribe... Subscribe... 
            </p>
            <p>
              Patreon...
            </p>
            <p>
              KoFi
            </p>
            <p>
              Advertising?
            </p>
            <p>
              Kickstarters...
            </p>
            <p>
              Award nominations...
            </p>

{/*            {posts
              .filter(post => post.node.frontmatter.category === "subscribe")
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}            
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By  <Link to="/"> {post.frontmatter.author.id}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}*/}

            </div>
        </div>
        <div className="thin">
              {posts
                  .filter(post => post.node.frontmatter.featured === true)                     /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      <div>
                        <Link to="/latest">
                           <Image className="topimage"
                           fixed={data.image.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                         />

                        </Link>
                        <div className="text-center">
                            <Link className="buybutton button-primary" to={post.frontmatter.path}>
                              BUY THIS ISSUE
                            </Link>
                          </div>
                        </div>
                      )
                    })}
              </div>
              </div>
              </div>
      </div>
    </div>
    </Layout>
  );
};

export const query = graphql`
  query SubscribeQuery {
    image: file(relativePath: {eq: "CurrentCover.png"}) {
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            category
            featured
            path
            title
            author {
              id
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
`;

export default Subscribe;
