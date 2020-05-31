import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';


const Support = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const support = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-services">
      <SEO title="Support" />
      <Helmet>
        <meta
          name="description"
          content="Support page of Haven Quarterly"
        />
      </Helmet>

      <div className="postbody">
      <div className="container pt-8 pt-md-4">
        <div className="row2 justify-content-start">
          <div className="col-12">
            <Link to="/">
                <h3>How to Support Us</h3>
            </Link>
            <hr />
          </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">
            {posts
              .filter(post => post.node.frontmatter.category === "support")
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <Image className="inlineimage"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}            /*Where the image in the post on the front page is called*/
                      />
                      <h1 pb>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>By  <Link to="/"> {post.frontmatter.author}</Link> in  <Link to="/"> {post.frontmatter.issue}</Link></h2>
                      <p>{post.excerpt}</p>
                      <hr />
                  </div>
                )
              })}

            </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export const query = graphql`
  query SupportQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/newposts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            category
            featured
            path
            title
            author
            issue
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp {
                fixed(width: 322) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 450) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Support;
