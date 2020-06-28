import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Home = (props) => {                                                     //THIS SETS THE FRONT PAGE, including featured story, latest stories, and latest issues
  const json = props.data.allFeaturesJson.edges;
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="Haven Quarterly"
          content="A Magazine of Science Fiction and Fantasy"
        />
      </Helmet>

      <div className="intro pb-1">                                                                {/*FEATURED*/}
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
                {posts
                  .filter(post => post.node.frontmatter.featured === true)                       /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      <div className="container" key={post.id}>
                        <h1 pb>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
                        <p>{post.excerpt}</p>
                      </div>
                      )
                    })}
              </div>      
              <div className="thin">
              {posts
                  .filter(post => post.node.frontmatter.featured === true)                     /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      
                      <Link to="/latest">
                        <Image className="topimage"
                          fixed={post.frontmatter.currentcover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                        />
                      </Link>

                      )
                    })}
              </div>
            </div>

            <div className="frontissue">
              <div className="col-12">
              <hr className="mt-2"/>
                <div className="frontissue-left">
                <h5>Fiction:</h5>
                  {posts
                    .filter(post => !post.node.frontmatter.featured)
                    .filter(post => post.node.frontmatter.category === "fiction")          /*This should only pull from md files with category "fiction", excluding posts marked featured*/
                    .slice(0, 4)
                    .map(({ node: post }) => {
                      return (
                        <p >
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                  })}
                </div>
                <div className="frontissue-right">
                  <h5>Non-Fiction:</h5>
                    {posts
                      .filter(post => !post.node.frontmatter.featured)
                      .filter(post => post.node.frontmatter.category === "non-fiction")          /*This should only pull from md files with category "fiction", excluding posts marked featured*/
                      .slice(0, 2)
                      .map(({ node: post }) => {
                      return (
                        <p>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                    })}
                    <br />
                  <h5>Letter from the Future:</h5>
                    {posts
                      .filter(post => !post.node.frontmatter.featured)
                      .filter(post => post.node.frontmatter.category === "future")          /*This should only pull from md files with category "fiction", excluding posts marked featured*/
                      .slice(0, 1)
                      .map(({ node: post }) => {
                      return (
                        <p>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="frontissue col-12">
                <hr />
              </div>
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/">
                View Issue
              </Link>
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
            
            {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "fiction")          /*This should only pull from md files with category "fiction", excluding posts marked featured*/
              .slice(0, 6)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}          /*This should pull image from md files with category "fiction"*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in (issue name){/*<Link to={post.frontmatter.issue.id}> {post.frontmatter.issue.idpath}</Link>*/}</h2>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/fiction">
                View All Fiction
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
            
            {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "non-fiction")          /*This should only pull from md files with category "non-fiction", excluding posts marked featured*/
              .slice(0,2)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}          /*This should pull image from md files with category "non-fiction"*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in (issue name){/*<Link to={post.frontmatter.issue.id}> {post.frontmatter.issue.idpath}</Link>*/}</h2>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/non-fiction">
                View All Non-Fiction
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
            {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "future")          /*This should only pull from md files with category "future", excluding posts marked featured*/
              .slice(0,1)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}        /*This should pull image from md files with category "future"*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By  <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in (issue name){/*<Link to={post.frontmatter.issue.id}> {post.frontmatter.issue.idpath}</Link>*/}</h2>
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
            {posts
              .filter(post => !post.node.frontmatter.featured)
              .slice(0,3)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.currentcover.childImageSharp.fluid}        /*This should pull image from md files with category "issue"*/
                      />
                      <h1 pb>
                        {/*<Link to={post.frontmatter.issue.idpath}>{post.frontmatter.issue.id}</Link>*/}
                      </h1>
                      {/*<p>{post.frontmatter.issue.text}</p>*/}
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
    </Layout>
  );
};

export const query = graphql`
  query {
    allAuthorYaml {
      nodes {
        bio
        id
        idpath
        picture {
          childImageSharp {
            fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
              ...GatsbyImageSharpFixed 
            }
            fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
              ...GatsbyImageSharpFluid
            }
          }
        }
        stories {
          item
        }
        twitter
      }
    }
    allIssueYaml {
      edges {
        node {
          artist
          artistbio
          id
          idpath
          text
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
          currentcover {
            childImageSharp {
              fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 300, maxHeight: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*.md$/" }}                  #This tells this file to pull from the md files generated by allposts?
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          html
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
                  fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
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
          excerpt(
            pruneLength: 650
            )
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
