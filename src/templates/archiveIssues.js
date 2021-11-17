import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import CustomReactShare from "../components/CustomShareBlock";

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

export default class archiveIssues extends React.Component {
  render() {
    const issueNodes = this.props.data.allIssueYaml.edges;
    const data = this.props.data;
    const currentIssue = `https://ko-fi.com/havenspec/shop`;
    
    const { FULLcurrentPage, FULLnumPages } = this.props.pageContext
    const isFirst = FULLcurrentPage === 1
    const isLast = FULLcurrentPage === FULLnumPages
    const prevPage = FULLcurrentPage - 1 === 1 ? "/fullissues/" : `/fullissues/${FULLcurrentPage - 1}`
    const nextPage = `/fullissues/${FULLcurrentPage + 1}`
        
    var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
    var shuffledArray = shuffle(imgArray);
    
    return (
      <Layout bodyClass="page-home">
      <SEO title="Full Issues" />
      <Helmet>
        <meta
          name="description"
          content="Every issue of Haven Spec"
        />
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