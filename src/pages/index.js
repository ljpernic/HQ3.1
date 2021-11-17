import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import paragraphs from "lines-to-paragraphs";


function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Home = (props) => {                                                     //THIS SETS THE FRONT PAGE, including featured story, latest stories, and latest issues
  const posts = props.data.allMarkdownRemark.edges;
  const data = props.data;
  const currentIssue = `https://ko-fi.com/havenspec/shop`;

  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);

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
              <div className="thinLeft one">
                <div>
                  <a href={currentIssue}>
                    <Image className="topImageLeft"
                      fixed={data.currentCover.childImageSharp.fixed}
                    />
                  </a>
                </div>
                <div>
                      <a className="buybutton button-primary" href={currentIssue}>
                        BUY CURRENT ISSUE
                      </a>
                </div>

                <div>
                  <Link to="/subscribe">
                    <Image className="advert mb-2 mt-6"

                      fixed={shuffledArray[0]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                <div>
                <Link to="/subscribe">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[1]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>

                <div>
                <Link to="/subscribe">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[2]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                </div>

                <div className="wideRight">
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
                          .filter(post => /*!post.node.frontmatter.featured &&*/ post.node.frontmatter.category === "FICTION" && post.node.frontmatter.issue.id === "Issue One, November 2021")
                          .map((data, index) => data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}
                        <h4>
                          Poetry:
                        </h4>
                        {posts
                          .filter(post => /*!post.node.frontmatter.featured &&*/ post.node.frontmatter.category === "POETRY" && post.node.frontmatter.issue.id === "Issue One, November 2021")
                          .map((data, index) => data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}

{/*                         <h4>
                          Non-Fiction:
                        </h4>
                        {posts
                          .filter(post => post.node.frontmatter.category === "NON-FICTION" && post.node.frontmatter.issue.id === "Issue One, November 2021")
                          .map((data, index) => data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}
*/}
                          <br />
                      </div>
                    </div>
                    <div className="col-12 text-center pb-8">
                      <Link className="button button-primary" to="/issue-one">
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
