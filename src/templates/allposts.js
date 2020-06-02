import React from 'react';  
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Allposts = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { author } = data.markdownRemark.frontmatter;
  const { issue } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-service">                                 {/*TEMPLATE FOR BUILDING INDIVIDUAL STORY PAGES*/}
      <SEO title={title} />
      <div className="postbody">
        <div className="container pt-8 pt-md-4">
          <div className="row2 justify-content-start">
            <div className="col-12">
              <h1>{title}</h1>
              <h2>By  <Link to="/"> {author}</Link> in  <Link to="/"> {issue}</Link></h2>
              <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
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
      }
      html
    }
  }
`;

export default Allposts;
