import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import styled from "styled-components";


const Home = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="A Magazine of Science Fiction and Fantasy"
        />
      </Helmet>
      <div className="intro pb-1">
        <div className="container">
          <div className="grid-container">
            <div className="wide">   
              <div className="containerTop">
                <Link to="/">
                  <h1>Featured Story</h1>
                </Link>
                <p>
                  Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This
                  is a beautiful and artfully designed starting theme.
                </p>
                <p>
                  Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This
                  is a beautiful and artfully designed starting theme.
                </p>
              </div>
              <Call button />
            </div>
            <div className="thin">
              <Link to={`/`}>  
                <img class="top-image" src={require("./CurrentCover.png")} alt="Current Cover" />
              </Link>
            </div>
          </div> 
        </div>
      </div>

    <div className="postbody">
      <div className="container pt-8 pt-md-4">
        <div className="row2 justify-content-start">
          <div className="col-12">
            <Link to="/">
                <h3>Latest Stories</h3>
            </Link>
            <hr className="striped-border"></hr>
          </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="post-grid-container" key={post.id}>
                    <div className="post-cover">
                      <Image className="inlineimage"
                        fixed={post.frontmatter.cover.childImageSharp.fixed}      /*Where the image in the post on the front page is called*/
                      />
                    </div>  
                    <div className="post-title">
                      <h1>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                    </div>
                    <div className="post-author">
                      <h2>By  <Link to="/"> {post.frontmatter.author}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
                    </div>
                    <div className="post-excerpt">
                      <p>{post.excerpt}</p>
                      <hr className="striped-border"></hr>
                    </div>
                  </div>
                )
              })}
            </div>
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services">
              View All Stories
            </Link>
          </div>
        </div>
      </div>
    </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row2 justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Most Recent Issues</h2>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-cover">
                    <Link to="/">               
                      <img src={withPrefix(edge.node.image)} />
                    </Link>
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(newposts)/.*.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            issue
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp {
                fixed(width: 250, height: 150) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed
                }
              }
            }            
          }
          excerpt(pruneLength: 500)
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
    
  }
`;

export default Home;
