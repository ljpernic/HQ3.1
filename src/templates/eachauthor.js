import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
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
      <div className="intro">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className='one'>
                <CurrentIssue />
                <Advertisement />
              </div>
              <div className='ml-4 mr-4 mb-4'>
                <div className="col-12">
                  <h4>
                    AUTHOR
                  </h4>
                  <hr />
                </div>
                {/* AUTHOR IMAGE AND SOCIAL MEDIA */}
                <div className="editorImageAbout">
                  <Image
                    fixed={author.picture.childImageSharp.fixed}
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

                <h1 className="pt-1 pb-1">
                  {author.id}
                </h1>
                <span dangerouslySetInnerHTML={{ __html: paragraphs(author.bio) }} /><br />

               {/* Render Fiction section if there are stories */}
                {author.stories && author.stories[0].storytitle !== null && (
                  <>
                    <h5> Fiction by {idname} </h5>
                    {author.stories.map((data, index) => (
                      <li className='submitGuidelines' key={`content_storytitle_${index}`}>{data.storytitle}</li>
                    ))}
                  </>
                )}

                {/* Render Poetry section if there are poems */}
                {author.poems && author.poems[0].poemtitle !== null && (
                  <>
                    <h5> Poetry by {idname} </h5>
                    {author.poems.map((data, index) => (
                      <li className='submitGuidelines' key={`content_poemtitle_${index}`}>{data.poemtitle}</li>
                    ))}
                  </>
                )}

                <hr className="mb-2 mt-5"/>

                <Link to="/subscribe">
                  <Image className="advertLong"
                    fixed={advertLong.childImageSharp.fixed}
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
  query($idname: String!) {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
              fixed(height: 200, width: 200) {
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 150, maxHeight: 150) {
                ...GatsbyImageSharpFluid
              }
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
              fixed(width: 200) {
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 150, maxHeight: 150) {
                ...GatsbyImageSharpFluid
              }
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
