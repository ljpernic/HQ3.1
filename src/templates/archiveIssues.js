import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import Advertisement from '../components/advertisement';
import CurrentIssue from '../components/CurrentIssue';

export default class archiveIssues extends React.Component {
  render() {
    const issueNodes = this.props.data.allIssueYaml.edges;
    const data = this.props.data;
   
    const { issueCurrentPage, issuePagination } = this.props.pageContext
    const isFirst = issueCurrentPage === 1
    const isLast = issueCurrentPage === issuePagination
    const prevPage = issueCurrentPage - 1 === 1 ? "/all-issues/" : `/all-issues/${issueCurrentPage - 1}`
    const nextPage = `/all-issues/${issueCurrentPage + 1}`
        
    return (
      <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine, Issue Archive" />
      <Helmet>
        <meta
          name="Haven Spec Magazine, Issue Archive"
          content="Haven Spec Magazine, Issue Archive"
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

                {issueNodes.map(({ node: issue }, index) => (
                      <div key={issue.id} className="pt-1 pb-2">
                        <Image className="editorImageAbout mb-2"
                            fixed={issue.issuecover.childImageSharp.fixed}
                          />
                        <h1 className="pt-1 pb-1">
                          <Link to={issue.idpath}>
                            {issue.id}
                          </Link>
                        </h1>
                        <span dangerouslySetInnerHTML={{ __html: paragraphs(issue.teaserText) }} />
                          <hr className="mt-5"/>
                      </div>
                ))}
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
                      {Array.from({ length: issuePagination }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/all-issues/${i === 0 ? "" : i + 1}`}>
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


export const archiveIssuesQuery  = graphql`
  query {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allIssueYaml {
      edges {
        node {
          id
          idpath
          text
          teaserText
          issuecover {
            childImageSharp {
              fixed(width: 150) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
            }
          }
        }
      }
    }
  }
`