import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';

import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';
import { IconContext } from "react-icons";

const About = (props) => {
  const data = props.data;

  const leonTwitter = `http://twitter.com/leonperniciaro`;  
  const ashTwitter = `http://twitter.com/ashaquestion`;
  const tjTwitter = `http://twitter.com/eerieyore`;
  const evelynTwitter = `http://twitter.com/evelyn_freeling`;

  const leonFacebook = null;  
  const ashFacebook = null;
  const tjFacebook = null;
  const evelynFacebook = null;

  const leonUrl = `https://www.leonperniciaro.com`;
  const ashUrl = null;
  const tjUrl = null;
  const evelynUrl = null;

  const leonDisplayTwitter = leonTwitter === null ? null : <a className='social-icon' href={leonTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const leonDisplayFacebook = leonFacebook === null ? null : <a className='social-icon' href={leonFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const leonDisplayUrl = leonUrl === null ? null : <a className='social-icon' href={leonUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const ashDisplayTwitter = ashTwitter === null ? null : <a className='social-icon' href={ashTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const ashDisplayFacebook = ashFacebook === null ? null : <a className='social-icon' href={ashFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const ashDisplayUrl = ashUrl === null ? null : <a className='social-icon' href={ashUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const tjDisplayTwitter = tjTwitter === null ? null : <a className='social-icon' href={tjTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const tjDisplayFacebook = tjFacebook === null ? null : <a className='social-icon' href={tjFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const tjDisplayUrl = tjUrl === null ? null : <a className='social-icon' href={tjUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const evelynDisplayTwitter = evelynTwitter === null ? null : <a className='social-icon' href={evelynTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const evelynDisplayFacebook = evelynFacebook === null ? null : <a className='social-icon' href={evelynFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const evelynDisplayUrl = evelynUrl === null ? null : <a className='social-icon' href={evelynUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;


  return (
    <Layout bodyClass="page-home">
      <SEO title="About" />
      <Helmet>
        <script src={withPrefix('collapsible_script.js')} type="text/javascript" />
        <meta
          name="description"
          content="About page of Haven Spec"
        />
      </Helmet>

      <div className="intro">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2">
            <div className="grid-container">

            <Advertisement />

            <div>
              <div className="col-12">
                <h4>
                  ABOUT US
                </h4>
                <hr />
              </div>
              <div>
                <h1 className="pt-1 pb-1">
                  About the Magazine
                </h1>
                <p>
                  <i><b>Haven Spec</b></i> is a speculative fiction magazine featuring stories for a 21st century audience. We love stories with a 
                  sense of adventure, stories that teach us, that touch us, that leave us wanting more. We publish six issues every year, two of which (the DRY Issue and the 
                  WET Issue) are focused exclusively on the climate crisis and themes of displacement (very broadly defined).
                </p>
                <p>
                  The crisis facing our planet is immediate and all-encompassing, and it will affect people of color, people living in poverty, and the working classes most of
                  all. The popular metaphor is going over a cliff, but we prefer the tempest, the torrent, the flood. The waters are rising, but we can save ourselves.
                </p>
                <p className="pb-1">
                  It's not too late.
                </p>
                <div>
                  <Link to="/subscribe">
                    <Image className="advertLong"
                      fixed={data.advertLong.childImageSharp.fixed}
                    />
                  </Link>
                </div>
                <hr />

                <div>
                  <h1 className="pt-1 pb-1">
                    About the Editor
                  </h1>
                  <div className="editorImageAbout mb-2">
                    <Image 
                      fixed={data.leon.childImageSharp.fixed}
                    />
                    <div class="side-block">
                      {leonDisplayTwitter}
                      {leonDisplayFacebook}
                      {leonDisplayUrl}
                    </div>
                  </div>

                  <p>
                  <b>Leon Perniciaro</b> (he/him) is the editor of Haven Spec Magazine, an assistant editor at <a href="https://www.android-press.com/">Android 
                  Press</a>, and a submissions editor at <a href="https://uncannymagazine.com/">Uncanny Magazine</a>. He is also a member of SFWA and the Codex 
                  Writers' Group, and he will begin his studies as an English PhD student at the University of Connecticut this fall.
                  </p>
                  <p className="pb-1"> Originally from New Orleans, he now lives in New England, where he's terrified of both the climate crisis and the Great Filter.
                  </p>
                </div>

                <div>
                  <h1 className="pt-3 pb-1">
                    About the Associate Editors
                  </h1>
                  <div className="editorImageAbout mb-2">
                    <Image 
                      fixed={data.ash.childImageSharp.fixed}
                    />
                    <div class="side-block">
                      {ashDisplayTwitter}
                      {ashDisplayFacebook}
                      {ashDisplayUrl}
                    </div>
                  </div>

                  <p>
                  <b>Ash Okada</b> (she/they) is a speculative fiction writer and capital-N Nerd who is endlessly fascinated by story, languages, history, the human brain, and 
                  dinosaurs. Ash has worked an eclectic set of jobs over the years, from lit agency intern to video captioner and from executive assistant to bridge caddy 
                  (though not necessarily in that order), and lives in Brooklyn, NY.</p> 
                  
                  <p className="pb-1">When the weather's lousy, you can usually find Ash curled up with a massive cup of tea 
                  and a good book (or audiobook). When the weather's great...well, pretty much the same thing, if we're being honest.
                  </p>
                  <div className="editorImageAbout mb-2">
                    <Image 
                      fixed={data.tj.childImageSharp.fixed}
                    />
                    <div class="side-block">
                      {tjDisplayTwitter}
                      {tjDisplayFacebook}
                      {tjDisplayUrl}
                    </div>
                  </div>

                  <p>
                  <b>TJ Price</b>’s corporeal being (he/him) is currently located in Brooklyn, NY, with his
                    handsome partner of many years, but his ghosts live in northeastern Connecticut and
                    southern Maine. He either is or has been a wine-seller, a wine-drinker, an avid reader,
                    an obsessive writer, a pen-and-ink artist, a dishwasher, a neurosurgical technologist, a
                    proofreader, a storm-watcher, a music-maker, and other sundry avocations.
                  </p> 
                  
                  <p className="pb-1">
                    Primarily, TJ spends his time reading as much as his eyes can take, but when he&#39;s not
                    reading, he&#39;s either writing weird stories about unnerving things, drawing lots of little
                    circles in pen and ink, enjoying esoteric studies, or taking photographs of clouds.
                  </p>

                  <div className="editorImageAbout mb-2">
                    <Image 
                      fixed={data.evelyn.childImageSharp.fixed}
                    />
                    <div class="side-block">
                      {evelynDisplayTwitter}
                      {evelynDisplayFacebook}
                      {evelynDisplayUrl}
                    </div>
                  </div>

                  <p>
                    <b>Evelyn Freeling</b> (she/her) is a speculative fiction writer with short fiction published in anthologies with Ghost Orchid Press and Dark 
                    Dispatch. She's also the editor for an erotic horror anthology titled <em>Les Petites Morts</em>. When she isn't writing, editing, studying craft, 
                    or reading, she works part-time as a chef, housecleaner, chauffeur, and clown (which really means she's a full-time mom). </p> 
                  
                  <p className="pb-1">Evelyn currently resides in Dubai and enjoys her free time at the beach. She alternates between obsessions with true crime 
                  documentaries, horror films, and watching Youtube videos about quantum mechanics.
                  </p>

                </div>
                <hr />
                      
{/*                 <div>
                  <h1 className="pt-1 pb-1">
                    Volunteer
                  </h1>
                  <p>
                    Interested in being a slush reader for Haven Spec? Are you passionate about speculative fiction and poetry? Volunteer today! There's no better way to improve 
                    your own writing than reading other people's!
                  </p> 
                  <p>
                    We want diverse, engaged writing, and so we need diverse, engaged readers. The position is unpaid, and you won't 
                    be able to submit to the magazine while you're a member of staff, but it's a great opportunity to learn the ropes in spec fiction publishing.
                  </p> 
                  <p className="pb-1">
                    To apply, fill out the contact form below with your relevant interests and background (if any), and we'll go from there!                  
                  </p>
                </div>
                <hr />
*/}
                <div>
                  <h1 className="pt-1 pb-1">
                    Privacy Policy
                  </h1>
                  <p>
                    We don't collect any information beyond simple analytics, and that's only to get a sense of how many people visit our site and access our content. 
                    Subscriptions and purchases are handled off-site, and that simplifies things nicely. We promise however to never sell any data that we collect, and this 
                    applies if you're visiting our site from anywhere on, above, or below the surface of the Earth, plus all the planets in all the solar systems in all the 
                    galaxies in this and any other universe from now until the last star fades.
                  </p>
                  <p className="pb-1"> 
                    We hope that clears things up.
                  </p>
                </div>
                <hr />
                        
                <div>
                  <h1 className="pt-1 pb-1">
                    Anti-Harassment Policy
                  </h1>
                  <p>
                    We take harassment seriously. Any behavior that makes another person feel unsafe, harms another person, or causes another person distress is
                    expressly forbidden. Any kind of intimidation or threatening behavior is expressly forbidden. Any harassing comment or attack based on age, 
                    citizenship status, disability, familial status,  gender, gender expression or identity, geography, marital status, place of origin, 
                    race/ethnicity, religion, sexual orientation, or socioeconomic status is expressly forbidden. Any form of sexual harassment, regardless of 
                    circumstance or parties involved, is expressly forbidden.
                  </p>
                  <p>
                    If you feel that someone's participating in harassing behavior, please contact us with your concerns immediately. All complaints 
                    will remain anonymous.
                  </p>
                  <p>
                    This applies both to staff and all participants across all spaces curated by <i>Haven Spec</i> (including social media).
                  </p>
                  <p>
                    This page isn't meant to be an exhaustive list of dos and don'ts. We kindly ask that you use your brain. It's still harassment if you're 
                    "Just joking." it's still harassment if it's subtext and innuendo. It's still harassment whether scribbled in a notebook or written in the sky. 
                    If you're not sure what counts, there are many resources online, but err in all cases on the side of caution.
                  </p>
                  <p className="pb-1">
                    This anti-harassment policy was largely cribbed from that of the non-profit group 
                    <a href="https://blog.americansforthearts.org/about-americans-for-the-arts/organizational-policies"> Americans for the Arts</a>. 
                    We aren't affiliated in any way.
                  </p>
                </div>
            <hr className="mb-2" />
          
              <div>
              <h1 className="pt-1 pb-1">
                    Contact Us
                  </h1>
                  <p>
                    To submit art, fiction, non-fiction, and poetry, visit the <Link to="/submit">submission page</Link>. For advertising, go to the <Link to="/subscribe">subscribe 
                    and support page</Link>. For everything else, fill out this form!
                  </p>
                  <p className="pb-1">
                    Use this power only for good.
                  </p>
                
                <iframe className="iframeContact" src="https://www.cognitoforms.com/f/GtTjHOYx10OF7APqunHRFw/6"></iframe>
              </div>
              
              <hr className="mb-2" />

          <div>
            <p>
              Interested to know how this website was put together? Want to get a (free!) copy of the website and our backend systems of your 
              own? <Link to="/about-this-site">Click here!</Link>
            </p>
            <p className="mb-4">
              Haven Spec is run cooperatively! Interested to know what that means? <Link to="/organization">Click here!</Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    leon: file(relativePath: { eq: "profile/Leon_Perniciaro.jpg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ash: file(relativePath: { eq: "profile/Ash_Okada.png" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tj: file(relativePath: { eq: "profile/TJ_Price.jpeg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    evelyn: file(relativePath: { eq: "profile/Evelyn_Freeling.jpg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/" } }             #This tells the /about page to look at md files in the src folder
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt

        }
      }
    }
  }
`;

export default About;
