import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Advertisement from '../components/advertisement';

import { IconContext } from "react-icons";
import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';

const Eachpost = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { author } = data.markdownRemark.frontmatter;
  const { issue } = data.markdownRemark.frontmatter;
  const { category } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;


//////// THIS SHOWS LINKS ONLY IF THERE IS RELEVANT CONTENT //////// 
const twitterName = author.twitter;
const facebookName = author.facebook;
const urlName = author.url;

const twitterLink = `https://www.twitter.com/${twitterName}`;
const facebookLink = `https://www.facebook.com/${facebookName}`;
const urlLink = urlName;

const displayTwitter = twitterName === null ? null : <a className='social-icon' href={twitterLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
const displayFacebook = facebookName === null ? null : <a className='social-icon' href={facebookLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
const displayUrl = urlName === null ? null : <a className='social-icon' href={urlLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title={title} />
      

      <div className="intro">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className='one'>
                <a href={issue.issueUrl}>
                  <img className='currentCover' alt="Haven Spec current issue" src={issue.issuecover.childImageSharp.fixed.src} />
                </a>
                <div>
                  <a className="buybutton button-primary" href={issue.issueUrl}>
                    BUY THIS ISSUE
                  </a>
                </div>
                <Advertisement />
              </div>
              <div>
                <div className="col-12">

                  <h4>
                    {category}
                  </h4>
                  <hr />

                  <h1 className="pt-1">
                    {title}
                  </h1>
                  <h2>
                    By <Link to={author.idpath}> {author.id}</Link> in <Link to={issue.idpath}> {issue.id}</Link>
                  </h2>
                  <div className="content" dangerouslySetInnerHTML={{ __html: html }} />

                  <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}
                      />
                    </Link>
                  <hr />

                  <div className="editorImageAbout mt-3">
                    <Image
                      fixed={author.picture.childImageSharp.fixed}            /*Author Image called here*/
                    />
                      <div class="side-block">
                        {displayTwitter}
                        {displayFacebook}
                        {displayUrl}
                      </div>
                  </div>

                    <h1 className="pt-1 pb-1">
                      <Link to={author.idpath}> 
                        {author.id}
                      </Link>
                    </h1>
                    <span dangerouslySetInnerHTML={{ __html: paragraphs(author.bio) }} />
                  <p>
                    {author.stories[0].storytitle === null ? null : <h5> Fiction by {author.id} </h5> 
                    }
                    {author.stories
                      .map((data, index) => author.stories[0].storytitle === null ? null : <li key={`content_storytitle_${index}`}>{data.storytitle}</li> )}
                    {author.poems[0].poemtitle === null ? null : <h5> Poetry by {author.id} </h5> }
                    {author.poems
                      .map((data, index) => author.poems[0].poemtitle === null ? null : <li key={`content_poemtitle_${index}`}>{data.poemtitle}</li>)}
                  </p>
                  <hr className="mb-2 mt-5"/>

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
  query($id: String!) {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        available
        title
        path
        author {
          id
          idpath
          bio
          twitter
          url
          facebook
          stories {
            storytitle
          }
          poems {
            poemtitle
          }
          picture {
            childImageSharp {
              fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 200, maxHeight: 200) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        issue {
          id
          idpath
          issueUrl
          issuecover {
            childImageSharp {
              fixed(width: 280) {
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 150, maxHeight: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        category
      }
      html
    }
  }
`;

export default Eachpost;
