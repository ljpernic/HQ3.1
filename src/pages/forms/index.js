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

      <div className="intro">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="one">
                <CurrentIssue />
                <Advertisement />
              </div>
              <div>
                <div className="col-12">
                  <h4>
                    Submission Form
                  </h4>
                  <hr />
                  <div className="pt-2">
                    <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}
                      />
                    </Link>
                  </div>
                </div>

                    <p>Below is the submission form for submitting fiction, poetry, non-fiction, and art to Haven Spec Magazine. If you haven't already done 
                      so, please read our submission guidelines on <Link to="/submit">the submission page.</Link> 
                    </p>

                    <div className="pt-2">
                      <iframe className="iframeFiction" src="https://www.cognitoforms.com/f/GtTjHOYx10OF7APqunHRFw/1"></iframe>
                    </div>
                    <hr className="mb-2" />
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
