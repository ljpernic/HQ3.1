import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import styled from "styled-components";


const Home = (props) => {                                                     //This only does the front page, including featured story, latest stories, and latest issues
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
          <div className="row2 justify-content-start">
            <div className="grid-container pt-2">
              <div className="wide">
                <div className="col-12">
                  <Link to="/">
                      <h3>Featured Story</h3>
                  </Link>
                  <hr />
                </div>
                {posts
                  .filter(post => post.node.frontmatter.featured)                       /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      <div className="container" key={post.id}>
                        <h1 pb>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>By 
                          <Link to="/"> {post.frontmatter.author}</Link> 
                          in 
                          <Link to="/"> {post.frontmatter.issue}</Link>
                        </h2>
                        <p>{post.excerpt}</p>
                        <hr />
                      </div>
                      )
                    })}
              </div>      
              <div className="thin">
              {posts
                  .filter(post => post.node.frontmatter.featured)                     /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      <Image className="inlineimage"
                        fixed={post.frontmatter.cover.childImageSharp.fixed}      /*Where the image in the post on the front page is called*/
                      />
                      )
                    })}
                <div className="col-12 text-center pb-3">
                  <Link className="button button-primary" to="/about">
                    About
                  </Link>
                  <Link className="button button-primary" to="/support">
                    Support
                  </Link>
                  <Link className="button button-primary" to="/submit">
                    Submit
                  </Link>
                </div>
              </div>
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
            <hr />
          </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">
            {posts
              .filter(post => !post.node.frontmatter.featured)                        /*This has a !, so it looks at only md files with NOT featured: true*/
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}      /*Where the image in the post on the front page is called*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By  <Link to="/"> {post.frontmatter.author}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/fiction">
                View All Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="postbody">
      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row2 justify-content-start">
          <div className="col-12">
          <Link to="/">
                <h3>Latest Issues</h3>
            </Link>
            <hr />
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
    </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(newposts)/.*.md$/" } }                  #This tells this file to pull from the md files generated by newposts?
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            featured
            path
            title
            author
            issue
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 450) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
          excerpt(pruneLength: 900)                                           #Can we add a seperate excerpt length for featured story?
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
