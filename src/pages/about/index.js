import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';
import { IconContext } from "react-icons";

const About = (props) => {
  const data = props.data;

  const leonTwitter = `http://twitter.com/leonperniciaro`;  
  const tjTwitter = `http://twitter.com/eerieyore`;
  const danaiTwitter = `http://twitter.com/Danaiwrites`;

  const ashTwitter = `http://twitter.com/ashaquestion`;
  const rslTwitter = `http://twitter.com/RSLjnr`;
  const rukmanTwitter = `http://twitter.com/RukmanWrites`;
  const elizabethTwitter = `http://twitter.com/eabroadbent`;
  
  const leonFacebook = null;  
  const tjFacebook = null;
  const danaiFacebook = null;

  const ashFacebook = null;
  const rslFacebook = null;
  const rukmanFacebook = null;
  const elizabethFacebook = null;

  const leonUrl = `https://www.leonperniciaro.com`;
  const tjUrl = `https://tjpricewrites.com/`;
  const danaiUrl = null;

  const ashUrl = null;
  const rslUrl = null;
  const rukmanUrl = null;
  const elizabethUrl = `https://www.writerelizabethbroadbent.com/`;
  
  const leonDisplayTwitter = leonTwitter === null ? null : <a className='social-icon' href={leonTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const leonDisplayFacebook = leonFacebook === null ? null : <a className='social-icon' href={leonFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const leonDisplayUrl = leonUrl === null ? null : <a className='social-icon' href={leonUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const tjDisplayTwitter = tjTwitter === null ? null : <a className='social-icon' href={tjTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const tjDisplayFacebook = tjFacebook === null ? null : <a className='social-icon' href={tjFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const tjDisplayUrl = tjUrl === null ? null : <a className='social-icon' href={tjUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const danaiDisplayTwitter = danaiTwitter === null ? null : <a className='social-icon' href={danaiTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const danaiDisplayFacebook = danaiFacebook === null ? null : <a className='social-icon' href={danaiFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const danaiDisplayUrl = danaiUrl === null ? null : <a className='social-icon' href={danaiUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const ashDisplayTwitter = ashTwitter === null ? null : <a className='social-icon' href={ashTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const ashDisplayFacebook = ashFacebook === null ? null : <a className='social-icon' href={ashFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const ashDisplayUrl = ashUrl === null ? null : <a className='social-icon' href={ashUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const rslDisplayTwitter = rslTwitter === null ? null : <a className='social-icon' href={rslTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const rslDisplayFacebook = rslFacebook === null ? null : <a className='social-icon' href={rslFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const rslDisplayUrl = rslUrl === null ? null : <a className='social-icon' href={rslUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const rukmanDisplayTwitter = rukmanTwitter === null ? null : <a className='social-icon' href={rukmanTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const rukmanDisplayFacebook = rukmanFacebook === null ? null : <a className='social-icon' href={rukmanFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const rukmanDisplayUrl = rukmanUrl === null ? null : <a className='social-icon' href={rukmanUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

  const elizabethDisplayTwitter = elizabethTwitter === null ? null : <a className='social-icon' href={elizabethTwitter}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>;
  const elizabethDisplayFacebook = elizabethFacebook === null ? null : <a className='social-icon' href={elizabethFacebook}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>;
  const elizabethDisplayUrl = elizabethUrl === null ? null : <a className='social-icon' href={elizabethUrl}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>;

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
              <div className="one">
                <CurrentIssue />
                <Advertisement />
              </div>
            <div>
              <div className="col-12">
                <h4>
                  ABOUT US
                </h4>
                <hr />
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
                </div>

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
                  <b>Leon Perniciaro</b> (he/him) is the editor of Haven Spec Magazine and an assistant editor at <a href="https://www.android-press.com/">Android 
                  Press</a>. He studies English as a PhD student at the University of Connecticut, with a focus on race, Indigeneity, and environmental justice. 
                  He is a member of SFWA and the Codex Writers' Group and is a citizen of the Choctaw-Apache Tribe of Ebarb.
                  </p>
                  <p className="pb-1"> Originally from New Orleans, he now lives in New England, where he's terrified of both the climate crisis and the Great Filter.
                  </p>
                </div>

                <div>
                  <h1 className="pt-3 pb-1">
                    About the Assistant Editors
                  </h1>
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
                  <b>TJ Price</b>&#39;s corporeal being is currently located in Raleigh, NC, with his handsome partner 
                    of many years, but his ghosts live in northeastern Connecticut, southern Maine, and north Brooklyn. 
                    He is the author of the novelette The Disappearance of Tom Nero, published by Spooky House Press. 
                    His work has appeared—or is forthcoming—in <em>Nightmare Magazine</em>, <em>pidgeonholes</em>, <em>The NoSleep 
                    Podcast</em>, and various anthologies. He's almost always in the middle of some project, either editorially 
                    or otherwise, and enjoys experimenting with prose & poetry as well as certain esoteric studies.
                  </p> 
                  
                  <p className="pb-1">
                    He can be invoked at either tjpricewrites.com or via the blue bird @eerieyore. Failing that, one can make a 
                    circle of chalk on the floor, stand in the center, and burn a photograph of a loved one until all that remains 
                    is ashes. Then, listen for a murmuring from within the walls. Leave your message after the sound of the screb.
                  </p>

                  <div className="editorImageAbout mb-2">
                    <Image 
                      fixed={data.danai.childImageSharp.fixed}
                    />
                    <div class="side-block">
                      {danaiDisplayTwitter}
                      {danaiDisplayFacebook}
                      {danaiDisplayUrl}
                    </div>
                  </div>

                <p className="pb-1">
                      <b>Danai Christopoulou</b> (she/they) is a queer Greek SFF author and editor. Danai’s nonfiction has appeared 
                      in publications such as Glamour and Marie Claire since 2004. They are an editor for Hugo-nominated <em>khōréō magazine</em>, 
                      an assistant editor for <em>HavenSpec</em>, and a literary agent in training at Tobias Literary Agency. Their short 
                      fiction has been published in <em>khōréō</em>, <em>Fusion Fragment</em> and others, nominated for a Pushcart Prize, 
                      and featured in the official Nebula Reading List. Danai’s novels are represented by Lauren Bieker of FinePrint Literary.
                  </p>
                </div>

                <div>
                  <h1 className="pt-3 pb-1">
                    About the Associate Editors
                  </h1>
{/* ABOUT ASH */}
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
{/* ABOUT ELIZABETH */}
<div className="editorImageAbout mb-2">
                    <Image 
                      fixed={data.elizabeth.childImageSharp.fixed}
                    />
                    <div class="side-block">
                      {elizabethDisplayTwitter}
                      {elizabethDisplayFacebook}
                      {elizabethDisplayUrl}
                    </div>
                  </div>
                  <p>
                    <b>
                      Elizabeth Broadbent</b> (she/they) (she/her) is a neurodivergent author, journalist, and poet recently displaced from the South Carolina swamp. 
                      She's the author of <em>Ink Vine</em>, an erotic horror novella coming in April from Psychotoxin Pink, and her second novella, <em>Blood Cypress</em>, 
                      is set for 2025 publication with Raw Dog Screaming Press. Her short fiction has appeared in numerous publications, including <em>Tales to 
                      Terrify</em> and <em>The Cafe Irreal</em>; her essays have appeared everywhere from <em>The Washington Post</em> to <em>ADDitude Magazine</em>; and 
                      her visage has appeared in places such as BBC World News, MSNBC, and the ethereal plane. When she isn't writing fiction or social justice screeds, 
                      she can be found talking to crows and convincing blue jays to do crime. Drop her a line at eliza@writerelizabethbroadbent.com, @eabroadbent on Insta, Threads, 
                      and TikTok, or @elizabeth.broadbent on Bluesky. Alternately, ask the crows.</p> 
                  
{/* ABOUT RUKMAN */}
                  <div className="editorImageAbout mb-2">
                    <Image 
                      fixed={data.rukman.childImageSharp.fixed}
                    />
                    <div class="side-block">
                      {rukmanDisplayTwitter}
                      {rukmanDisplayFacebook}
                      {rukmanDisplayUrl}
                    </div>
                  </div>
                  <p>
                    <b>Rukman Ragas</b> (they/he) writes from Sri Lanka. Their fiction is forthcoming from <em>Khoreo</em> and <em>Tasavvur</em>. He splits his time 
                    between the humid coast and the chilly mountains, both triggering different allergies.
                  </p> 
                  
                  <p className="pb-1">
                    They can be found on twitter <a href="https://www.twitter.com/Rukmanwrites">@Rukmanwrites</a>, advocating for passive protagonists and retelling 
                    South Asian myths.
                  </p>

{/* ABOUT RSL */}
                  <div className="editorImageAbout mb-2">
                    <Image 
                      fixed={data.rsl.childImageSharp.fixed}
                    />
                    <div class="side-block">
                      {rslDisplayTwitter}
                      {rslDisplayFacebook}
                      {rslDisplayUrl}
                    </div>
                  </div>
                  <p>
                    <b>RSL</b> (he/they) is a scouse writer and academic whose work tends toward the weird and the absurd. He's a PhD Candidate at University 
                    of Liverpool, studying the mental health benefits of challenging fiction during challenging times. His fictional work can be 
                    read in <em>CHM</em>, and <em>Vastarien</em>, as well as a few forthcoming pieces in journals. 
                  </p> 
                  <p className="pb-1">
                    You can find them complaining about money (or gushing about art) on Twitter as <a href="https://www.twitter.com/RSLjnr">@RSLjnr</a> and 
                    insta as <a href="https://www.instagram.com/awayout92">@awayout92</a>. 
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
                    "just joking." it's still harassment if it's subtext and innuendo. It's still harassment whether scribbled in a notebook or written in the sky. 
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
    tj: file(relativePath: { eq: "profile/TJ_Price.jpeg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    danai: file(relativePath: { eq: "profile/Danai_Christopoulou.jpg" }) {
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
    rukman: file(relativePath: { eq: "profile/Rukman_Ragas.jpg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    elizabeth: file(relativePath: { eq: "profile/Elizabeth_Broadbent_.jpg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rsl: file(relativePath: { eq: "profile/RSL.jpg" }) {
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
