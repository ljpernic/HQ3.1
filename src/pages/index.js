import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import paragraphs from "lines-to-paragraphs";
import Advert01 from "../images/advertisement01.jpg";
import Advert02 from "../images/advertisement02.jpg";
import Advert03 from "../images/advertisement03.jpg";
import LAdvert01 from "../images/advertisementlong01.jpg";


const Home = (props) => {                                                     //THIS SETS THE FRONT PAGE, including featured story, latest stories, and latest issues
  const json = props.data.allFeaturesJson.edges;
  const posts = props.data.allMarkdownRemark.edges;
  const issueNodes = props.data.allIssueYaml.edges;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="Haven Speculative"
          content="A Magazine of Science Fiction and Fantasy"
        />
      </Helmet>

      <div className="intro pb-0">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <h4 className="pb-1">CURRENT ISSUE</h4>
                  <hr />
                </div>
                {posts
                  .filter(post => post.node.frontmatter.featured === true)                       /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      <div className="container" key={post.id}>
                        <h1 className="pt-1">
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
                        <span dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />
{/*                                  <div className="col-12 text-center">
                            <Link className="button button-primary" to={post.frontmatter.path}>
                              More
                            </Link>
                    </div> */}
                      </div>      
                    )
                  })}
                </div>      
              <div className="thin">
              {posts
                  .filter(post => post.node.frontmatter.featured === true)                     /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      <div>
                        <Link to="/latest">
                          <Image className="topimage"
                            fixed={post.frontmatter.currentcover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                          />
                        </Link>
                        <div className="text-center">
                            <Link className="buybutton button-primary" to={post.frontmatter.path}>
                              BUY THIS ISSUE
                            </Link>
                          </div>
                        </div>
                      )
                    })}
              </div>
            </div>

            <div className="frontissue">
              <div className="col-12">
              <hr className="mt-2 mb-2"/>
                <div className="frontissue-left">
                <h5>Fiction:</h5>
                  {posts
                    .filter(post => !post.node.frontmatter.featured && post.node.frontmatter.category === "FICTION" && post.node.frontmatter.issue.id === "Issue Four, Spring 2021")
                    .map(({ node: post }) => {
                      return (
                        <p>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                  })}
                </div>
                <div className="frontissue-right">
                  <h5>Non-Fiction:</h5>
                    {posts
                    .filter(post => !post.node.frontmatter.featured && post.node.frontmatter.category === "NON-FICTION" && post.node.frontmatter.issue.id === "Issue Four, Spring 2021")
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
                    .filter(post => !post.node.frontmatter.featured && post.node.frontmatter.category === "FUTURE" && post.node.frontmatter.issue.id === "Issue Four, Spring 2021")
                      .map(({ node: post }) => {
                      return (
                        <p>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                    })}
                    <br />
                    <div className="pl-4 pb-2">
                <img src={LAdvert01} 
                style={{ border: "2px solid rebeccapurple", borderRadius: 5, height: 60 }}
                />
                    </div>
                  </div>
                </div>
              </div>
{/*<div className="container">
<div className="row justify-content-start">
<div className="col-12">
<p>test</p>
</div>
</div>
</div>*/}
            <div className="col-12 text-center pb-4 pt-2">
              <Link className="button button-primary" to="/issue-four">
                View Issue
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="intro pt-4 pb-0">                                                                {/*FICTION*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="thin2">
                <div>
                  <img src={Advert01} 
                    style={{ margin: 20, border: "2px solid rebeccapurple", borderRadius: 5, height: 250 }}
                  />
                </div>
                <div>
                  <img src={Advert02} 
                    style={{ border: "2px solid rebeccapurple", borderRadius: 5, height: 250 }}
                  />
                </div>
                <div>
                  <img src={Advert03} 
                    style={{ margin: 20, border: "2px solid rebeccapurple", borderRadius: 5, height: 250 }}
                  />
                </div>
              </div>
              <div className="wide2">
                <div className="col-12">
                  <h4 className="pb-1">LATEST FICTION</h4>
                  <hr />
                </div>
                {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "FICTION")          /*This should only pull from md files with category "fiction", excluding posts marked featured*/
              .slice(0, 2)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <h1 className="pt-1">
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
                      <span dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />
{/*                       <div className="col-12 text-center pb-4">
                            <Link className="button button-primary" to={post.frontmatter.path}>
                              More
                            </Link>
                          </div>*/}
                  </div>
                  
                )
              })}
                </div>
            </div>
            <div className="col-12 text-center pb-4">
            <Link className="button button-primary" to="/fiction">
                View All Fiction
              </Link>
            </div>
          </div>
        </div>
      </div>
   



      <div className="intro pt-4 pb-4">                                                                {/*NON-FICTION*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <h4 className="pb-1">NON-FICTION</h4>
                  <hr />
                </div>
                {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "NON-FICTION")          /*This should only pull from md files with category "non-fiction", excluding posts marked featured*/
              .slice(0,1)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
{/*                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}          */}{/*This should pull image from md files with category "non-fiction"
                      />*/}
                      <h1 className="pt-1">
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
                      <span dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />
                  </div>
                )
              })}
                </div>      
              <div className="thin">
              <div>
                  <img src={Advert01} 
                    style={{ margin: 20, border: "2px solid rebeccapurple", borderRadius: 5, height: 250 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 text-center pb-4">
              <Link className="button button-primary" to="/non-fiction">
                View All Non-Fiction
              </Link>
            </div>            
          </div>
        </div>
      </div>






{/*
    <div className="into">
      <div className="container pt-4">
        <div className="row2 justify-content-start pt-2">
          <div className="col-12">
            <Link to="/future">
                <h4 className="pt-1 pb-1">LETTERS FROM THE FUTURE</h4>
            </Link>
            <hr />
          </div>
                                                                                      {/*LETTERS FROM THE FUTURE SECTION*/}
{/*}          <div className="container">
            {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "FUTURE")          /*This should only pull from md files with category "future", excluding posts marked featured*/}
{/*              .slice(0,1)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}        /*This should pull image from md files with category "future"*/}
{/*}                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
                      <span dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />
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
    </div>*/}

    {/*<div className="postbody pt-4">
      <div className="container pb-4">
        <div className="row2 justify-content-start pt-2">
          <div className="col-12">
            <Link to="/fullissues">
                <h4 className="pt-1 pb-1">RECENT ISSUES</h4>
            </Link>
            <hr />
          </div>
                                                                                      FULL ISSUES SECTION
          <div className="container">
              {issueNodes.map(({ node: issue }, index) => (
                <div>                    
                  <Image className="topimage"
                    fixed={issue.currentcover.childImageSharp.fixed}            /*Where the image in the post on the front page is called
                  />
                   <h1 className="pt-1"><Link to={issue.idpath}>{issue.id}</Link></h1>
                  <span dangerouslySetInnerHTML={{ __html: paragraphs(issue.text) }} />
                  <hr />
                </div>
              ))}
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/fullissues">
                View All Issues
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>*/}
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
              fixed(width: 250) {                                           #This changed the post picture sizes on the front page (originally 75)
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
            description
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
                  fixed(width: 350) {                                           #This changed the post picture sizes on the front page (originally 75)
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
                fixed(width: 300) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
            cover {
              childImageSharp {
                fixed(width: 350) {                                           #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }            
          }
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
