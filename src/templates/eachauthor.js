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
  const { pageContext } = props;
  const data = props.data;
  const { idname, bio, twitter, url, facebook, stories, poems } = pageContext;

//////// THIS SHOWS LINKS ONLY IF THERE IS RELEVANT CONTENT //////// 
  const twitterName = {twitter}.twitter;
  const facebookName = {facebook}.facebook;
  const urlName = {url}.url;

  const twitterLink = `https://www.twitter.com/${twitter}`;
  const facebookLink = `https://www.facebook.com/${facebook}`;
  const urlLink = `${url}`;

  const displayTwitter = twitterName === null ? null : <a className='social-icon' href={twitterLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const displayFacebook = facebookName === null ? null : <a className='social-icon' href={facebookLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const displayUrl = urlName === null ? null : <a className='social-icon' href={urlLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  return (
    <Layout bodyClass="page-home">
      <SEO title={`${idname}, Haven Spec Magazine`} image={SEO_image} />
      <Helmet>
        <script src={withPrefix('hide_script.js')} type="text/javascript" />
        <meta
          name={idname}
          content={idname}
        />
      </Helmet>
      <div className="intro">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className='one'>
                <CurrentIssue />
                <Advertisement />
              </div>
              <div>
                <div className="col-12">
                  <h4>
                    AUTHOR
                  </h4>
                <hr />
                </div>
{/*     AUTHOR IMAGE AND SOCIAL MEDIA     */}
                <div className="editorImageAbout mt-3">
                    <Image
                      fixed={data.markdownRemark.frontmatter.author.picture.childImageSharp.fixed}
                    />
                    <div className="side-block">
                      {displayTwitter}
                      {displayFacebook}
                      {displayUrl}
                    </div>
                  </div>
                    
                  <h1 className="pt-1 pb-1">
                    {idname}
                  </h1>
                  <span dangerouslySetInnerHTML={{ __html: paragraphs(bio) }} /><br />
                    {
                      stories[0].storytitle === null ? null : <h5> Fiction by {idname} </h5> 
                    }
                    {stories
                      .map((data, index) => stories[0].storytitle === null ? null : <li className='submitGuidelines' key={`content_storytitle_${index}`}>{data.storytitle}</li> )}<br />
                    {poems[0].poemtitle === null ? null : <h5> Poetry by {idname} </h5> }
                    {poems
                      .map((data, index) => poems[0].poemtitle === null ? null : <li className='submitGuidelines' key={`content_poemtitle_${index}`}>{data.poemtitle}</li>)}
                  <hr className="mb-2 mt-5"/>
                
                  <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}
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
    markdownRemark(frontmatter: {author: {id: {eq: $idname}}}) {
      frontmatter {
        available
        title
        path
        author {
          id
          bio
          twitter
          picture {
            childImageSharp {
              fixed(height: 200, width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
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
      }
      html
    }
  }
`;

export default Eachauthor;
