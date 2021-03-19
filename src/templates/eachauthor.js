import React from 'react';  
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';

const Eachauthor = props => {
  const { pageContext } = props;
  const { idname, bio, twitter, picture, stories } = pageContext;
  
  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title="Fiction" />
      <Helmet>
        <meta
          name="description"
          content="all fiction of Haven Spec"
        />
      </Helmet>

      <div className="authorbody">
        <div className="container md-5">
          <div className="row2 pt-0 pb-3 justify-content-start">
            <div className="grid-container pt-2">
              <div className="wide">
              <h4>AUTHOR</h4>
              <hr />
                {picture}

              <h3>{idname}</h3>
                <h2>{bio}</h2>
                <h2>{twitter}</h2>
                <p>{stories.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}</p>
              </div>
              <div className="thin">
                                                                              {/*Where the image should go for the current cover*/}

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
      }
      html
    }
  }
`;

export default Eachauthor;
