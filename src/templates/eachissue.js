import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import paragraphs from "lines-to-paragraphs";
import Advertisement from '../components/advertisement';

import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Eachissue = props => {
  const { markdownRemark, allMarkdownRemark, advertLong } = props.data;
  const { pageContext } = props;
  const { issueidname, issueUrl, text, artist, artistbio, artistTwitter, artistFacebook, artistUrl } = pageContext;

  const { frontmatter, html } = markdownRemark;
  const { title, authors, issue, category } = frontmatter;

  const posts = allMarkdownRemark.edges;

  // Social media links handling
  const twitterLink = artistTwitter ? `https://www.twitter.com/${artistTwitter}` : null;
  const facebookLink = artistFacebook ? `https://www.facebook.com/${artistFacebook}` : null;
  const urlLink = artistUrl ? `${artistUrl}` : null;

  const displayTwitter = artistTwitter ? <a className='social-icon' href={twitterLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a> : null;
  const displayFacebook = artistFacebook ? <a className='social-icon' href={facebookLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a> : null;
  const displayUrl = artistUrl ? <a className='social-icon' href={urlLink}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a> : null;

  // Filter authors based on issueidname to find the correct authors
  const filteredAuthors = authors.filter(author => author.issue && author.issue.id === issueidname);

  // Headers display conditionally
  const fictionHeader = posts.filter(post => post.node.frontmatter.category === "FICTION" && post.node.frontmatter.issue.id === issueidname).length === 0 ? null : <h4>Fiction:</h4>;
  const poetryHeader = posts.filter(post => post.node.frontmatter.category === "POETRY" && post.node.frontmatter.issue.id === issueidname).length === 0 ? null : <h4>Poetry:</h4>;
  const nonFictionHeader = posts.filter(post => post.node.frontmatter.category === "NON-FICTION" && post.node.frontmatter.issue.id === issueidname).length === 0 ? null : <h4>Non-Fiction:</h4>;

  return (
    <Layout bodyClass="page-home">
      <SEO title={`${title}, Haven Spec Magazine`} image={SEO_image} alt="Haven Spec Magazine, Issue Page Image" />
      <Helmet>
        <meta
          name={issueidname}
          content={issueidname}
        />
      </Helmet>

      <div className="intro">
        <div className="container">
          <div className="row2">
            <div className="grid-container">

              <div className='one'>
                <a href={issueUrl}>
                  <img className='currentCover' alt="Haven Spec current issue" src={issue.issuecover.childImageSharp.fixed.src} />
                </a>
                <div>
                  <a className="buybutton button-primary" href={issueUrl}>
                    BUY THIS ISSUE
                  </a>
                </div>
                <Advertisement />
              </div>

              <div>
                <div className="col-12">
                  <h4>
                    {issueidname}
                  </h4>
                  <hr />
                  
                  <div className="contributor-div-top mb-4">
                    <span style={{ padding: 0 }} dangerouslySetInnerHTML={{ __html: paragraphs(text) }} />
                  </div>

                  <div className="editorImageAbout mb-2">
                    <Image
                      fixed={issue.artistimage.childImageSharp.fixed}
                    />
                    <div className="side-block">
                      {displayTwitter}
                      {displayFacebook}
                      {displayUrl}
                    </div>
                  </div>

                  <h1 className="pb-1 pt-1">
                    Cover Artist: {artist}
                  </h1>
                  <div className="contributor-div">
                    <span style={{ padding: 0 }} dangerouslySetInnerHTML={{ __html: paragraphs(artistbio) }} />
                  </div>

                  <div className="frontissue">
                    <div className="col-12">
                      <h3>
                        CONTENT
                      </h3>
                      {fictionHeader}
                      {posts.filter(post => post.node.frontmatter.category === "FICTION" && post.node.frontmatter.issue.id === issueidname).map(({ node }) => (
                        <p key={node.frontmatter.title}>
                          {node.frontmatter.available === true ? (
                            <Link to={node.frontmatter.path}>
                              {node.frontmatter.title}
                            </Link>
                          ) : (
                            node.frontmatter.title
                          )}
                          {" "}by{" "}
                          <Link to={node.frontmatter.authors[0].idpath}>
                            {node.frontmatter.authors[0].id}
                          </Link>
                        </p>
                      ))}
                      {poetryHeader}
                      {posts.filter(post => post.node.frontmatter.category === "POETRY" && post.node.frontmatter.issue.id === issueidname).map(({ node }) => (
                        <p key={node.frontmatter.title}>
                          {node.frontmatter.available === true ? (
                            <Link to={node.frontmatter.path}>
                              {node.frontmatter.title}
                            </Link>
                          ) : (
                            node.frontmatter.title
                          )}
                          {" "}by{" "}
                          <Link to={node.frontmatter.authors[0].idpath}>
                            {node.frontmatter.authors[0].id}
                          </Link>
                        </p>
                      ))}
                      {nonFictionHeader}
                      {posts.filter(post => post.node.frontmatter.category === "NON-FICTION" && post.node.frontmatter.issue.id === issueidname).map(({ node }) => (
                        <p key={node.frontmatter.title}>
                          {node.frontmatter.available === true ? (
                            <Link to={node.frontmatter.path}>
                              {node.frontmatter.title}
                            </Link>
                          ) : (
                            node.frontmatter.title
                          )}
                          {" "}by{" "}
                          <Link to={node.frontmatter.authors[0].idpath}>
                            {node.frontmatter.authors[0].id}
                          </Link>
                        </p>
                      ))}
                      <br />
                      <div className="pb-2">
                        <Link to="/subscribe">
                          <Image className="advertLong"
                            fixed={advertLong.childImageSharp.fixed}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Share Section */}
                  {/* <div className="share">
                    <h1>Share</h1>
                  </div> */}
                  <hr className="mb-2"/>
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
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*.md$/" }}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            featured
            available
            path
            title
            description
            authors {
              id
              idpath
            }
            issue {
              id
              idpath
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
        }
      }
    }
    markdownRemark(frontmatter: {issue: {id: {eq: $issueidname}}}) {
      frontmatter {
        title
        path
        authors {
          id
          bio
          twitter
          picture {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 150, maxHeight: 150) {
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
              fixed(width: 150) {
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 150, maxHeight: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
          artistbio 
        }
        category
      }
      html
    }
  }
`;

export default Eachissue;
