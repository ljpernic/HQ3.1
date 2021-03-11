import React from 'react';  
import { graphql, Link, withPrefix } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import paragraphs from "lines-to-paragraphs";

export default ({
  data: {
    allAuthorYaml: { edges: authorNodes },
  },
}) => (
  <Layout bodyClass="page-home">
    <SEO title="Fiction" />
    <Helmet>
      <meta
        name="description"
        content="all contributors to Haven Spec"
      />
    </Helmet>

    <div className="postbody pb-4">
      <div className="container">
        <div className="row2 justify-content-start">
          <div className="col-12">
            <h4 className="pt-3 pb-1">CONTRIBUTORS</h4>
            <hr />
          </div>                                                                             {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">
            <div className="col">
              {authorNodes.map(({ node: author }, index) => (
                <div>                    
                  <Image className="authorimage"
                    fluid={author.picture.childImageSharp.fluid}            /*Where the image in the post on the front page is called*/
                  />
                  <h1 pb><Link to={author.idpath}>{author.id}</Link></h1>
                  <p dangerouslySetInnerHTML={{ __html: paragraphs(author.bio) }} />
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)



export const archivearchiveQuery = graphql`
  query AuthorsQuery {
    allAuthorYaml {
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