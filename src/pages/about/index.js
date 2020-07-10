import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const About = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const about = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="About" />
      <Helmet>
        <meta
          name="description"
          content="About page of Haven Quarterly"
        />
      </Helmet>

      <div className="postbody">
        <div className="container pt-5 pb-5">
          <div className="row2 justify-content-start">
            <div className="col-12">
                  <h3>About Us</h3>
              <hr />
            </div>
                                                                                        {/*this is where the blog stuff should go for stories getting posted*/}
            <div className="container">
              <p>
                This is where we have information about our website...
              </p>
              <p>
                We also have to collate staff. It can just live here!
              </p>
  {/*            <p>
                Awards
              </p>*/}
              <p>
                Advertising?
              </p>
              <p>
                Contact
              </p>
              <p>
                Privacy Policy
              </p>
              <p>
                Anti-harassment policy
              </p>
              <p>
                About this website
              </p>
  {/*}            {posts
                .filter(post => post.node.frontmatter.category === "about")
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

    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/" } }             #This tells the /about page to look at md files in the src folder
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

export default About;
