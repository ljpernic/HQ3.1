import React from 'react';  
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import CustomReactShare from "../components/CustomShareBlock";

const Eachauthor = props => {
  const { pageContext } = props;
  const { idpath, issueidname, text, artist, artistbio, artistimage, currentcover } = pageContext;
  const url = `http://havenspec.com${idpath}`;
  const twitter = `http://twitter.com/havenspec`;

  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title={issueidname} />
      
      
      <div className="intro pb-0">
        <div className="container pb-md-4">
          <div className="row2 pt-0 pb-3 justify-content-start">
            <div className="grid-container pt-2">
              <div className="wide">
                <div className="col-12">


                  <hr />
                  <p>{issueidname}</p>
                  <p>{text}</p>
                  <hr />
                  <Image className="inlineimage"
                              fluid={artistimage}          /*This should pull image from md files with category "fiction"*/
                            />


                  <h3>{artist}</h3>
                  <p>{artistbio}</p>

<hr />
                  
                  <div className="share">
                    <h6>Share:</h6>
                  </div>

                  <hr />

                </div>
              </div>

              <div className="thin">
                <Link to="/">
                  <Image className="topimage"
                    fixed={currentcover}      /*This pulls the image from the md file with featured: true (current cover)*/
                  />
                </Link>
                      
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
        category
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
      }
      html
    }
  }
`;

export default Eachauthor;
