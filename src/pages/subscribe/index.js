import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Subscribe = (props) => {
  const data = props.data;
  const currentIssue = `https://ko-fi.com/s/f371bb536b`;
  
  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);
  
  return (
    <Layout bodyClass="page-home">
      <SEO title="Subscribe" />
      <Helmet>
      <script async src="https://c6.patreon.com/becomePatronButton.bundle.js" />
        <meta
          name="description"
          content="Subscribe page of Haven Spec"
        />
      </Helmet>

      <div className="intro">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="thinLeft one">
                <div>
                  <a href={currentIssue}>
                    <Image className="topImageLeft"
                      fixed={data.currentCover.childImageSharp.fixed}
                    />
                  </a>
                    <div className="text-center">
                      <a className="buybutton button-primary" href={currentIssue}>
                        BUY CURRENT ISSUE
                      </a>
                    </div>
                  </div>
                  <div className="justify-content-center">

                  <Link to="/subscribe">
                      <Image className="advert mb-2 mt-6"
                        fixed={shuffledArray[0]}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="/subscribe">
                      <Image className="advert mb-2"
                        fixed={shuffledArray[1]}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="/subscribe">
                      <Image className="advert mb-2"
                        fixed={shuffledArray[2]}      /*This pulls the image from the md file with featured: true (current cover)*/
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
                <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>                

            <h1 className="pb-1 pt-1">
              Subscribe
            </h1>
            <p>
              Get each new issue sent directly to your inbox through <Link to="https://ko-fi.com/havenspec/tiers"> Ko-Fi </Link> or 
              <Link to="https://www.patreon.com/HavenSpecMagazine"> Patreon</Link>! It's basically magic! Remember, a mastodon never forgets—to subscribe!
            </p>
            <p>
              You can also sign up for workshop-style feedback from our editors on any work of prose or poetry you choose (once per month and up to 6K words), and there's even an 
              option to meet one-on-one with our editor over zoom for an hour-long deep-dive critique session!
            </p>
            <p className="pb-1">
              Every penny that we get through Ko-Fi and Patreon will go towards increasing author pay! If you'd like to know more about our budget breakdown and organizational  
              set up, <Link to="/organization">Click here!</Link> Help us pay our authors and artists the rates they deserve! 
            </p>

            <a href="https://www.patreon.com/bePatron?u=61506985" data-patreon-widget-type="become-patron-button">
              Become a Patron!
            </a>

            <hr />
            <h1 className="pt-1 pb-1">
            Kickstarter
            </h1>
            <p className="pb-1">
              Keep an eye on this space for information about any Kickstarters we might do! The future belongs to all of us!
            </p>
            <hr />

            <h1 className="pt-1 pb-1">
              Advertise
            </h1>
            <p className="">
              At this moment, all ads are $30 per month, starting from the first of a given month and going until that month ends.
            </p>
            <p>
              Each ad appears on every page of the website, and the square ads change position with each pageview. Do note, however, that all advertisements are subject to approval.
            </p>
            <p>
              To advertise, contact us using the contact form on our <Link to="/about">about page</Link>. Please also be prepared to send us a suitable image of 250 x 250 pixels 
              (for square ads) or 424 x 60 pixels (for the banner ad), along with a single link to whatever's being advertised. 
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
