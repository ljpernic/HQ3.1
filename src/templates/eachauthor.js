import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Advertisement from '../components/advertisement';
import CurrentIssue from '../components/CurrentIssue';

import { IconContext } from "react-icons";
import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';

const Eachauthor = props => {
  const { markdownRemark, advertLong } = props.data;
  const { idname } = props.pageContext;
  const { frontmatter, html } = markdownRemark;

  // Find the author object based on idname
  const author = frontmatter.authors.find(author => author.id === idname);
//  console.log("author: " + JSON.stringify(author))

  if (!author) {
    // Handle case where author with idname is not found
    return (
      <Layout bodyClass="page-home">
        <div>
          <h1>Author Not Found</h1>
          <p>The author you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout key={author.id} bodyClass="page-home">
      <SEO title={`${author.id}, Haven Spec Magazine`} image={SEO_image} alt="Haven Spec Magazine, Author Page Image" />
      <Helmet>
        <script src={withPrefix('hide_script.js')} type="text/javascript" />
        <meta
          name={author.id}
          content={author.id}
        />
      </Helmet>
      <div className="main-body">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className='one'>
                <CurrentIssue />
                <Advertisement />
              </div>
              <div>
                <div className='title-static-border'>
                  <h4>AUTHOR</h4>
                </div>

                {/* AUTHOR IMAGE AND SOCIAL MEDIA */}

                <div className='bio-bottom-margin' style={{borderBottom:'none'}}>
                  <div className="content-div-dynamic" style={{borderBottom:'none'}}>
                    <div className="editorImageAbout">
                      <GatsbyImage
                        image={getImage(author.picture)}
                        alt="Author picture"
                      />
                  <div className="side-block">
                    {author.twitter && (
                      <a className='social-icon' href={`https://www.twitter.com/${author.twitter}`}>
                        <IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}>
                          <FaTwitter />
                        </IconContext.Provider>
                      </a>
                    )}
                    {author.facebook && (
                      <a className='social-icon' href={`https://www.facebook.com/${author.facebook}`}>
                        <IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}>
                          <FaFacebook />
                        </IconContext.Provider>
                      </a>
                    )}
                    {author.url && (
                      <a className='social-icon' href={author.url}>
                        <IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}>
                          <FaLink />
                        </IconContext.Provider>
                      </a>
                    )}
                  </div>
                    </div>
                  <h3 className='title-static-no-border-inline'>
                    {author.id}
                  </h3>
                  <span dangerouslySetInnerHTML={{ __html: paragraphs(author.bio) }} /><br />

               {/* Render Fiction section if there are stories */}
                {author.stories && author.stories[0].storytitle !== null && (
                  <>
                    <h5 className="title-static-no-border" style={{width:'100%', textAlign:'left'}}> Fiction by {idname} </h5>
                    {author.stories.map((data, index) => (
                      <li className='submitGuidelines' key={`content_storytitle_${index}`}>{data.storytitle}</li>
                    ))}
                  </>
                )}

                {/* Render Poetry section if there are poems */}
                {author.poems && author.poems[0].poemtitle !== null && (
                  <>
                    <h5 className="title-static-no-border" style={{width:'100%', textAlign:'left', marginTop:'40px'}}> Poetry by {idname} </h5>
                    {author.poems.map((data, index) => (
                      <li className='submitGuidelines' key={`content_poemtitle_${index}`}>{data.poemtitle}</li>
                    ))}
                  </>
                )}
                  </div>
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
  query($idname: String!) {
    markdownRemark(frontmatter: {authors: {elemMatch: {id: {eq: $idname}}}}) {
      frontmatter {
        available
        title
        path
        authors {
          id
          idpath
          bio
          twitter
          facebook
          url
          picture {
            childImageSharp {
              gatsbyImageData(
                height: 200
                width: 200
                placeholder: BLURRED
                layout: FIXED
              )
            }
          }
          stories {
            storytitle
          }
          poems {
            poemtitle
          }
        }
        issue {
          id
          idpath
          text
          artist
          artistimage {
            childImageSharp {
              gatsbyImageData(
                height: 200
                width: 200
                placeholder: BLURRED
                layout: FIXED
              )
            }
          }
          artistbio 
        }
        category
      }
      html
    }
  }
`;

export default Eachauthor;
