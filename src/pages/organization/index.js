import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import SEO_image from '../../images/SEO_image.jpg';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

const Organization = (props) => {
  const data = props.data;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine, Organization" image={SEO_image} alt="Haven Spec Magazine, Organization Page Image" />
      <Helmet>
        <meta
          name="Haven Spec Magazine, Organization"
          content="Haven Spec Magazine, Organization"
        />
      </Helmet>

      <div className="main-body">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="one">
                <CurrentIssue />
                <Advertisement />
              </div>
              <div>
              <div className='title-static-border'>
                <h4>ORGANIZATION</h4>
              </div>
            <div className='bio-bottom-margin' style={{borderBottom:'none'}}>                
              <div className='content-div-dynamic' style={{borderBottom:'none'}}>
                  <p>
                    This page is currently undergoing an overhaul. The plan is to update this with our current organizational structure. Originally, 
                    I had wanted to make this project a co-operative, but I was pretty much by myself for the first year. By the time people were 
                    incorporated into the decision-making process, I was too invested in the project to open it up. That being said, the assistant 
                    editors and I make all major decisions together, and there is a profit-sharing scheme in place that includes all of the editors 
                    (you know, if we ever actually turn a profit).
                  </p>

              </div>
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
  query OrganizationQuery {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Organization;
