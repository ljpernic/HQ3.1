import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";

const Subscribe = (props) => {
  const data = props.data;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Subscribe" />
      <Helmet>
        <meta
          name="description"
          content="Subscribe page of Haven Spec"
        />
      </Helmet>

      <div className="intro">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container">
              <div className="thinLeft">
              <div>
                    <Link to="">
                      <Image className="topImageLeft"
                        fixed={data.currentCover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                    <div className="text-center">
                      <Link className="buybutton button-primary" to="">
                        BUY THIS ISSUE
                      </Link>
                    </div>
                  </div>
                  <div className="justify-content-center">

                  <Link to="">
                      <Image className="advert mb-2 mt-6"
                        fixed={data.advert01.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="">
                      <Image className="advert mb-2"
                        fixed={data.advert02.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                  <Link to="">
                      <Image className="advert mb-2"
                        fixed={data.advert03.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                  </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                </div>
                <div className="wideRight">
                <div className="col-12">
                  <h4>
                    SUBSCRIBE AND SUPPORT
                  </h4>
                  <hr />
                </div>
                <div className="pt-2">
                    <Link to="">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>                

            <h1 className="pb-1 pt-1">
              Subscribe
            </h1>
            <p>
              Get each new issue sent directly to your inbox through <Link to="https://ko-fi.com/havenspec/tiers"> Ko-Fi </Link> or <Link to=""> Patreon</Link>! It's 
              basically magic! You can also get cool merch and our eternal thanks! Remember—a mastodon never forgets!
            </p>
            <p className="pb-1">  
              Check out <Link to="https://ko-fi.com/havenspec/tiers">our membership page on Ko-Fi </Link> or <Link to="">find us on Patreon </Link>to subscribe!
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
            Kickstarter
            </h1>
            <p className="pb-1">
              Keep an eye on this space for information about any Kickstarters we might do.
            </p>
            <p>
              The future belongs to all of us. 
            </p>
            <hr />

            <h1 className="pt-1 pb-1">
              Advertise
            </h1>
            <p className="">
              At this moment, all ads are $30 per month, starting from the first of a given month and going until that month ends.
            </p>
            <p>
              Each ad appears on every page of the website. The square ads change positions with each pageview. Do note, however, that all advertisements are subject to approval.
            </p>
            <p>
              To advertise, contact us at (our domain name)@gmail.com. (The domain name is the thing between "www." and ".com" of the homepage.) Please also be prepared to send us a
              suitable image of 250 x 250 pixels (for square ads) or 424 x 60 pixels (for the banner ad), along with a single link to whatever's being advertised. 
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
  query SubscribeQuery {
    currentCover: file(relativePath: {eq: "CurrentCover.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert01: file(relativePath: {eq: "advertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert02: file(relativePath: {eq: "advertisement02.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    advert03: file(relativePath: {eq: "advertisement03.jpg"}) {
      id
      childImageSharp {
        fixed(width:280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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

export default Subscribe;
