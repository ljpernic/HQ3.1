import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';

import paragraphs from "lines-to-paragraphs";

export default class archivePoetry extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const data = this.props.data;
    
    const { POEcurrentPage, POEnumPages } = this.props.pageContext
    const isFirst = POEcurrentPage === 1
    const isLast = POEcurrentPage === POEnumPages
    const prevPage = POEcurrentPage - 1 === 1 ? "/" : `/poetry/${POEcurrentPage - 1}`
    const nextPage = `/poetry/${POEcurrentPage + 1}`
       
    return (
      <Layout bodyClass="page-home">
      <SEO title="Poetry" />
      <Helmet>
        <meta
          name="description"
          content="all poetry of Haven Spec"
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
                  <Link className="buybutton button-primary" to="">
                    BUY CURRENT ISSUE
                  </Link>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2 mt-6"
                      fixed={data.advert01.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={data.advert02.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={data.advert03.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
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
                    POETRY
                  </h4>
                  <hr />
                  <div className="pt-2">
                    <Link to="">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}
                      />
                    </Link>
                  </div>
                </div>
                {posts
                  .filter(post => post.node.frontmatter.category === "POETRY")
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
                  <div className="col-sm">
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
                      {Array.from({ length: POEnumPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/poetry/${i === 0 ? "" : i + 1}`}>
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

export const archivePoetryQuery = graphql`
  query archivePoetryQuery($skip: Int!, $limit: Int!) {
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
      filter: { frontmatter: {category:{eq:"POETRY"} } }
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
