import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import SEO_image from '../../images/SEO_image.jpg';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

const Submit = (props) => {
  const data = props.data;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine, Submission Page" image={SEO_image} />
      <Helmet>
        <script src="https://www.cognitoforms.com/f/iframe.js" />
        <meta
          name="Haven Spec Magazine, Submission Page"
          content="Haven Spec Magazine, Submission Page"
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
                    SUBMIT
                  </h4>
                  <hr />
                  <div className="pt-2">
                    <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}
                      />
                    </Link>
                  </div>                
                </div>
            <h1 className="pt-1 pb-1">
              Submission Windows
            </h1>
            <div className="grid-container">
            {/* <div className="subWindows">
              <h5>General submission window</h5>
                  <li className="listWindow">February 01-28</li>  
                  <li className="listWindow">April 01-30</li>  
                  <li className="listWindow">June 01-30</li>  
                  <li className="listWindow">August 01-31</li>  
                  <li className="listWindow">October 01-31</li>  
                  <li className="listWindow">December 01-31</li>  
              </div>
              <div className="subWindows">
              <h5>Limited demographic window</h5>
                  <li className="listWindow">January 01-31</li>  
                  <li className="listWindow">March 01-31</li>  
                  <li className="listWindow">May 01-31</li>  
                  <li className="listWindow">July 01-31</li>  
                  <li className="listWindow">September 01-30</li>  
                  <li className="listWindow">November 01-30</li>  
              </div> */}
            </div>
            <p>
              Haven Spec Magazine is now <strong>closed</strong> to all submissions. Keep an eye out on Twitter and Bluesky for when we will 
              reopen, and, as always, thank you for supporting our magazine!
            </p>
            <p>
              It's our goal to publish diverse voices from around the world, and to do that, we are actively seeking stories, poems, and 
              non-fiction pieces by authors from backgrounds that have been historically underrepresented in the science fiction and fantasy 
              canon. {/* Our submission cycle is therefore split into two categories, where every other month is explicitly reserved for 
              submissions by authors of color, members of the LGBTQIA+ community, and other underrepresented groups. The interposing six 
              months remain open to everyone.    */}
            </p>
            <p>
              As writers ourselves, we do our best to handle each submission with the care and attention it deserves. Every submission is an 
              act of bravery, and we know that putting yourself out there as a writer can be tough. Just know that any submission we receive, 
              unless it contains something illegal, will be kept in confidence.
            </p>
            <p className="pb-1">
                When in doubt, don't self reject! Submit submit submit! 
            </p>

            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Fiction
            </h1>
            <p>
              We like stories that are subtle in their telling and stick with us long after we've finished, and we're more likely to 
              buy stories that balance a sense of wonder with a bold plot and emotional depth. For our two issues focused on the climate 
              crisis, we're particularly interested in publishing stories from people displaced by or threatened by the climate emergency 
              (see our themes below). For our other four issues, we're open to a wide variety of stories across the SFF and weird spectra.
            </p>
            <div className='submitGuidelines'>
              <ul>
                <li><strong>Pay:</strong> 8¢ per word for original fiction</li>
                <li><strong>Word limit:</strong> 6000 words</li>
                <li><strong>Language:</strong> English</li>
                <li><strong>Rights:</strong> We buy first serial print and electronic rights for publication of the story in the English 
                  language and throughout the world. We also buy non-exclusive archival rights for our website and non-exclusive anthology 
                  rights.</li>
              </ul>
            </div>
            <p>
              We welcome writers from around the world who are writing in the English language, and we're open to translations as 
              long as the piece hasn't appeared in English before. While we've accepted a few reprints in the past, we are currently 
              only looking for original, previously unpublished fiction. Simultaneous submissions are fine, but please no multiple 
              submissions. We also ask that you use the Shunn manuscript format and either .rtf, .doc, or .docx file types. 
            </p>
            <p className="pb-1">
              We try to respond to all submissions within ten weeks, and we ask that you wait at least a week after we pass on a story 
              before you submit again. If we hold a piece, please wait until you get our final decision to submit again. And if we publish 
              your piece, we ask that you wait six months from the date of publication before you submit again. Finally, while we do publish 
              both flash fiction and stories close to our word limit, our sweet spot is between 1000 and 4000 words.  
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Poetry
            </h1>
            <p>
              We like poems that use complex fixed verse forms (think sestina, awdl gywydd, masnavi, etc), but we're not against blank or 
              free verse. Most important to us is vivid imagery, clever lyricism, and a strong emotional core. For our two issues focused 
              on the climate crisis, we're particularly interested in publishing poems from people displaced by or threatened by the 
              climate emergency (see our themes below). For our other four issues, we're open to a wide variety of poems across the SFF 
              and weird spectra.
            </p>
            <div className='submitGuidelines'>
              <ul>
                <li><strong>Pay:</strong> $20 per poem</li>
                <li><strong>Limit:</strong> Five poems, each in a separate submission</li>
                <li><strong>Language:</strong> English</li>
                <li><strong>Rights:</strong> We buy first serial print and electronic rights for publication of the poem in the English 
                  language and throughout the world. We also buy non-exclusive archival rights for our website and non-exclusive anthology 
                  rights.</li>
              </ul>
            </div>
            <p>
              We welcome writers from around the world who are writing in the English language, and we're open to translations as 
              long as the piece hasn't appeared in English before. While we've accepted a few reprints in the past, we are currently 
              only looking for original, previously unpublished poetry. Both simultaneous and multiple submissions are fine, but please 
              no more than five poems at a time, with each poem separated out as its own submission. We also ask that you use the 
              Shunn manuscript format and either .rtf, .doc, or .docx file types. 
            </p>
            <p className="pb-1">
              We try to respond to all submissions within ten weeks, and we ask that you wait at least a week after we pass on the poems 
              before you submit again. If we hold a poem, please wait until you get our final decision to submit again. And if we publish 
              your piece, we ask that you wait six months from the date of publication before you submit again. Finally, while we do 
              publish very short poems, our sweet spot is something longer than just three or four lines.  
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Non-Fiction
            </h1>
            <p>
              We like articles on politics and pop culture, articles steeped in science or otherwise verging on the academic, and 
              pieces with funny or interesting takes we might not have expected.
            </p>
            <div className='submitGuidelines'>
            <ul>
                <li><strong>Pay:</strong> 8¢ per word for original non-fiction</li>
                <li><strong>Word limit:</strong> 1000 words</li>
                <li><strong>Language:</strong> English</li>
                <li><strong>Rights:</strong> We buy first serial print and electronic rights for publication of the piece in the English 
                  language and throughout the world. We also buy non-exclusive archival rights for our website and non-exclusive anthology 
                  rights.</li>
              </ul>
            </div>
            <p className="pb-1">
              We ask that you use the Shunn manuscript format and either .rtf, .doc, or .docx file types for your submission. We also ask 
              that you format the text so that any references are linked in-line and not placed in a work-cited section at the end. For 
              example, if I wanted to make a reference to <a href='https://www.havenspec.com/the-hundred-loves'>one of the many 
              interesting stories in Haven Spec Magazine</a>, I would reference it like this. Please only one non-fiction submission 
              at a time.
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Guidelines for Art
            </h1>
            <p className="pb-1">
              For each issue, we pay <strong>$125 for cover art</strong>. If you think your work would look great on the cover of a 
              science fiction and fantasy magazine, send us a link to your portfolio!
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
              stories by authors directly affected by the climate crisis, though we'll consider anything that fits the theme, even vaguely! 
            </p>
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
            <button type="button" className="collapsible">Go to Submission Form</button>
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
    </Layout>
  );
};

export const query = graphql`
  query SubmitQuery {
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

