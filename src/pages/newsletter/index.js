import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import SEO_image from '../../images/SEO_image.jpg';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

const newsLetter = (props) => {
  const data = props.data;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine, Newsletter" image={SEO_image} alt="Haven Spec Magazine, Newsletter Page Image" />
      <Helmet>
        <meta
          name="Haven Spec Magazine, Newsletter"
          content="Haven Spec Magazine, Newsletter"
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
                <h4>NEWSLETTER</h4>
              </div>
              <div className='bio-bottom-margin' style={{borderBottom:'none'}}>                
              <div className='content-div-dynamic' style={{borderBottom:'none'}}>
                {/* <Link to="/subscribe">
                    <Image className="advertLong-top" fixed={data.advertLong.childImageSharp.fixed} />
                  </Link> */}
                  <p>
                    This is where you could sign up for our newsletter. You know, if we had one. Maybe in 2024?
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
  query newsletterQuery {
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

export default newsLetter;
