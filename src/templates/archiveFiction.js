import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';

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

export default class archiveFiction extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const data = this.props.data;
    const currentIssue = `https://ko-fi.com/havenspec/shop`;
    
    const { FICcurrentPage, FICnumPages } = this.props.pageContext
    const isFirst = FICcurrentPage === 1
    const isLast = FICcurrentPage === FICnumPages
    const prevPage = FICcurrentPage - 1 === 1 ? "/fiction/" : `/fiction/${FICcurrentPage - 1}`
    const nextPage = `/fiction/${FICcurrentPage + 1}`
       
    var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
    var shuffledArray = shuffle(imgArray);
    
    return (
      <Layout bodyClass="page-home">
      <SEO title="Fiction" />
      <Helmet>
        <meta
          name="description"
          content="all fiction of Haven Spec"
        />
      </Helmet>

      <div className="intro">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="thinLeft one">
                <div>
                  <Link to="">
                    <Image className="topImageLeft"
                      fixed={data.currentCover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                </div>
                <div>
                  <Link className="buybutton button-primary" to={currentIssue}>
                    BUY CURRENT ISSUE
                  </Link>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2 mt-6"
                      fixed={shuffledArray[0]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[1]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>

                <div>
                  <Link to="">
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
                    FICTION
                  </h4>
                  <hr />
                  <div className="pt-2">
                    <Link to="">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>
                </div>
                {posts
                  .filter(post => post.node.frontmatter.category === "FICTION")          /*This should only pull from md files with category "fiction", excluding posts marked featured*/
                  .map(({ node: post }) => {
                    return (
                      <div className="pb-1 container" key={post.id}>
                        <h1 className="pt-1">
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>
                          By <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link> in <Link to={post.frontmatter.issue.idpath}> {post.frontmatter.issue.id}</Link>
                        </h2>
                        <span dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.shortdescription) }} />
                        <hr />
                      </div>
                    )
                  })}
              <div className="container">
                <div className="row">

                  <div className="col-sm">                                                                    {/*Previous page link*/}
                    <p className="text-left">
                      {!isFirst && (
                        <Link to={prevPage} rel="prev">
                          ← Previous Page
                        </Link>
                      )}
                    </p>
                  </div>            
                  <div className="col-sm">
                    <p className="text-center">
                      {Array.from({ length: FICnumPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/fiction/${i === 0 ? "" : i + 1}`}>
                          &nbsp;&nbsp;&nbsp;{i + 1}&nbsp;&nbsp;&nbsp;
                        </Link>
                      ))}
                    </p>
                  </div>
                  <div className="col-sm">
                    <p className="text-right">
                      {!isLast && (
                        <Link to={nextPage} rel="next">
                          Next Page →
                        </Link>
                      )}
                    </p>
                  </div>
                </div>         
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
    )
  }
}

export const archiveFictionQuery = graphql`
  query archiveFictionQuery($skip: Int!, $limit: Int!) {
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
      filter: { frontmatter: {category:{eq:"FICTION"} } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 750)
          html
          id
          frontmatter {
            path
            title
            shortdescription
            author {
              id
              idpath
            }
            issue {
              id
              idpath
            }
            date(formatString: "DD MMMM YYYY")
            category
          }
        }
      }
    }
  }
`
