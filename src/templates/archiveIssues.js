import React from 'react';  
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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

        <div className="main-body">
          <div className="container">
            <div className="row2">
              <div className="grid-container">
                <div className='one'>
                  <CurrentIssue />
                  <Advertisement />
                </div>
                <div>
                <div>
                  <div className='title-static-border'>
                    <h4>ISSUES</h4>
                  </div>
                </div>

                <div className='bio-bottom-margin' style={{paddingBottom:'0px', borderBottom:'none'}}>
                  {issueNodes.map(({ node: issue }) => (
                    <div key={issue.id} className="content-div-dynamic">
                      <GatsbyImage
                        className="editorImageAbout"
                        image={getImage(issue.issuecover)}
                        alt="Issue Cover"
                      />
                      <h1>
                        <Link to={issue.idpath}>{issue.id}</Link>
                      </h1>
                      <span dangerouslySetInnerHTML={{ __html: paragraphs(issue.teaserText) }} />
                    </div>
                  ))}
</div>
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
    allIssueYaml(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          idpath
          teaserText
          issuecover {
            childImageSharp {
              gatsbyImageData(
                width: 150
                placeholder: BLURRED
                layout: FIXED
              )
            }
          }
        }
      }
    }
  }
`;

export default ArchiveIssues;
