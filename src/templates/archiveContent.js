import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import paragraphs from 'lines-to-paragraphs';
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import Advertisement from '../components/advertisement';
import CurrentIssue from '../components/CurrentIssue';
import Pagination from '../components/Pagination';

export default class ArchiveContent extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    console.log(posts[0].node.frontmatter.authors[0].id)
    const { currentPage, pagination, category } = pageContext;

    const basePath = category.toLowerCase();
    return (
      <Layout bodyClass="page-home">
        <SEO title={`Haven Spec Magazine, ${category}`} image={SEO_image} alt={`Haven Spec Magazine, ${category} Archive Page Image`} />
        <Helmet>
          <meta name={`Haven Spec Magazine, ${category}`} content={`Haven Spec Magazine, ${category}`} />
        </Helmet>

        <div className="main-body">
          <div className="container">
            <div className="row2">
              <div className="grid-container"> 
                <div className='one'>
                  <CurrentIssue />
                  <Advertisement />
                </div>
                <div>
                <div className='title-static-border'>
                    <h4>{category}</h4>
                  </div>
                  {/* <div className='intro-div-static' style={{borderBottom:'none'}}>
                    <Link to="/subscribe">
                      <Image className="advertLong-top" fixed={this.props.data.advertLong.childImageSharp.fixed} />
                    </Link>
                  </div> */}

                  <div className='bio-bottom-margin' style={{paddingBottom:'0px', borderBottom:'none'}}>
                  {posts
                    .filter(post => post.node.frontmatter.category === category && post.node.frontmatter.available === true)
                    .map(({ node: { id, frontmatter: { path, title, shortdescription, authors, issue } } }) => (
                      <div key={id} className="content-div-dynamic">
                        <h2>
                          <Link to={path}>{title}</Link>
                        </h2>
                        <h5>
                          By {authors.map((auth, index) => (
                            <React.Fragment key={auth.id}>
                              <Link to={auth.idpath}>{auth.id}</Link>
                              {index !== authors.length - 1 && ", "}
                            </React.Fragment>
                          ))} in <Link to={issue.idpath}>{issue.id}</Link>
                        </h5>
                        <span dangerouslySetInnerHTML={{ __html: paragraphs(shortdescription) }} />
                      </div>
                    ))}
                  </div>

                  <Pagination
                    basePath={`/${category.toLowerCase()}`} // Adjust basePath here
                    currentPage={currentPage}
                    totalPages={pagination}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const archiveContentQuery = graphql`
  query archiveContentQuery($skip: Int!, $limit: Int!, $category: String!) {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 750)
          id
          frontmatter {
            available
            path
            title
            category
            shortdescription
            authors {
              id
              idpath
            }
            issue {
              id
              idpath
            }
          }
        }
      }
    }
  }
`;

