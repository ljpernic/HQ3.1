import React from 'react';  
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import Advertisement from '../components/advertisement';
import CurrentIssue from '../components/CurrentIssue';

export default class ArchiveContent extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const data = this.props.data;
    const { currentPage, pagination, category } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === pagination;
    const prevPage = currentPage - 1 === 1 ? `/${category.toLowerCase()}/` : `/${category.toLowerCase()}/${currentPage - 1}`;
    const nextPage = `/${category.toLowerCase()}/${currentPage + 1}`;

    return (
      <Layout bodyClass="page-home">
        <SEO title={`Haven Spec Magazine, ${category}`} image={SEO_image} alt={`Haven Spec Magazine, ${category} Archive Page Image`} />
        <Helmet>
          <meta
            name={`Haven Spec Magazine, ${category}`}
            content={`Haven Spec Magazine, ${category}`}
          />
        </Helmet>

        <div className="intro">
          <div className="container">
            <div className="row2">
              <div className="grid-container"> 
                <div className='one'>
                  <CurrentIssue />
                  <Advertisement />
                </div>
                <div>
                  <div className="col-12">
                    <h4>
                      {category}
                    </h4>
                    <hr />
                    <div className="pt-2">
                      <Link to="/subscribe">
                        <Image className="advertLong"
                          fixed={data.advertLong.childImageSharp.fixed}
                        />
                      </Link>
                    </div>
                  </div>
                  {posts
                    .filter(post => post.node.frontmatter.category === category && post.node.frontmatter.available === true)
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
                          {Array.from({ length: pagination }, (_, i) => (
                            <Link key={`pagination-number${i + 1}`} to={`/${category.toLowerCase()}/${i === 0 ? "" : i + 1}`}>
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

export const archiveContentQuery = graphql`
  query archiveContentQuery($skip: Int!, $limit: Int!, $category: String!) {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: {category: {eq: $category} } }
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
            available
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
