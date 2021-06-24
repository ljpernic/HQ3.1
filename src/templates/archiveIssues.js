import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import CustomReactShare from "../components/CustomShareBlock";

export default class archiveIssues extends React.Component {
  render() {
    const issueNodes = this.props.data.allIssueYaml.edges;
    const data = this.props.data;

    const { FULLcurrentPage, FULLnumPages } = this.props.pageContext
    const isFirst = FULLcurrentPage === 1
    const isLast = FULLcurrentPage === FULLnumPages
    const prevPage = FULLcurrentPage - 1 === 1 ? "/" : `/fullissues/${FULLcurrentPage - 1}`
    const nextPage = `/fullissues/${FULLcurrentPage + 1}`
        
    return (
      <Layout bodyClass="page-home">
      <SEO title="Full Issues" />
      <Helmet>
        <meta
          name="description"
          content="Every issue of Haven Spec"
        />
      </Helmet>


      <div className="intro">                                                                {/*FICTION*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container">
              <div className="thinLeft">
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

              <div className="wideRight">
                <div className="col-12">
                  <h4>
                    ISSUE ARCHIVE
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

                {issueNodes.map(({ node: issue }, index) => (
                      <div key={issue.id}>
                        <Image className="editorImageAbout"
                            fixed={issue.currentcover.childImageSharp.fixed}            /*Where the image in the post on the front page is called*/
                          />
                        <h1 className="pt-1 pb-1">
                          <Link to={issue.idpath}>
                            {issue.id}
                          </Link>
                        </h1>

                        <span dangerouslySetInnerHTML={{ __html: paragraphs(issue.text) }} />
                          <hr />
                      </div>
                ))}

              </div>

            </div>
          </div>  
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
                      {Array.from({ length: FULLnumPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/fullissues/${i === 0 ? "" : i + 1}`}>
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


    </Layout>
    )
  }
}


export const archiveIssuesQuery  = graphql`
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
    allIssueYaml {
      edges {
        node {
          id
          idpath
          text
          currentcover {
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