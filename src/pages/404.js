import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import styled from "styled-components";

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout bodyClass="page-home">
        <div className="main-body">
          <div className="container">
            <div className="row2 justify-content-start">
              <div className="col-12">
                <p className="text-center">The page you're looking for doesn't seem to exist.</p>
                <p className="text-center">Funny how that happens.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
