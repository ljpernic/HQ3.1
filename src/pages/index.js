import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import paragraphs from "lines-to-paragraphs";
import Advertisement from '../components/advertisement';
import CurrentIssue from '../components/CurrentIssue';


const Home = (props) => {                                                     //Sets the front page, including featured story, latest stories, and latest issue.
  const posts = props.data.allMarkdownRemark.edges;
  const data = props.data;

  const currentIssue = posts[0].node.frontmatter.issue.id;                    // Sets currentIssue to the issue of the most recent post in the collection.

  //////// THIS FILTERS PROPS BASED ON CATEGORY AND ISSUE ////////
  const fictionContent = posts.filter(post => post.node.frontmatter.category === "FICTION" && post.node.frontmatter.issue.id === currentIssue);
  const poetryContent = posts.filter(post => post.node.frontmatter.category === "POETRY" && post.node.frontmatter.issue.id === currentIssue);
  const nonFictionContent = posts.filter(post => post.node.frontmatter.category === "NON-FICTION" && post.node.frontmatter.issue.id === currentIssue);

  //////// THIS SHOWS THE HEADERS ONLY IF THERE IS RELEVANT CONTENT //////// 
  const fictionHeader = fictionContent.length === 0 ? null : <h4>Fiction:</h4>
  const poetryHeader = poetryContent.length === 0 ? null : <h4>Poetry:</h4>  
  const nonFictionHeader = nonFictionContent.length === 0 ? null : <h4>Non-Fiction:</h4>

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
          <div className="row2">
            <div className="grid-container">
              <div className="one">
                <CurrentIssue />
                <Advertisement />
              </div>
                <div>
                  <div className="col-12">
                    <h4>
                      CURRENT ISSUE
                    </h4>
                    <hr />
{/*     THIS FILTERS THE FEATURED STORY AND RETURNS ALL OF THE RELEVANT INFO     */}
                  {posts
                    .filter(post => post.node.frontmatter.featured === true)
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
{/*     PRESENTS THE FRONT PAGE CONTENT     */}
                  <div className="frontissue">                            {/* CSS to center the content. */}
                    <div className="col-12">                              {/* CSS to center the content. */}
                    <hr />
                    <h3>
                      CONTENT
                    </h3>
                    {fictionHeader}
              {fictionContent
                .map((data, index) => data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}
              {poetryHeader}
                {poetryContent
                  .map((data, index) => data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}
              {nonFictionHeader}
                {nonFictionContent
                  .map((data, index) => data.node.frontmatter.title === null ? null : data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}

                      </div>
                    </div>
                    <div className="col-12 text-center pb-8 pt-4">
                      <Link className="button button-primary" to={fictionContent[0].node.frontmatter.issue.idpath}>
                        View Issue
                      </Link>
                </div>
                <div className="pb-2">
                          <Link to="/subscribe">
                            <Image className="advertLong"
                              fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                            />
                          </Link>
                        </div>
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
            available
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
