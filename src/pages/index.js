import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import paragraphs from 'lines-to-paragraphs';
import Advertisement from '../components/advertisement';
import CurrentIssue from '../components/CurrentIssue';

const ContentSection = ({ header, content }) => (
  content.length > 0 && (
    <>
      <h3 className='title-static-no-border' style={{fontWeight:'bold'}}>
        {header}
      </h3>
      {content.map(({ node: { frontmatter: { title, path, authors = [], available } } }) => (
        <p key={title} style={{textAlign:'center'}}>
          {available ? (
            <Link to={path}>{title}</Link>
          ) : (
            title
          )} by {authors.map((author, index) => (
              <React.Fragment key={author.id}>
                <Link to={author.idpath}>{author.id}</Link>
                {index !== authors.length - 1 && index !== authors.length - 2 && ", "} {/* Add comma if not the last author */}
                {index === authors.length - 2 && " & "} {/* Add "and" before the last author */}
              </React.Fragment>
          ))}
        </p>
      ))}
    </>
  )
);
const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const currentIssue = posts[0].node.frontmatter.issue.id;

  // Categorizing posts by their category (FICTION, POETRY, NON-FICTION)
  const categorizedContent = posts.reduce((acc, post) => {
    const { frontmatter: { category, issue: { id } } } = post.node;
    if (id === currentIssue) {
      acc[category] = acc[category] || [];
      acc[category].push(post);
    }
    return acc;
  }, {});

  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine" image={SEO_image} alt="Haven Spec Magazine, Home Page Image" />
      <Helmet>
        <meta name="Haven Spec Magazine" content="Fiction for the 21st Century!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="main-body">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="one">
                <CurrentIssue />
                <Advertisement />
              </div>
              <div>

              <div className='title-static-border'>
                <h4>
                  CURRENT ISSUE
                </h4>
              </div>

              <div className='bio-bottom-margin'>
                    {/* Rendering featured posts */}
                    {posts.filter(post => post.node.frontmatter.featured)
                      .map(({ node: { frontmatter: { title, path, authors = [], issue: { id: issueId, idpath: issueIdPath }, description } } }) => (
                        <div key={title} className='content-div-front-page'>
                          <h2>
                              <Link to={path}>{title}</Link>
                            </h2>

                            <h5>
                            by{" "}
                              {authors.map((author, index) => (
                                <React.Fragment key={author.id}>
                                  <Link to={author.idpath}>{author.id}</Link>
                                    {index !== authors.length - 1 && index !== authors.length - 2 && ", "}
                                    {index === authors.length - 2 && " & "}
                                </React.Fragment>
                              ))}
                              {" "}in <Link to={issueIdPath}>{issueId}</Link>
                            </h5>
                            <span dangerouslySetInnerHTML={{ __html: paragraphs(description) }} />
                          <div className="text-center">
                            <Link className="button button-primary" to={path}>
                              Read
                            </Link>
                          </div>
                        </div>
                      ))}
                    
                    {/* Content sections for Fiction, Poetry, Non-Fiction */}
                    <div className="bio-bottom-margin" style={{borderBottom:'none'}}>
                      <div className="content-div-front-page-heading" style={{borderBottom:'none'}}>
                        <h1 className='title-static-no-border' style={{color:'#1937bd'}}>
                          CONTENT
                        </h1>
                        <ContentSection header="Fiction:" content={categorizedContent["FICTION"] || []} />
                        <ContentSection header="Poetry:" content={categorizedContent["POETRY"] || []} />
                        <ContentSection header="Non-Fiction:" content={categorizedContent["NON-FICTION"] || []} />
                      </div>
                    </div>
                    
                    {/* Link to view the issue */}
                    <div className="col-12 text-center">
                      <Link className="button button-primary" to={categorizedContent["FICTION"]?.[0]?.node.frontmatter.issue.idpath}>
                        View Issue
                      </Link>
                    </div>
                    
                    {/* Advertisement */}
                    {/* <div>
                    <Link to="/subscribe">
                      <Image className="advertLong-top" fixed={data.advertLong.childImageSharp.fixed} />
                    </Link>
                    </div> */}
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
      totalCount
      edges {
        node {
          html
          id
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
            }
            category
          }
        }
      }
    }
  }
`;

export default Home;
