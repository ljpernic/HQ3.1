import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import CustomReactShare from "../components/CustomShareBlock";
import Helmet from 'react-helmet';
import paragraphs from "lines-to-paragraphs";

import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Eachissue = props => {
  const { pageContext } = props;
  const data = props.data;
  const { idpath, issueidname, text, artist, artistbio, artistTwitter } = pageContext;
  const twitter = `http://twitter.com/havenspec`;

  const twitterLink = `http://twitter.com/${artistTwitter}`;

  return (
    <Layout bodyClass="page-home">
      <SEO title={issueidname} />
      <Helmet>
        <meta
          name="Haven Spec Issue"
          content="Another awesome issue published by Haven Spec!"
        />
      </Helmet>

      <div className="intro">
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container">

            <div className="thinLeft">
              <div>
                    <Link to="">
                      <Image className="topImageLeft"
                        fixed={data.currentCover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                    <div className="text-center">
                      <Link className="buybutton button-primary" to="">
                        BUY THIS ISSUE
                      </Link>
                    </div>
                  </div>
                  <div className="justify-content-center">

                  <Link to="">
                      <Image className="advert mb-2 mt-6"
                        fixed={data.advert01.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="">
                      <Image className="advert mb-2"
                        fixed={data.advert02.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                  <Link to="">
                      <Image className="advert mb-2"
                        fixed={data.advert03.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                  </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                </div>

              <div className="wideRight">
                <div className="col-12">
                  <h4>
                    {issueidname}
                  </h4>
                  <hr />
                  
                  <div>
{                  <span style={{ padding: 0 }} dangerouslySetInnerHTML={{ __html: paragraphs(text) }} />}
                  <hr />
                  </div>

                  <div className="editorImageAbout">
                    <Image
                        fixed={data.markdownRemark.frontmatter.issue.artistimage.childImageSharp.fixed}
                    />
                          <a href={twitterLink}>
                            <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                              <FaTwitter />
                            </IconContext.Provider>
                          </a>
                    </div>

                    <h1 className="biotitle">
                      Cover Artist: <Link to="">
                        {artist}
                      </Link>
                    </h1>
                    <p>
                      {artistbio}
                    </p>
                    <hr />

                  <div className="share">
                    <h6>Share:</h6>
                    <CustomReactShare title={issueidname} excerpt={text} url={idpath} />
                  </div>
                  <hr />
                  
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
query($issueidname: String!) {
  currentCover: file(relativePath: {eq: "CurrentCover.jpg"}) {
    id
    childImageSharp {
      fixed(width:280) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  advert01: file(relativePath: {eq: "advertisement01.jpg"}) {
    id
    childImageSharp {
      fixed(width:280) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  advert02: file(relativePath: {eq: "advertisement02.jpg"}) {
    id
    childImageSharp {
      fixed(width:280) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  advert03: file(relativePath: {eq: "advertisement03.jpg"}) {
    id
    childImageSharp {
      fixed(width:280) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
    id
    childImageSharp {
      fixed(height:60) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  markdownRemark(frontmatter: {issue: {id: {eq: $issueidname}}}) {
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