import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";

import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

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

const Submit = (props) => {
  const data = props.data;
  const currentIssue = `https://ko-fi.com/havenspec/shop`;
  
{/*
    const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Title: '',
      WordCount: '',
      Type: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
*/}

  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);

  return (
    <Layout bodyClass="page-home">
      <SEO title="Submit" />
      <Helmet>
        <script src="https://www.cognitoforms.com/f/iframe.js" />
        <meta
          name="description"
          content="Submit page of Haven Spec"
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
                        fixed={shuffledArray[0]}
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="/subscribe">
                      <Image className="advert mb-2"
                        fixed={shuffledArray[1]}
                      />
                    </Link>
                </div>
                <h6>
                  ADVERT
                </h6>
                <div>
                <Link to="/subscribe">
                      <Image className="advert mb-2"
                        fixed={shuffledArray[2]}
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
                    SUBMIT
                  </h4>
                  <hr />
                  </div>
                  <div className="pt-2">
                  <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}
                      />
                    </Link>
                  </div>                

            <h1 className="pt-1 pb-1">
              Guidelines for Fiction
            </h1>
            <p>
              Haven Spec is currently <big>open</big> to fiction submissions{/*, but we hope to open soon*/}! 
            </p>
            <p>
              We are seeking stories in the English language up to 6,000 words that have not been published before (including on your own website). We welcome writers from 
              around the world, and for our two issues focused on the climate crisis, we're particularly interested in publishing stories from people displaced 
              by or threatened by the climate emergency (see our themes below). For our other four issues, we're open to a wide variety of stories across the 
              SFF and weird spectra.
            </p>
            <p>
              We pay 1¢ per word for fiction, and we try to respond to all submissions within seven weeks. We will also accept a limited number of previously published 
              stories, so please indicate on the form if your submission is a reprint. All submissions must use the Shunn manuscript format (we prefer Courier New) and 
              be either .rtf, .doc, or .docx. 
            </p>
            <p>
              We like stories that are subtle in their telling and stick with us long after we've finished. We're more likely to buy stories that balance a sense 
              of wonder with a bold plot and emotional depth. Meditative stories that all take place in a single room, for example, are less likely to capture our 
              imagination. Basically, we want it all: character, concept, dialogue, tone, plot, a strong opening and ending, and everything else!
            </p>
            <p>
              Simultaneous submissions are fine, but please no multiple submissions. Also, please wait at least a week before you submit again after hearing from us about 
              a story. 
            </p>
            <p>  
              As writers ourselves, we do our best to handle each story with the care and attention it deserves. Every submission is an act of bravery, and we 
              know that putting yourself out there as a writer can be tough. Just know that any story we receive, unless they contain something illegal, will be kept in confidence.
            </p>
            <p className="pb-1">
                When in doubt, don't self reject! Submit submit submit! 
            </p>
            <hr />

            <h1 className="pt-1 pb-1">
              Guidelines for Poetry
            </h1>
            <p>
              We are currently <big>open</big> to poetry submissions, but follow us on social media for updates and new content! 
            </p>
            <p>
              We are seeking poetry of any length, and we welcome submissions by poets writing in the English language from anywhere in the world. For our two issues focused on 
              the climate crisis, we're particularly interested in publishing poems from people displaced by or threatened by the climate emergency (see our themes below). For 
              our other four issues, we're open to a wide variety of poems across the SFF and weird spectra. 
            </p>
            <p>
              We pay $5 for poems under one page (standard formatting) and $10 for longer poems, and we try to respond to all submissions within seven weeks. We will also 
              accept a limited number of previously published poems, so please indicate on the form if your submission is a reprint. All submissions must use the Shunn manuscript 
              format (we prefer Courier New) and 
              be either .rtf, .doc, or .docx.
            </p>
            <p>
              We like poems that use complex fixed verse forms (think sestina, awdl gywydd, masnavi, etc), but we're not against blank or free verse. Most important to us is
              vivid imagery, clever lyricism, and a strong emotional core.
            </p>
            <p className="pb-1">
              You may submit up to five poems at a time, but please separate them into individual submissions. 
            </p>
            <hr />

            <h1 className="pt-1 pb-1">
              Guidelines for Non-Fiction
            </h1>
            <p className="pb-1">
              We like articles on politics and pop culture, articles steeped in science or otherwise verging on the academic, and pieces with funny or interesting takes we 
              might not have expected. We pay 1¢ per word for non-fiction, but please nothing over 3,000 words (though we favor shorter over longer).
            </p>
            <hr />
{/*            <h1 className="pt-1 pb-1">
            Guidelines for Letters from the Future
            </h1>
            <p className="pb-1">
              We're not quite sure how, but once every other month we receive a letter in the mail from the future. It's the damnedest thing. These letters are usually about 
              something specific to the early 21st century that's been extrapolated into the future (100 years or more). They're sometimes funny, sometimes subtle, sometimes serious, 
              but they're never over 1000 words. We pay 1¢ per word for them.
            </p>
            <hr />
*/}
            <h1 className="pt-1 pb-1">
              Guidelines for Translations
            </h1>
            <p className="pb-1">
              There's so much great fiction in languages we can't read, and we'd like to change that. So if you have a translation of a story that has never appeared in English, 
              we welcome it as a submission. We pay 1¢ per word for translations. Please see the other guidelines for the kinds of stories and poems we might be interested in.
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Art
            </h1>
            <p className="pb-1">
              For each issue, we pay $35 for our cover art. If you think your work would look great on the cover of a science fiction and fantasy magazine, send us your best work 
              and be sure to include a link to your portfolio in the cover letter!
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Themes
            </h1>

            <Image className="editorImageAbout mb-2"
              fixed={data.wetCover.childImageSharp.fixed}
            />
            <h5 className="pt-1 pb-1">
              WET ISSUE
            </h5>
            <p>
              Each September, we publish our WET Issue! Here we focus on stories of water—monsoons and the rising tides, hurricanes and the disappearing coast—we'll center 
              stories by authors directly affected by the climate crisis, though we'll consider anything that fits the theme, even vaguely! </p>
            
            <p className="pb-1">
              To submit a story for the theme, make sure to mention in your cover letter how your submission relates to the theme and, if you'd like, how you've been personally 
              affected by the crisis at hand. Submissions by climate refugees are very welcome. 
            </p>

            <Image className="editorImageAbout mb-2"
              fixed={data.dryCover.childImageSharp.fixed}
            />
            <h5 className="pt-1 pb-1">
              DRY ISSUE
            </h5>
            <p>
              Each March, we publish our DRY Issue! Here we're looking for content that focuses on the dry aspects of climate change—desertification and falling reservoirs, 
              rising temperatures and endless droughts—we'll center stories by authors directly affected by the climate crisis, though we'll consider anything that fits the theme, 
              even vaguely! 
            </p>
            
            <p className="pb-1">
              To submit a story for the theme, make sure to mention in your cover letter how your submission relates to the theme and, if you'd like, how you've been personally 
              affected by the crisis at hand. Submissions by climate refugees are very welcome.
            </p>

            <hr className="mb-2" />

            <Link to="/forms">
            <button type="button" className="collapsible">Go to Submission Forms</button>
            </Link>
            
            <hr className="mb-2" />

            <p className="mb-4">
              Interested to know how we go about accepting and rejecting stories? <Link to="/rejectomancy">Click here!</Link>
            </p>

         </div>
      </div>
    </div>
  </div>
</div>
   {/*} <div className="intro pt-4">
      <div className="container pb-5 pt-md-7 pb-md-7">
        <div className="row2 justify-content-start">
          <div className="col-12">
          <Link to="/">
                <h3>Latest Issues</h3>
            </Link>
            <hr />
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-cover">
                    <Link to="/">               
                      <img src={withPrefix(edge.node.image)} />
                    </Link>
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>*/}
    </Layout>
  );
};

export const query = graphql`
  query SubmitQuery {
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
    wetCover: file(relativePath: {eq: "wet_cover.jpg"}) {
      id
      childImageSharp {
        fixed(width:150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dryCover: file(relativePath: {eq: "dry_cover.jpg"}) {
      id
      childImageSharp {
        fixed(width:150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Submit;

