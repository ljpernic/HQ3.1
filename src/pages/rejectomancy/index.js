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
  const currentIssue = `https://ko-fi.com/s/f371bb536b`;
  
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
              <b>The first tier:</b> 
            </p>
          <div className="indent">
            <p>
              Dear [AUTHOR], 
            </p>
            <p>
              Thank you for the submission of your [TYPE] "[TITLE]" to Haven Spec Magazine. Unfortunately, we will be unable to accept it for publication, but we wish 
              you the best of luck on your writing and publishing endeavors.
            </p>
            <p>
              Sincerely,<br />
              [READER], [ROLE] <br />
              Haven Spec Magazine
            </p>
          </div>
            <p>Many submissions that are rejected in the first round get this reply, but that doesn't mean your story or poem is bad! Some aspect, generally towards the beginning, 
              just wasn't working for us, so we didn't make it past the first couple of pages. Almost always this is an issue with pacing, characterization, or over-used 
              tropes, and almost always we didn't feel like there was any feedback we could offer. This reply is sent to about 50% of submissions.
            </p>
            <p>
              <b>The second tier:</b> 
            </p>
            <div className="indent">
            <p>
              Dear [AUTHOR], 
            </p>
            <p>
              Thank you for the submission of your [TYPE] "[TITLE]" to Haven Spec Magazine. Unfortunately, we will be unable to accept it for publication. 
            </p>
            <p>
              [Then there's a middle paragraph with specific feedback about elements of your submission that weren't working for us. This is usually formatted, <i>I liked  X and Y, 
              but overall, Z didn't quite come together for me.</i>]
            </p>
            <p>
              We've decided to pass on this one, but we wish you the best of luck on your writing and publishing endeavors.
            </p>
            <p>
              Sincerely,<br />
              [READER], [ROLE] <br />
              Haven Spec Magazine
            </p>
          </div>
            <p>
              Getting this rejection could mean that we read the entire submission or that we decided halfway through that it wasn't quite right for us, but generally, this 
              reply means that something about the submission wasn't landing for us, and we thought that it needed too much revision. This is, however, no reflection on the story! 
              It's based entirely on our own sensibilities, interests, and needs for the magazine. This reply is sent to about 25% of submissions.
            </p>
            <p>
              <b>The third tier:</b>
            </p>
            <div className="indent">
              <p>
                Dear [AUTHOR], 
              </p>
              <p>
                Thank you for the submission of your [TYPE] "[TITLE]" to Haven Spec Magazine. Unfortunately, we will be unable to accept it for publication. 
              </p>
              <p>
                [Then there's a middle paragraph with specific feedback about elements of your submission that weren't working for us. This is usually formatted, <i>I liked  X and Y, 
                but overall, Z didn't quite come together for me.</i>]
              </p>
              <p>
                We've decided to pass on this one, but we wish you the best of luck on your writing and publishing endeavors. We would be happy to consider anything else you might 
                write!
              </p>
              <p>
                Sincerely,<br />
                [READER], [ROLE] <br />
                Haven Spec Magazine
              </p>
            </div>
            <p>
              This reply generally means that we read the submission in its entirety and that we liked a lot of it, but what wasn't working for us still outweighed what was. 
              We also often use this reply when we think a story is very good, but not quite suitable for any of our upcoming issues (or the magazine generally). Usually, we 
              mention that in our feedback though. Specific to this reply is an explicit invitation to submit again, and we send this reply to roughly 15% of submissions.
            </p>
            <p>
              <b>The fourth tier:</b> 
            </p>
            <div className="indent">
              <p>
                Dear [AUTHOR], 
              </p>
              <p>
                Thank you for your submission of your [TYPE] "[TITLE]" to Haven Spec Magazine. We would like to consider it for publication, but there are a number of edits we'd 
                like to see first. 
              </p>
              <p>
                [There is often a bullet-point list here with the major issues that we think need to be addressed before the story works for us completely, with the number of biggish 
                issues generally ranging from 0 to 6.]
              </p>
              <p>
                I've attached a copy of the manuscript with comments in the margins, plus a few changes made with track changes. These are all just suggestions, but feel free 
                to look it over when you have the chance and, if you'd like, I'd be very happy to see another draft!
              </p>
              <p>
                Thanks again for your submission, and if you have any questions at all, don't hesitate to get in touch!
              </p>
              <p>
                Sincerely,<br />
                [READER], [ROLE] <br />
                Haven Spec Magazine
              </p>
            </div>
            <p>
              This reply is a request for you to revise your submission. Generally, the more big changes that we suggest, the more rounds of revision there are, but we try to decide 
              after the second round. If the changes come together in a way that works for us by then, these stories turn into acceptances. Otherwise, we offer a little more 
              feedback with the rejection and a polite request that you submit more of your work (since we obviously like it!). This reply is sent to about 3% of 
              submissions.
            </p>
            <p>
              The percentages don't add up to 100, and mere anarchy is loosed upon the world. Really, though, the numbers are only meant to give you a ballpark idea of where your 
              submission was in the process. They are nothing set in stone.
            </p>
            <p>
              <b>The fifth tier:</b> 
            </p>
            <p>
              Occasionally, we get submissions that are good to go with the barest minimum of revision. These are accepted outright, with only the necessary copyediting applied. 
              It is a joyous day when such submissions arrive in the queue.
            </p>
            <p>
              <b>Other tiers:</b> 
            </p>
            <p>
              There are a variety of other tiers for racist diatribes, screeds of various kinds, and envelopes filled with smallpox pustules. Luckily these are rare.
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
