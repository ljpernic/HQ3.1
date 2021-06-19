import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import CustomReactShare from "../components/CustomShareBlock";

import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Eachissue = props => {
  const { pageContext } = props;
  const { idpath, issueidname, text, artist, artistbio, artistimage, currentcover } = pageContext;
  const url = `http://havenspec.com/${idpath}`;
  const twitter = `http://twitter.com/havenspec`;


  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title={issueidname} />
      <div className="intro pb-0">                                                                {/*FICTION*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">

                  <h4 className="pb-1">{issueidname}</h4>
                  <hr />

                  <p>{text}</p>
                  <hr />

                  <div className="authorimagebottom">
                    <Image className=""
                      fluid={artistimage}            /*Author Image called here*/
                    />
                      <a href={twitter}>
                        <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                          <FaTwitter />
                        </IconContext.Provider>
                      </a>
                  </div>

                    <h1 className="biotitle"><Link to=""> {artist}</Link></h1>
                    <p>{artistbio}</p>
                    <hr />

                  <div className="share">
                    <h6>Share:</h6>
                    <CustomReactShare title={issueidname} excerpt={text} url={idpath} />
                  </div>

                  <hr />
              </div>


              </div>
              <div className="thin">
                <Link to="/">
                  <Image className="topimage"
                    fixed={currentcover}
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
              fixed(width: 150) {                                           #This changed the post picture sizes on the front page (originally 75)
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

export default Eachissue;