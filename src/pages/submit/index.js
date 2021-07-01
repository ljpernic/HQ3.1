import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";

const Submit = (props) => {
  const data = props.data;
  
  return (
    <Layout bodyClass="page-home">
      <SEO title="Submit" />
      <Helmet>
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

            <h1 className="pb-1">
              Guidelines for Fiction
            </h1>
            <p>
              We are currently <big>closed</big> to submissions, but we hope to open soon! Follow us on social media for updates and new content. 
            </p>
            <p>
              We are seeking stories in the English language up to 6,000 words that have not been published before (including on your own website). We welcome writers from 
              around the world, and for our two issues focused on the climate crisis, we're particularly interested in publishing stories from people displaced 
              by or threatened by the climate emergency (although this isn't a hard and fast rule). For the other four issues, we're open to a wide variety of stories across the 
              SFF and weird spectrum. We pay 1¢ per word for fiction, and we try to respond to all submissions within seven weeks. Please query for reprints. 
            </p>
            <p>
              We like stories that are subtle in their telling and stick with us long after we've finished. We're more likely to buy stories that balance a sense 
              of wonder with a bold plot and emotional depth. Meditative stories that all take place in a single room, for example, are less likely to capture our 
              imagination.
            </p>
            <p>
               Basically, we want it all: character, concept, dialogue, tone, plot, a strong opening and ending. The second half of the story might be amazing, but if 
               there's no hook, we'll  never get to the good stuff. Same thing with endings. There's nothing more disappointing in a story than a strong hook, a great concept, 
               and then something out of Scooby Doo.
            </p>
            <p>
              Simultaneous submissions are fine, but please no multiple submissions. Also, please wait at least a week before you submit again after hearing from us about 
              a story. This is honestly more for the writer's benefit. it gives us a chance to clense our palate (if there was something we felt didn't work for 
              us in your last story, you don't want us to carry that feeling over to the next one!). As writers ourselves, we do our best to handle each story we receive 
              with the care and attention it deserves. Every submission is an act of bravery, and we know that putting yourself out there as a writer to be judged can be tough. 
              Just know that any story we receive, unless they contain threats of violence (explicit or implicit), will be kept in confidence.
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
              For each issue, we pay $35 for our cover art. If you think your work would look great on the cover of a science fiction and fantasy magazine, send us your portfolio!
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
              The first tier will usually have something like, "We felt that *X* was off in the first few pages..." This generally means that we didn't read past the beginning,
              and this is almost always because the pacing was off for us. Other possibilities are characterizations that felt off to us or maybe a SFF trope that we've seen too
              often. 
            </p>
            <p>
              The second tier will usually have something like, "We liked this story overall, but..." and then offer something more specific. Getting this rejection means we 
              made it most of the way through the story (or all the way to the end), but it didn't quite come together for us. This is often because the ending, though not exclusively.
            </p>
            <p>
              The third tier doesn't have a specific format because it's tailored to the story, and it usually contains a request for rewrites on the way to an acceptance (!!). At 
              this level, we usually go through a few rounds of edits before a decision is made to accept or reject. These stories tend to get accepted, but not always.
            </p>
            <p className="pb-1">
              (There's a secret fourth tier reserved for racist diatribes, screeds of various kinds, and envelopes filled with smallpox pustules. But these 
              are rare.)
            </p>
            <hr className="mb-2" />

{/*}            {posts
              .filter(post => post.node.frontmatter.category === "submit")
              .map(({ node: post }) => {
                return (
                  <div className="container" key={post.id}>
                      <hr />
                  </div>
                )
              })}*/}

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

