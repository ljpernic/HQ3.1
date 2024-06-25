import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import Advertisement from '../components/advertisement';
import { IconContext } from "react-icons";
import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';

const Eachpost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, authors, issue, category } = frontmatter;

  // Assuming authors is an array of author objects
  // Displaying only the first author in this example
  const author = authors[0];

  // Social media links handling
  const twitterName = author.twitter;
  const facebookName = author.facebook;
  const urlName = author.url;

  const twitterLink = twitterName ? `https://www.twitter.com/${twitterName}` : null;
  const facebookLink = facebookName ? `https://www.facebook.com/${facebookName}` : null;
  const urlLink = urlName ? urlName : null;

  const displayTwitter = twitterName ? (
    <a className='social-icon' href={twitterLink}>
      <IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}>
        <FaTwitter />
      </IconContext.Provider>
    </a>
  ) : null;

  const displayFacebook = facebookName ? (
    <a className='social-icon' href={facebookLink}>
      <IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}>
        <FaFacebook />
      </IconContext.Provider>
    </a>
  ) : null;

  const displayUrl = urlName ? (
    <a className='social-icon' href={urlLink}>
      <IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}>
        <FaLink />
      </IconContext.Provider>
    </a>
  ) : null;

  return (
    <Layout bodyClass="page-home">
      <SEO title={`${title} by ${author.id}, Haven Spec Magazine`} image={SEO_image} alt="Haven Spec Magazine, Content Page Image" />
      <Helmet>
        <meta
          name={title}
          content={title}
        />
      </Helmet>

      <div className="intro">
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
                  <h4>{category}</h4>
                  <hr />
                  <h1 className="pt-1">{title}</h1>
                  <h2>
                    By <Link to={author.idpath}>{author.id}</Link> in <Link to={issue.idpath}>{issue.id}</Link>
                  </h2>
                  <div className="content m-4" dangerouslySetInnerHTML={{ __html: html }} />
                  <Link to="/subscribe">
                    <Image className="advertLong" fixed={data.advertLong.childImageSharp.fixed} />
                  </Link>
                  <hr />

                  <div className="editorImageAbout mt-3">
                    <Image fixed={author.picture.childImageSharp.fixed} />
                    <div className="side-block">
                      {displayTwitter}
                      {displayFacebook}
                      {displayUrl}
                    </div>
                  </div>
                  <div className='ml-4 mr-4 mb-4'>

                  <h1 className="pt-1 pb-1">
                    <Link to={author.idpath}>{author.id}</Link>
                  </h1>
                  <span dangerouslySetInnerHTML={{ __html: paragraphs(author.bio) }} /><br />

               {/* Render Fiction section if there are stories */}
               {author.stories && author.stories[0].storytitle !== null && (
                  <>
                    <h5> Fiction by {author.id} </h5>
                    {author.stories.map((data, index) => (
                      <li className='submitGuidelines' key={`content_storytitle_${index}`}>{data.storytitle}</li>
                    ))}
                  </>
                )}<br />

                {/* Render Poetry section if there are poems */}
                {author.poems && author.poems[0].poemtitle !== null && (
                  <>
                    <h5> Poetry by {author.id} </h5>
                    {author.poems.map((data, index) => (
                      <li className='submitGuidelines' key={`content_poemtitle_${index}`}>{data.poemtitle}</li>
                    ))}
                  </>
                )}
</div>
                  <hr className="mb-2 mt-5" />
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
        authors {
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
              fixed(width: 200) {
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 200, maxHeight: 200) {
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
