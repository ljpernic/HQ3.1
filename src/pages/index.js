import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import styled from "styled-components";


const Home = (props) => {                                                     //THIS SETS THE FRONT PAGE, including featured story, latest stories, and latest issues
  const json = props.data.allFeaturesJson.edges;
  const frontfiction = props.data.frontfiction.edges;
  const frontnonfic = props.data.frontnonfic.edges;
  const future = props.data.future.edges;
  const featuredfiction = props.data.featuredfiction.edges;
  const fullissues = props.data.fullissues.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="Haven Quarterly"
          content="A Magazine of Science Fiction and Fantasy"
        />
      </Helmet>

                                                                                          {/*FEATURED*/}
      <div className="intro pb-1">
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-2">
              <div className="wide">
                <div className="col-12">
                  <Link to="/featured">
                      <h4>Featured Story</h4>
                  </Link>
                  <hr />
                </div>
                {featuredfiction
                  .filter(post => post.node.frontmatter.featured)                       /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      <div className="container" key={post.id}>
                        <h1 pb>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
                        <p>{post.excerpt}</p>
                        <hr />
                      </div>
                      )
                    })}
              </div>      
              <div className="thin">
              {featuredfiction
                  .filter(post => post.node.frontmatter.featured)                     /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      
                      <Link to="/latest">
                        <Image className="topimage"
                          fixed={post.frontmatter.currentcover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                        />
                      </Link>

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
        <div className="row2 justify-content-start pt-2">
          <div className="col-12">
            <Link to="/fiction">
                <h4>Latest Fiction</h4>
            </Link>
            <hr />
          </div>
                                                                                      {/*FICTION*/}
          <div className="container">
            
            {frontfiction
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "fiction")          /*This should only pull from md files with category "fiction", excluding posts marked featured*/
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}          /*This should pull image from md files with category "fiction"*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
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
      <div className="container pt-8 pt-md-4">
        <div className="row2 justify-content-start pt-2">
          <div className="col-12">
            <Link to="/non-fiction">
                <h4>Latest Non-Fiction</h4>
            </Link>
            <hr />
          </div>
                                                                                      {/*NON-FICTION*/}
          <div className="container">
            
            {frontnonfic
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "non-fiction")          /*This should only pull from md files with category "non-fiction", excluding posts marked featured*/
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}          /*This should pull image from md files with category "non-fiction"*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/non-fiction">
                View All Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="postbody">
      <div className="container pt-8 pt-md-4">
        <div className="row2 justify-content-start pt-2">
          <div className="col-12">
            <Link to="/future">
                <h4>Letters from the Future</h4>
            </Link>
            <hr />
          </div>
                                                                                      {/*LETTERS FROM THE FUTURE SECTION*/}
          <div className="container">
            {future
              .filter(post => post.node.frontmatter.category === "future")          /*This should only pull from md files with category "future", excluding posts marked featured*/
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}        /*This should pull image from md files with category "future"*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By  <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/future">
                View All Letters
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="postbody">
      <div className="container pt-8 pb-4 pt-md-4">
        <div className="row2 justify-content-start pt-2">
          <div className="col-12">
            <Link to="/fullissues">
                <h4>Full Issues</h4>
            </Link>
            <hr />
          </div>
                                                                                      {/*FULL ISSUES SECTION*/}
          <div className="container">
            {fullissues
              .filter(post => post.node.frontmatter.category === "issue")          /*This should only pull from md files with category "issue", excluding posts marked featured*/
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.currentcover.childImageSharp.fluid}        /*This should pull image from md files with category "issue"*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/fullissues">
                View All Issues
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


{/*
    <div className="postbody">
      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row2 justify-content-start">
          <div className="col-12 pt-2">
          <Link to="/">
                <h4>Latest Issues</h4>
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
    </div>*/}
    </Layout>
  );
};

export const query = graphql`
  query {
    featuredfiction: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*.md$/" }, frontmatter: {featured:{eq:true} } }, limit: 1                  #This tells this file to pull from the md files generated by allposts?
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            featured
            path
            title
            author {
              id
              idpath
              bio
              twitter
              picture {
                childImageSharp {
                  fixed(width: 400) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 400, maxHeight: 400) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            issue
            date(formatString: "DD MMMM YYYY")
            category
            currentcover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
          excerpt(pruneLength: 750)                                           #Can we add a seperate excerpt length for featured story?
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
    frontfiction: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(fiction)/.*.md$/" }, frontmatter: {category:{eq:"fiction"} } }, limit: 7                  #This tells this file to pull from the md files generated by allposts?
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            featured
            path
            title
            author {
              id
              idpath
              bio
              twitter
              picture {
                childImageSharp {
                  fixed(width: 400) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 400, maxHeight: 400) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            issue
            date(formatString: "DD MMMM YYYY")
            category
            currentcover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
          excerpt(pruneLength: 500)                                           #Can we add a seperate excerpt length for featured story?
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
    frontnonfic: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(non-fiction)/.*.md$/" }, frontmatter: {category:{eq:"non-fiction"} } }, limit: 2                  #This tells this file to pull from the md files generated by allposts?
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            featured
            path
            title
            author {
              id
              idpath
              bio
              twitter
              picture {
                childImageSharp {
                  fixed(width: 400) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 400, maxHeight: 400) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            issue
            date(formatString: "DD MMMM YYYY")
            category
            currentcover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
          excerpt(pruneLength: 500)                                           #Can we add a seperate excerpt length for featured story?
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
    future: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(letters)/.*.md$/" }, frontmatter: {category:{eq:"future"} } }, limit: 1                  #This tells this file to pull from the md files generated by allposts?
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            featured
            path
            title
            author {
              id
              idpath
              bio
              twitter
              picture {
                childImageSharp {
                  fixed(width: 400) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 400, maxHeight: 400) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            issue
            date(formatString: "DD MMMM YYYY")
            category
            currentcover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
          excerpt(pruneLength: 500)                                           #Can we add a seperate excerpt length for featured story?
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

    fullissues: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(allposts)/.*.md$/" }, frontmatter: {category:{eq:"issue"} } }, limit: 3                  #This tells this file to pull from the md files generated by allposts?
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            featured
            path
            title
            author {
              id
              idpath
              bio
              twitter
              picture {
                childImageSharp {
                  fixed(width: 400) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 400, maxHeight: 400) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            issue
            date(formatString: "DD MMMM YYYY")
            category
            currentcover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cover {
              childImageSharp {
                fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
          excerpt(pruneLength: 500)                                           #Can we add a seperate excerpt length for featured story?
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
