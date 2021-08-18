import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import CustomReactShare from "../components/CustomShareBlock";

import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Eachpost = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { author } = data.markdownRemark.frontmatter;
  const { issue } = data.markdownRemark.frontmatter;
  const { category } = data.markdownRemark.frontmatter;
  const { excerpt } = data.markdownRemark.frontmatter;
  const { path } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const url = `http://havenspec.com${path}`;
  const twitter = `http://twitter.com/${author.twitter}`;


  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title={title} />
      

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

                  <h4 className="pb-1">
                    {category}
                  </h4>
                  <hr />

                  <h1 className="pt-1">
                    {title}
                  </h1>
                  <h2>
                    By <Link to={author.idpath}> {author.id}</Link> in <Link to={issue.idpath}> {issue.id}</Link>
                  </h2>
                  <div className="content" dangerouslySetInnerHTML={{ __html: html }} />

                  <div className="share">
                    <h6>Share:</h6>
                    <CustomReactShare title={title} excerpt={excerpt} url={url} />
                  </div>

                  <hr />
                  <div className="authorimagebottom">
                    <Image className=""
                      fluid={author.picture.childImageSharp.fluid}            /*Author Image called here*/
                    />
                      <a href={twitter}>
                        <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                          <FaTwitter />
                        </IconContext.Provider>
                      </a>
                  </div>

                    <h1 className="biotitle"><Link to={author.idpath}> {author.id}</Link></h1>
                    <p>{author.bio}</p>
                    <p>{author.stories.map((data, index) => {
                      return <li key={`content_item_${index}`}>{data.item}</li>
                      })}
                    </p> 
                    <hr />

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
  query($id: String!) {
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        author {
          id
          idpath
          bio
          twitter
          stories {
            item
          }
          picture {
            childImageSharp {
              fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 200, maxHeight: 200) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        issue {
          id
          idpath
        }
        category
      }
      html
    }
  }
`;

export default Eachpost;
