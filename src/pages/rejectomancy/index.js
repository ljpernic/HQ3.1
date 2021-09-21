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

const Rejectomancy = (props) => {
  const data = props.data;
  const currentIssue = `https://ko-fi.com/havenspec/shop`;
  
  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);
  
  return (
    <Layout bodyClass="page-home">
      <SEO title="Rejectomancy" />
      <Helmet>
        <meta
          name="description"
          content="Haven Spec Rejectomancy"
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
                    REJECTOMANCY
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

            <h1 className="pt-1 pb-1">
              Rejectomancy
            </h1>
            <p>
              We think feedback is important, and while we can't give specific notes on every story we get, we try to structure our rejection letters so you have 
              some idea what we were thinking when we declined a story.
            </p>
            <p>
              The first tier will usually be something like, "We felt that *X* was off in the first few pages..." This generally means that we didn't read past the beginning, and the 
              problem for us is almost always pacing, characterization, or over-used tropes at this point.
            </p>
            <p>
              The second tier will usually be something like, "We liked this story overall, but..." and then offer something more specific. Getting this rejection means we 
              made it most of the way through the story (or all the way to the end!), but it didn't quite come together for us. This is often because the ending falls flat for us, 
              or the piece feels like it needs too much revising overall.
            </p>
            <p>
              The third tier doesn't have a specific format because it's tailored to the story, and it usually contains a request for rewrites. If rewrites are requested, 
              we usually go through a few rounds of edits before a final decision is made to accept or reject.
            </p>
            <p className="pb-1">
              (There are a variety of other tiers for racist diatribes, screeds of various kinds, and envelopes filled with smallpox pustules. Luckily these are rare.)
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
  query RejectomancyQuery {
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

export default Rejectomancy;
