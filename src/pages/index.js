import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import paragraphs from "lines-to-paragraphs";

const Home = (props) => {                                                     //THIS SETS THE FRONT PAGE, including featured story, latest stories, and latest issues
  const posts = props.data.allMarkdownRemark.edges;
  const data = props.data;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="Haven Speculative"
          content="A Magazine of Science Fiction and Fantasy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Helmet>

      <div className="intro">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div id="parent" className="grid-container">
              <div id="b" className="thinLeft">
                  <div>
                    <Link to="">
                      <Image className="topImageLeft"
                        fixed={data.currentCover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                    <div className="text-center">
                      <Link className="buybutton button-primary" to="">
                        BUY THIS ISSUE
                      </Link>
                    </div>
                  </div>
                  <div className="justify-content-center">

                  <Link to="">
                      <Image className="advert mb-2 mt-6"
                        fixed={data.advert01.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="">
                      <Image className="advert mb-2"
                        fixed={data.advert02.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                  <Link to="">
                      <Image className="advert mb-2"
                        fixed={data.advert03.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                  </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
              </div>
              <div id="a" className="wideRight">
                <div className="col-12">
                  <h4>
                    CURRENT ISSUE
                  </h4>
                  <hr />
                </div>
                {posts
                  .filter(post => post.node.frontmatter.featured === true)                       /*This looks at only the md file with featured: true*/
                  .map(({ node: post }) => {
                    return (
                      <div key={post.frontmatter.title}>
                      <div className="container" key={post.id}>
                        <h1 className="pt-1">
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
                        <span dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />
                      </div>
                      <div className="col-12 text-center pb-4">
                        <Link className="button button-primary" to={post.frontmatter.path}>
                          Read
                        </Link>
                      </div>
                    </div>
                  )
                })}


            <div className="frontissue">
              <div className="col-12">
              <hr />
              <h3>
                CONTENT
              </h3>
                <h4>
                  Fiction:
                </h4>
                  {posts
                    .filter(post => /*!post.node.frontmatter.featured &&*/ post.node.frontmatter.category === "FICTION" && post.node.frontmatter.issue.id === "Issue One, Summer 2020")
                    .map(({ node: post }) => {
                      return (
                        <p key={post.frontmatter.title}>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                  })}
                  <h4>
                    Poetry:
                  </h4>
                    {posts
                    .filter(post => !post.node.frontmatter.featured && post.node.frontmatter.category === "POETRY" && post.node.frontmatter.issue.id === "Issue One, Summer 2020")
                      .map(({ node: post }) => {
                      return (
                        <p key={post.frontmatter.title}>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                    })}
                  <h4>
                    Non-Fiction:
                  </h4>
                    {posts
                    .filter(post => !post.node.frontmatter.featured && post.node.frontmatter.category === "NON-FICTION" && post.node.frontmatter.issue.id === "Issue One, Summer 2020")
                      .map(({ node: post }) => {
                      return (
                        <p key={post.frontmatter.title}>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                    })}
                    <br />
                  <div className="pb-2">
                    <Link to="">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>
                </div>
              </div>
            <div className="col-12 text-center pb-3">
              <Link className="button button-primary" to="/issue-one">
                View Issue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

{/*
      <div className="intro pt-4 pb-0">
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container">
              <div className="thinLeft">
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
              <div className="wideRight">
                <div className="col-12">
                  <h4>LATEST FICTION</h4>
                  <hr />
                </div>
                {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "FICTION")
              .slice(0, 2)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <h1 className="pt-1">
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link></h2>
                      <span dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />

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
   
      <div className="intro pt-4 pb-4">
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <h4>LATEST NON-FICTION</h4>
                  <hr />
                </div>
                {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "NON-FICTION")
              .slice(0,1)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}
                      />
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


    <div className="into">
      <div className="container pt-4">
        <div className="row2 justify-content-start pt-2">
          <div className="col-12">
            <Link to="/future">
                <h4>LETTERS FROM THE FUTURE</h4>
            </Link>
            <hr />
          </div>
          <div className="container">
            {posts
              .filter(post => !post.node.frontmatter.featured)
              .filter(post => post.node.frontmatter.category === "FUTURE")
              .slice(0,1)
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}
                      />
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
    </div>

    <div className="intro pt-4">
      <div className="container pb-4">
        <div className="row2 justify-content-start pt-2">
          <div className="col-12">
            <Link to="/fullissues">
                <h4">RECENT ISSUES</h4>
            </Link>
            <hr />
          </div>

          <div className="container">
              {issueNodes.map(({ node: issue }, index) => (
                <div>                    
                  <Image className="topimage"
                    fixed={issue.currentcover.childImageSharp.fixed}
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
    </div>
*/}

    </Layout>
  );
};

export const query = graphql`
  query {
    currentCover: file(relativePath: {eq: "CurrentCover.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert01: file(relativePath: {eq: "advertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert02: file(relativePath: {eq: "advertisement02.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert03: file(relativePath: {eq: "advertisement03.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
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
