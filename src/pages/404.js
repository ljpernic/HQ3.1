import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../components/advertisement';
import CurrentIssue from '../components/CurrentIssue';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout bodyClass="page-home">
      <div className="main-body">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div>
                <div className='bio-bottom-margin' style={{borderBottom:'none'}}>
                <div className='content-div-dynamic' style={{borderBottom:'none'}}>
                  <p>
                    The page you're looking for doesn't seem to exist.
                  </p>

                  <p> 
                    Funny how that happens.
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
  }
}

export default NotFoundPage;
