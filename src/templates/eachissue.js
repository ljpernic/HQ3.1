import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import paragraphs from "lines-to-paragraphs";

import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

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

const Eachissue = props => {
  const posts = props.data.allMarkdownRemark.edges;
  const { pageContext } = props;
  const data = props.data;
  const { idpath, issueidname, text, artist, artistbio, artistTwitter } = pageContext;
  const twitter = `http://twitter.com/havenspec`;
  const currentIssue = `https://ko-fi.com/s/f371bb536b`;

  const fictionContent = posts.filter(post => post.node.frontmatter.category === "FICTION" && post.node.frontmatter.issue.id === issueidname);
  const poetryContent = posts.filter(post => post.node.frontmatter.category === "POETRY" && post.node.frontmatter.issue.id === issueidname);
  const nonFictionContent = posts.filter(post => post.node.frontmatter.category === "NON-FICTION" && post.node.frontmatter.issue.id === issueidname);

  const fictionHeader = fictionContent.length === 0 ? null : <h4>Fiction:</h4>
  const poetryHeader = poetryContent.length === 0 ? null : <h4>Poetry:</h4>  
  const nonFictionHeader = nonFictionContent.length === 0 ? null : <h4>Non-Fiction:</h4>

  const twitterLink = `http://twitter.com/${artistTwitter}`;

  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);
  
  return (
    <Layout bodyClass="page-home">
      <SEO title={issueidname} />
      <Helmet>
        <meta
          name="Haven Spec Issue"
          content="Another awesome issue published by Haven Spec!"
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
                      fixed={data.markdownRemark.frontmatter.issue.issuecover.childImageSharp.fixed}
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
                    {issueidname}
                  </h4>
                  <hr />
                  
                  <div className="pt-1 pb-1">
{                   <span style={{ padding: 0 }} dangerouslySetInnerHTML={{ __html: paragraphs(text) }} />}
                    <hr />
                  </div>

                  <div className="editorImageAbout mb-2">
                    <Image
                        fixed={data.markdownRemark.frontmatter.issue.artistimage.childImageSharp.fixed}
                    />
                          <a href={twitterLink}>
                            <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                              <FaTwitter />
                            </IconContext.Provider>
                          </a>
                    </div>

                    <h1 className="pb-1 pt-1">
                      Cover Artist: {artist}
                    </h1>
                    <div className="pt-1 pb-1">
{                  <span style={{ padding: 0 }} dangerouslySetInnerHTML={{ __html: paragraphs(artistbio) }} />}
                  <hr />
                  </div>


                    <div className="frontissue">
              <div className="col-12">
              <h3>
                CONTENT
              </h3>
              {fictionHeader}
              {fictionContent
                .map((data, index) => data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}
              {poetryHeader}
                {poetryContent
                  .map((data, index) => data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}
              {nonFictionHeader}
                {nonFictionContent
                  .map((data, index) => data.node.frontmatter.title === null ? null : data.node.frontmatter.available === true ? <p key={data.node.frontmatter.title}><Link to={data.node.frontmatter.path}>{data.node.frontmatter.title}</Link> by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> : <p key={data.node.frontmatter.title}>{data.node.frontmatter.title} by <Link to={data.node.frontmatter.author.idpath}> {data.node.frontmatter.author.id}</Link></p> )}

              <br />
              <div className="pb-2">
                  <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>
                </div>
              </div>



{/*                  <div className="share">
                    <h1>Share</h1>
                  </div>
*/}                  <hr className="mb-2"/>
                  
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query($issueidname: String!) {
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
    filter: { fileAbsolutePath: { regex: "/.*.md$/" }}                  #This tells this file to pull from the md files generated by allposts?
    sort: { fields: [frontmatter___date], order: DESC }
    ) {
    totalCount
    edges {
      node {
        html
        id
        frontmatter {
          featured
          available
          path
          title
          description
          author {
            id
            idpath
          }
          issue {
            id
            idpath
          }
          category
        }
      }
    }
  }
  markdownRemark(frontmatter: {issue: {id: {eq: $issueidname}}}) {
      frontmatter {
        title
        path
        author {
          id
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
        issue {
          id
          idpath
          issuecover {
            childImageSharp {
              fixed(width:280) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          text
          artist
          artistimage {
            childImageSharp {
              fixed(width: 150) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
          artistbio 
        }
        category
      }
      html
    }
  }
`;

export default Eachissue;