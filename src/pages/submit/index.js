import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

const Submit = (props) => {
  const data = props.data;
  
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

  return (
    <Layout bodyClass="page-home">
      <SEO title="Submit" />
      <Helmet>
        <script src={withPrefix('collapsible_script.js')} type="text/javascript" />
        <meta
          name="description"
          content="Submit page of Haven Spec"
        />
      </Helmet>

      <div className="intro">
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
                    SUBMIT
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

            <h1 className="pt-1 pb-1">
              Guidelines for Fiction
            </h1>
            <p>
              We are currently <big>closed</big> to fiction submissions, but we hope to open soon! Follow us on social media for updates and new content. 
            </p>
            <p>
              We are seeking stories in the English language up to 6,000 words that have not been published before (including on your own website). We welcome writers from 
              around the world, and for our two issues focused on the climate crisis, we're particularly interested in publishing stories from people displaced 
              by or threatened by the climate emergency (although this isn't a hard and fast rule). For the other four issues, we're open to a wide variety of stories across the 
              SFF and weird spectra. We pay 1¢ per word for fiction, and we try to respond to all submissions within seven weeks. Please query for reprints. 
            </p>
            <p>
              We like stories that are subtle in their telling and stick with us long after we've finished. We're more likely to buy stories that balance a sense 
              of wonder with a bold plot and emotional depth. Meditative stories that all take place in a single room, for example, are less likely to capture our 
              imagination.
            </p>
            <p>
               Basically, we want it all: character, concept, dialogue, tone, plot, a strong opening and ending, and everything else!
            </p>
            <p>
              Simultaneous submissions are fine, but please no multiple submissions. Also, please wait at least a week before you submit again after hearing from us about 
              a story. 
            </p>
            <p>  
              As writers ourselves, we do our best to handle each story we receive with the care and attention it deserves. Every submission is an act of bravery, and we 
              know that putting yourself out there as a writer to be judged can be tough. Just know that any story we receive, unless they contain threats of violence 
              (explicit or implicit), will be kept in confidence.
            </p>
            <p className="pb-1">
                When in doubt, don't self reject! Submit submit submit! 
            </p>
            <hr />

            <h1 className="pt-1 pb-1">
              Guidelines for Poetry
            </h1>
            <p>
              We are currently <big>closed</big> to poetry submissions, but follow us on social media for updates and new content! 
            </p>
            <p>
              We are seeking poetry of any length, and we welcome submissions by poets writing in the English language from anywhere in the world.  
              For our two issues focused on the climate crisis, we're particularly interested in publishing poems from people displaced 
              by or threatened by the climate emergency (although this isn't a hard and fast rule). For the other four issues, we're open to a wide variety of poems across the 
              SFF and weird spectra. We pay $5 for poems under one page (standard formatting) and $10 for longer poems, and we try to respond to all submissions within seven weeks. Please query for reprints.
            </p>
            <p>
              We like poems that use complex fixed verse forms (think sestina, awdl gywydd, masnavi, etc), but we're not against blank or free verse. Most important to us is
              vivid imagery, clever lyricism, and a strong emotional core.
            </p>
            <p>
              You may submit up to five poems at a time, but please separate them into individual submissions. 
            </p>
            <p className="pb-1">
                When in doubt, don't self reject! Submit submit submit! 
            </p>
            <hr />

            <h1 className="pt-1 pb-1">
              Guidelines for Non-Fiction
            </h1>
            <p className="pb-1">
              We like articles on politics and pop culture, articles steeped in science or otherwise verging on the academic, and pieces with funny or interesting takes we 
              might not have expected. We pay 1¢ per word for non-fiction, but please nothing over 4,500 words (though we favor shorter over longer).
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
            Guidelines for Letters from the Future
            </h1>
            <p className="pb-1">
              We're not quite sure how, but once every other month we receive a letter in the mail from the future. It's the damnedest thing. These letters are usually about 
              something specific to the early 21st century that's been extrapolated into the future (100 years or more). They're sometimes funny, sometimes subtle, sometimes serious, 
              but they're never over 1000 words. We pay 1¢ per word for them.
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
            Guidelines for Translations
            </h1>
            <p className="pb-1">
              There's so much great fiction in languages we can't read, and we'd like to change that. So if you have a translation of a story that has never appeared in English, 
              we welcome it as a submission. We pay 1¢ per word for translations. Please see the fiction guidelines for what kinds of stories we might be interested in.
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
              or the piece feels like it needs a bit too much work.
            </p>
            <p>
              The third tier doesn't have a specific format because it's tailored to the story, and it usually contains a request for rewrites on the way to an acceptance (!!). At 
              this level, we usually go through a few rounds of edits before a decision is made to accept or reject. These stories often get accepted, but not always.
            </p>
            <p className="pb-1">
              (There are a variety of other tiers for racist diatribes, screeds of various kinds, and envelopes filled with smallpox pustules. Luckily these are rare.)
            </p>
            <hr className="mb-2" />

            <button type="button" className="collapsible">Fiction Submission</button>
              <div className="collapsibleContent pt-2">
                <iframe className="iframe" src="https://www.cognitoforms.com/f/GtTjHOYx10OF7APqunHRFw/1"></iframe>
                <script src="https://www.cognitoforms.com/f/iframe.js"></script>
              </div>
              <button type="button" className="collapsible">Poetry Submission</button>
              <div className="collapsibleContent pt-2">
                <iframe className="iframe" src="https://www.cognitoforms.com/f/GtTjHOYx10OF7APqunHRFw/2"></iframe>
                <script src="https://www.cognitoforms.com/f/iframe.js"></script>
              </div>
              <button type="button" className="collapsible">Non-Fiction Submission</button>
              <div className="collapsibleContent pt-2">
                <iframe className="iframe" src="https://www.cognitoforms.com/f/GtTjHOYx10OF7APqunHRFw/3"></iframe>
                <script src="https://www.cognitoforms.com/f/iframe.js"></script>
              </div>
              <button type="button" className="collapsible">Art Submission</button>
              <div className="collapsibleContent pt-2">
                <iframe className="iframe" src="https://www.cognitoforms.com/f/GtTjHOYx10OF7APqunHRFw/4"></iframe>
                <script src="https://www.cognitoforms.com/f/iframe.js"></script>
              </div>
            <hr className="mb-2" />
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
  }
`;

export default Submit;

