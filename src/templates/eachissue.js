import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import CustomReactShare from "../components/CustomShareBlock";
import Helmet from 'react-helmet';
import paragraphs from "lines-to-paragraphs";

import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Eachissue = props => {
  const posts = props.data.allMarkdownRemark.edges;
  const { pageContext } = props;
  const data = props.data;
  const { idpath, issueidname, text, artist, artistbio, artistTwitter } = pageContext;
  const twitter = `http://twitter.com/havenspec`;

  const twitterLink = `http://twitter.com/${artistTwitter}`;

  return (
    <Layout bodyClass="page-home">
      <SEO title={issueidname} />
      <Helmet>
        <meta
          name="Haven Spec Issue"
          content="Another awesome issue published by Haven Spec!"
        />
      </Helmet>

      <div className="intro">
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

                    <h1 className="biotitle pb-1 pt-1">
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
                <h4>
                  Fiction:
                </h4>
                  {posts
                    .filter(post => /*!post.node.frontmatter.featured &&*/ post.node.frontmatter.category === "FICTION" && post.node.frontmatter.issue.id === issueidname)
                    .map(({ node: post }) => {
                      return (
                        <p key={post.frontmatter.title}>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                  })}
                  <h4>
                    Poetry:
                  </h4>
                    {posts
                    .filter(post => !post.node.frontmatter.featured && post.node.frontmatter.category === "POETRY" && post.node.frontmatter.issue.id === issueidname)
                      .map(({ node: post }) => {
                      return (
                        <p key={post.frontmatter.title}>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                    })}
                  <h4>
                    Non-Fiction:
                  </h4>
                    {posts
                    .filter(post => !post.node.frontmatter.featured && post.node.frontmatter.category === "NON-FICTION" && post.node.frontmatter.issue.id === issueidname)
                      .map(({ node: post }) => {
                      return (
                        <p key={post.frontmatter.title}>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> by <Link to={post.frontmatter.author.idpath}> {post.frontmatter.author.id}</Link>
                        </p>
                      )
                    })}
                    <br />
                  <div className="pb-2">
                    <Link to="">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>
                </div>
              </div>



                  <div className="share">
                    <h1>Share</h1>
                    <CustomReactShare title={issueidname} excerpt={text} url={idpath} />
                  </div>
                  <hr className="mb-2"/>
                  
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