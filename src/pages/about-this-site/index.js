import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

const aboutThisSite = (props) => {
  const data = props.data;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine, About This Site" />
      <Helmet>
        <meta
          name="Haven Spec Magazine, About This Site"
          content="Haven Spec Magazine, About This Site"
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
                    About This Site
                  </h4>
                  <hr />
                <div className="pt-2">
                  <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>                
                </div>


                  <p>
                    This site was developed from the <a href="https://www.gatsbyjs.com/starters/jugglerx/gatsby-serif-theme">gatsby serif starter</a>. It was built using 
                    gatsby.js and is used here under the MIT license. The background was taken from pixabay.
                  </p>

                  <p> 
                    Our very awesome logo was designed by Haley Grunloh, whom you can find on twitter <a href="https://www.twitter.com/HaleyGrunloh">@HaleyGrunloh</a> and 
                    on the web at <a href="https://www.haleygrunloh.com">www.haleygrunloh.com</a>.
                  </p>

                  <p>
                    A generic copy of this website (which was programmed with Gatsbyjs, a web framework based on ReactJS for building static websites) can be 
                    made available on GitHub. 
                  </p>

                  <p>
                    A copy of the backend system we use can also be made available for anyone who wants it. This is a good option for any magazine who can't afford the 
                    expensive systems already in place. If you're an open source programmer and interested in contributing to the project, feel free to get in touch!  
                  </p>

                  <hr className="mb-2"/>

                  <p>
                    <center>
                      The website design is used here under the MIT license (MIT)
                    </center>
                  </p>
                  <p>
                    <center>
                      Copyright (c) 2015 gatsbyjs
                    </center>
                  </p>
                  <p>
                    <center>
                      Permission is hereby granted, free of charge, to any person obtaining a copy
                      of this software and associated documentation files (the "Software"), to deal
                      in the software without restriction, including without limitation the rights
                      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                      copies of the software, and to permit persons to whom the software is
                      furnished to do so, subject to the following conditions:
                    </center>
                  </p>
                <p>
                  <center>
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the software.
                  </center>
                </p>
              <p className="pb-1">
                <center>
                  The software is provided "As is", without warranty of any kind, express or
                  implied, including but not limited to the warranties of merchantability,
                  fitness for a particular purpose and noninfringement. In no event shall the
                  authors or copyright holders be liable for any claim, damages or other
                  liability, whether in an action of contract, tort or otherwise, arising from,
                  out of or in connection with the software or the use or other dealings in the
                  software.
                </center>
              </p>

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
  query aboutThisSiteQuery {
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

export default aboutThisSite;
