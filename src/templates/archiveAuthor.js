import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';

import { IconContext } from "react-icons";
import { FaTwitter } from 'react-icons/fa';

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

export default class archiveAuthor extends React.Component {
  render() {
    const posts = this.props.data.allAuthorYaml.edges;
    const data = this.props.data;
    const currentIssue = `https://ko-fi.com/havenspec/shop`;
    
    const uniqueArray = posts.filter((post, index) => {
      const _thing = JSON.stringify(post);
      return index === posts.findIndex(obj => {
        return JSON.stringify(obj) === _thing;
      });
    });

    const { AUTcurrentPage, AUTnumPages } = this.props.pageContext
    const isFirst = AUTcurrentPage === 1
    const isLast = AUTcurrentPage === AUTnumPages
    const prevPage = AUTcurrentPage - 1 === 1 ? "/contributors/" : `/contributors/${AUTcurrentPage - 1}`
    const nextPage = `/contributors/${AUTcurrentPage + 1}`

    var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
    var shuffledArray = shuffle(imgArray);
    
    return (
      <Layout bodyClass="page-home">
      <SEO title="Contributors" />
      <Helmet>
        <meta
          name="description"
          content="Every contributor to Haven Spec"
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
                    CONTRIBUTORS
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

              {uniqueArray.map(({ node: post }) => (
                
                <div className="pt-1 pb-2">
                  <div className="editorImageAbout mb-5">
                    <Image
                      fixed={post.picture.childImageSharp.fixed}            /*Where the image in the post on the front page is called*/
                    />


                  <a href={`https://www.twitter.com/${post.twitter}`}>
                    <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                      <FaTwitter />
                    </IconContext.Provider>
                </a>
                </div>
                  <h1 className="pt-1 pb-1">
                    <Link to={post.idpath}>
                      {post.id}
                    </Link>
                  </h1>
                  <span dangerouslySetInnerHTML={{ __html: paragraphs(post.bio) }} />
                  <hr className="mt-5" />
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
                      {Array.from({ length: AUTnumPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/contributors/${i === 0 ? "" : i + 1}`}>
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

export const archiveAuthorQuery = graphql`
  query archiveAuthorQuery($skip: Int!, $limit: Int!) {
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
    allAuthorYaml(limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          id
              idpath
              bio
              twitter
              picture {
                  childImageSharp {
                    fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                      ...GatsbyImageSharpFixed 
                    }
                    fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
                   ...GatsbyImageSharpFluid
               }
            }
          }
        }
      }
    }
  }
`








