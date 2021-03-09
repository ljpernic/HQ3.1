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
  const { currentcover } = data.markdownRemark.frontmatter;
  const { category } = data.markdownRemark.frontmatter;
  const { excerpt } = data.markdownRemark.frontmatter;
  const { path } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const url = `http://havenspec.com${path}`;
  const twitter = `http://twitter.com/${author.twitter}`;


  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title={title} />
      
      <div className="intro pb-0">
        <div className="container pb-md-4">
          <div className="row2 pt-0 pb-3 justify-content-start">
            <div className="grid-container pt-2">
              <div className="wide">
                <div className="col-12">

                  <h4>{category}</h4>
                  <hr />

                  <h1>{title}</h1>
                  <h2>By <Link to={author.idpath}> {author.id}</Link> in <Link to={issue.idpath}> {issue.id}</Link></h2>
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

              <div className="thin">
                <Link to="/">
                  <Image className="topimage"
                    fixed={currentcover.childImageSharp.fixed}
                  />
                </Link>
                      
                <div className="col-12 text-center pb-3">
                  <Link className="button button-primary" to="/about">
                    About
                  </Link>
                  <Link className="button button-primary" to="/subscribe">
                    Subscribe
                  </Link>
                  <Link className="button button-primary" to="/submit">
                    Submit
                  </Link>
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
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
              fixed(width: 400) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 400, maxHeight: 400) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        issue {
          id
          idpath
          currentcover {
            childImageSharp {
              fixed(width: 350) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          artist
          artistimage {
            childImageSharp {
              fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
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
        currentcover {
          childImageSharp {
            fixed(width: 350) {                                           #This changed the post picture sizes on the front page (originally 75)
              ...GatsbyImageSharpFixed 
            }
            fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

export default Eachpost;
