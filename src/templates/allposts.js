import React from 'react';  
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-Image';

const Allposts = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { author } = data.markdownRemark.frontmatter;
  const { issue } = data.markdownRemark.frontmatter;
  const { currentcover } = data.markdownRemark.frontmatter;
  const { category } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-home">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title={title} />
      
      <div className="intro pb-1">
        <div className="container">
          <div className="row2 pt-0 pb-3 justify-content-start">
            <div className="grid-container pt-2">
              <div className="wide">
              <h4>{category}</h4>
              <hr />
                <h1>{title}</h1>
                <h2>By  <Link to="/"> {author}</Link> in  <Link to="/"> {issue}</Link></h2>
                <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
              <div className="thin">
              <Link to="/">
                        <Image className="topimage"
                          fixed={currentcover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                        />
                      </Link>
                      
                      <div className="col-12 text-center pb-3">
                  <Link className="button button-primary" to="/about">
                    About
                  </Link>
                  <Link className="button button-primary" to="/support">
                    Support
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
        author
        issue
        category
        currentcover {
          childImageSharp {
            fixed(width: 403) {                                           #This changed the post picture sizes on the front page (originally 75)
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

export default Allposts;
