import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Submit = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const submit = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Submit" />
      <Helmet>
        <meta
          name="description"
          content="Submit page of Haven Quarterly"
        />
      </Helmet>

      <div className="postbody">
        <div className="container pt-5 pb-5">
        <div className="row2 justify-content-start">
          <div className="col-12">
                <h3>Submit</h3>
            <hr />
          </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">
            <p>
              We are currently <strong>closed</strong> to submissions, but we hope to open soon! Follow us on social media and sign up for our newsletter
              if you want to know just when. (Or do what we do with other magazines and obsessively check the submission page! It's all gravy!)
            </p>
            <p>
              Guidelines for Fiction
              --Scooby Doo endings...
            </p>
            <p>
              Guidelines for Non-Fiction
            </p>
            <p>
              Guidelines for Letters from the Future
            </p>
            <p>
              Guidelines for Reprints
            </p>
            <p>
              Guidelines for Art
            </p>
            <p>
              Guidelines for how not to be a terrible person
            </p>

{/*}            {posts
              .filter(post => post.node.frontmatter.category === "submit")
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <hr />
                  </div>
                )
              })}*/}

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
  );
};

export const query = graphql`
  query SubmitQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/" } }             #This tells the /submit page to look at md files in the src folder
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

export default Submit;

