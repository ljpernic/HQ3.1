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
import Pagination from '../components/Pagination';

class ArchiveIssues extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const issueNodes = data.allIssueYaml.edges;

    const { issueCurrentPage, issuePagination } = pageContext
        
    return (
      <Layout bodyClass="page-home">
        <SEO title="Haven Spec Magazine, Issues" image={SEO_image} alt="Haven Spec Magazine, Issue Archive Page Image" />
        <Helmet>
          <meta
            name="Haven Spec Magazine, Issues"
            content="Haven Spec Magazine, Issues"
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
                      ISSUE ARCHIVE
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

                  {issueNodes.map(({ node: issue }) => (
                    <div key={issue.id} className="contributor-div">
                      <Image className="editorImageAbout mb-2"
                        fixed={issue.issuecover.childImageSharp.fixed}
                      />
                      <h1 className="pt-1 pb-1">
                        <Link to={issue.idpath}>{issue.id}</Link>
                      </h1>
                      <span dangerouslySetInnerHTML={{ __html: paragraphs(issue.teaserText) }} />
                    </div>
                  ))}

                  <Pagination
                    currentPage={issueCurrentPage}
                    totalPages={issuePagination}
                    basePath="/all-issues"
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

export const archiveIssuesQuery = graphql`
  query archiveIssuesQuery($skip: Int!, $limit: Int!) {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allIssueYaml(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          idpath
          teaserText
          issuecover {
            childImageSharp {
              fixed(width: 150) {
                ...GatsbyImageSharpFixed 
              }
            }
          }
        }
      }
    }
  }
`;

export default ArchiveIssues;
