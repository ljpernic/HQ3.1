import React from 'react';  
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';

const Eachauthor = props => {
  const { pageContext } = props;
  const { idname, bio, twitter, picture } = pageContext;
  const { title } = props.data.markdownRemark.frontmatter;
  const { author } = props.data.markdownRemark.frontmatter;
  const { issue } = props.data.markdownRemark.frontmatter;
  const { currentcover } = props.data.markdownRemark.frontmatter;
  const { category } = props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark;

  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title="Fiction" />
      <Helmet>
        <meta
          name="description"
          content="all fiction of Haven Quarterly"
        />
      </Helmet>

      <div className="intro pb-1">
        <div className="container">
          <div className="row2 pt-0 pb-3 justify-content-start">
            <div className="grid-container pt-2">
              <div className="wide">
              <h4>{idname}</h4>
              <hr />
                <h2>{bio}</h2>
                <h2>{twitter}</h2>
              </div>
              <div className="thin">
                      
                      <div className="col-12 text-center pb-3">
                  <Link className="button button-primary" to="/about">
                    About
                  </Link>
                  <Link className="button button-primary" to="/support">
                    Support
                  </Link>
                  <Link className="button button-primary" to="/submit">
                    Submit
                  </Link>
                  </div>



              </div>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark {
      frontmatter {
        title
        path
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
        issue
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
      }
      html
    }
  }
`;

export default Eachauthor;
