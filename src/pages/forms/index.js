import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import SEO_image from '../../images/SEO_image.jpg';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

const Forms = (props) => {
  const data = props.data;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine, Submission Form" image={SEO_image} alt="Haven Spec Magazine, Submission Form Image" />
      <Helmet>
        <meta
          name="Haven Spec Magazine, Submission Form"
          content="Haven Spec Magazine, Submission Form"
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
                <h4>FORMS</h4>
              </div>
              <div className='bio-bottom-margin' style={{borderBottom:'none'}}>                
                <div className='content-div-dynamic' style={{borderBottom:'none'}}>
                  <p>
                    We are no longer using this page as our submission page! Instead, you should go 
                    to <a href='https://acolyte.media'>acolyte.media</a> and submit something there.
                  </p>
                  <p>
                    But be sure to read <Link to='/submit'>our updated guidelines</Link> before you do!
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
  query FormsQuery {
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

export default Forms;
