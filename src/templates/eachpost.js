import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import Advertisement from '../components/advertisement';
import { IconContext } from "react-icons";
import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';

const Eachpost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, authors, issue, category } = frontmatter;

//  console.log(JSON.stringify('authors: ' + JSON.stringify(authors)))  
  const coverImage = getImage(issue.issuecover);

  const renderAuthor = (author) => {
    const twitterLink = author.twitter ? `https://www.twitter.com/${author.twitter}` : null;
    const facebookLink = author.facebook ? `https://www.facebook.com/${author.facebook}` : null;
    const urlLink = author.url ? author.url : null;
    const authorImage = getImage(author.picture);
   
    const displayTwitter = twitterLink ? (
      <a className='social-icon' href={twitterLink}>
        <IconContext.Provider value={{ className: "", color: "", size: ".7em", title: "social media icons" }}>
          <FaTwitter />
        </IconContext.Provider>
      </a>
    ) : null;

    const displayFacebook = facebookLink ? (
      <a className='social-icon' href={facebookLink}>
        <IconContext.Provider value={{ className: "", color: "", size: ".7em", title: "social media icons" }}>
          <FaFacebook />
        </IconContext.Provider>
      </a>
    ) : null;

    const displayUrl = urlLink ? (
      <a className='social-icon' href={urlLink}>
        <IconContext.Provider value={{ className: "", color: "", size: ".7em", title: "social media icons" }}>
          <FaLink />
        </IconContext.Provider>
      </a>
    ) : null;

return (
    <div className='bio-bottom-margin' style={{borderBottom:'none'}}>
      <div className="content-div-dynamic">
        <div key={author.id} className="editorImageAbout">
          {authorImage && (
            <GatsbyImage
              image={authorImage}
              className="author-picture"
              alt={`Photo of ${author.id}`}
            />
          )}
          <div className="social-icons">
            {displayTwitter}
            {displayFacebook}
            {displayUrl}
          </div>
        </div>
        <h3 className='title-static-no-border-inline'>
          <Link to={author.idpath}>{author.id}</Link>
        </h3>
        <span dangerouslySetInnerHTML={{ __html: paragraphs(author.bio) }} />
        {author.stories && author.stories[0]?.storytitle && (
          <div className="author-stories">
            <h5 className="title-static-no-border" style={{width:'100%', textAlign:'left'}}>Fiction by {author.id}</h5>
            <ul>
              {author.stories.map((data, index) => (
                <li className='submitGuidelines' key={`content_storytitle_${index}`}>{data.storytitle}</li>
              ))}
            </ul>
          </div>
        )}
        {author.poems && author.poems[0]?.poemtitle && (
          <div className="author-poems">
            <h5 className="title-static-no-border" style={{ marginTop: '40px', width:'100%', textAlign:'left' }}>Poetry by {author.id}</h5>
            <ul>
              {author.poems.map((data, index) => (
                <li className='submitGuidelines' key={`content_poemtitle_${index}`}>{data.poemtitle}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

  return (
    <Layout bodyClass="page-home">
      <SEO title={`${title} by ${authors.map(author => author.id).join(" & ")}, Haven Spec Magazine`} image={SEO_image} alt="Haven Spec Magazine, Content Page Image" />
      <Helmet>
        <meta name={title} content={title} />
      </Helmet>

      <div className="main-body">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className='one'>
                <a href={issue.issueUrl}>
                  {coverImage && (
                    <GatsbyImage
                      image={coverImage}
                      className="currentCover"
                      alt="Haven Spec current issue"
                    />
                  )}
                </a>
                <div>
                  <a className="buybutton button-primary" href={issue.issueUrl}>
                    BUY THIS ISSUE
                  </a>
                </div>
                <Advertisement />
              </div>
              <div className='two'>
                <div className='title-static-border'>
                  <h4>{category}</h4>
                </div>

                <div className='bio-bottom-margin' style={{ marginTop: '30px', borderBottom: 'none' }}>
                  <h2>{title}</h2>

                  <h5>
                    by{" "}
                    {authors.map((author, index) => (
                      <React.Fragment key={author.id}>
                        <Link to={author.idpath}>{author.id}</Link>
                        {index !== authors.length - 1 && index !== authors.length - 2 && ", "}
                        {index === authors.length - 2 && " & "}
                      </React.Fragment>
                    ))}
                    {" "}in{" "}
                    <Link to={issue.idpath}>{issue.id}</Link>
                  </h5>

                  <div className="content-div-front-page" dangerouslySetInnerHTML={{ __html: html }} />
                </div>

                    {authors.map(author => (
                      <div key={author.id}>
                        {renderAuthor(author)}
                      </div>
                    ))}
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
    advertLong: file(relativePath: { eq: "longadvertisement01.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          height: 60
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
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
              gatsbyImageData(
                width: 200
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        issue {
          id
          idpath
          issueUrl
          issuecover {
            childImageSharp {
              gatsbyImageData(
                width: 280
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
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
