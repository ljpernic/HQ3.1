import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import SEO_image from '../../images/SEO_image.jpg';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';
import { IconContext } from "react-icons";

const About = ({ data }) => {

  const headEditors = [
    {
      bio: "<p><strong>Leon Perniciaro</strong> (he/him) is the editor of Haven Spec Magazine, an English PhD candidate at the University of Connecticut, and a member of the Game Design and Development faculty at Quinnipiac University. His academic research centers on intersections of Indigeneity, race, and the environment, especially through rhetorics of apocalypse, forms of material and social extraction, and the various ways that settler society attempts to claim Indigeneity for itself. Outside of academia, he's published several short stories and is heavily involved in the Indigenous community organization Ho Minti Society and the Yamá language revival project. A citizen of the Choctaw-Apache Tribe of Ebarb and a New Orleanian, he now resides in New England, where he's terrified of both the climate crisis and the Great Filter. Follow him on Bluesky <a href='https://bsky.app/profile/leonp.bsky.social'>@leonp</a>.</p>",
      twitter: null,
      facebook: null,
      url: "https://www.leonperniciaro.com",
      image: data.leon.childImageSharp.fixed,
    },
  ];

  const assistantEditors = [
    {
      bio: "<p><strong>TJ Price</strong>'s corporeal being is currently located in Raleigh, NC, with his handsome partner of many years, but his ghosts live in northeastern Connecticut, southern Maine, and north Brooklyn. He is the author of the novelette <em>The Disappearance of Tom Nero</em>, published by Spooky House Press. His work has appeared—or is forthcoming—in <em>Nightmare Magazine</em>, <em>pidgeonholes</em>, <em>The NoSleep Podcast</em>, and various anthologies. He's almost always in the middle of some project, either editorially or otherwise, and enjoys experimenting with prose & poetry as well as certain esoteric studies. </p><p>He can be invoked at either <a href='https://tjpricewrites.com/'>tjpricewrites.com</a> or via the blue bird <a href='https://www.twitter.com/eerieyore'>@eerieyore</a>. Failing that, one can make a circle of chalk on the floor, stand in the center, and burn a photograph of a loved one until all that remains is ashes. Then, listen for a murmuring from within the walls. Leave your message after the sound of the screb.</p>",
      twitter: "https://twitter.com/eerieyore",
      facebook: null,
      url: "https://tjpricewrites.com/",
      image: data.tj.childImageSharp.fixed,
    },
    {
      bio: "<p><strong>Danai Christopoulou</strong> (she/they) is a queer Greek SFF author and editor. Danai’s nonfiction has appeared in publications such as <em>Glamour</em> and <em>Marie Claire</em> since 2004. They are an editor for Hugo-nominated <em>khōréō</em> magazine, an assistant editor for <em>Haven Spec Magazine</em>, and an Assistant Literary Agent at Tobias Literary Agency. Their short fiction has been published in <em>khōréō</em>, <em>Fusion Fragment</em> and others, nominated for a Pushcart Prize, and featured in the official Nebula Reading List. Danai’s novels are represented by Lauren Bieker of FinePrint Literary.</p>",
      twitter: "https://twitter.com/Danaiwrites",
      facebook: null,
      url: null,
      image: data.danai.childImageSharp.fixed,
    },
  ];

  const associateEditors = [
    {
      bio: "<p><strong>Ash Okada</strong> (she/they) is a speculative fiction writer and capital-N Nerd who is endlessly fascinated by story, languages, history, the human brain, and dinosaurs. Ash has worked an eclectic set of jobs over the years, from lit agency intern to video captioner and from executive assistant to bridge caddy (though not necessarily in that order), and lives in Brooklyn, NY. </p><p>When the weather's lousy, you can usually find Ash curled up with a massive cup of tea and a good book (or audiobook). When the weather's great...well, pretty much the same thing, if we're being honest.</p>",
      twitter: "http://twitter.com/ashaquestion",
      facebook: null,
      url: null,
      image: data.ash.childImageSharp.fixed,
    },
    {
      bio: "<p><strong>Rukman Ragas</strong> (they/he) writes from Sri Lanka. Their fiction is forthcoming from <em>Khoreo</em> and <em>Tasavvur</em>. He splits his time between the humid coast and the chilly mountains, both triggering different allergies. </p><p>They can be found on twitter <a href='https://www.twitter.com/Rukmanwrites'>@Rukmanwrites</a>, advocating for passive protagonists and retelling South Asian myths.</p>",
      twitter: "http://twitter.com/RukmanWrites",
      facebook: null,
      url: null,
      image: data.rukman.childImageSharp.fixed,
    },
    {
      bio: "<p><strong>RSL</strong> (he/they) is a scouse writer and academic whose work tends toward the weird and the absurd. He's a PhD Candidate at University of Liverpool, studying the mental health benefits of challenging fiction during challenging times. His fictional work can be read in <em>CHM</em> and <em>Vastarien</em>, as well as a few forthcoming pieces in journals. </p><p>You can find them complaining about money (or gushing about art) on Twitter as <a href='https://www.twitter.com/RSLjnr'>@RSLjnr</a> and insta as <a href='https://www.instagram.com/awayout92'>@awayout92</a>.</p>",
      twitter: "http://twitter.com/RSLjnr",
      facebook: null,
      url: null,
      image: data.rsl.childImageSharp.fixed,
    },
    {
      bio: "<p><strong>L.T. Williams</strong> can’t seem to escape mountains — whether it's the mountain of his TBR list, the Appalachians where he grew up, or the Ozarks where he moved to after college. L.T.'s love for speculative fiction also started in the mountains, where the folk tales, urban legends, and cryptid stories of Appalachia inspired him to pick up the pen and start creating some of his own. His stories have been published—or are forthcoming—in <em>Chthonic Matter Quarterly</em>, <em>Tales to Terrify</em>, and <em>Shotgun Honey</em>, among others. When not writing, L.T. spends his time climbing rocks, hiking, playing board games, and studying ancient tomes from outer space. You can find him at <a href='https://ltwilliamswriter.com/'>ltwilliamswriter.com</a> or in the nearest body of water looking for frogs.",
      twitter: null,
      facebook: null,
      url: "https://ltwilliamswriter.com",
      image: data.ltwilliams.childImageSharp.fixed,
    },
    {
      bio: "<p><strong>Pauline Chow</strong> writes speculative fiction to explore alternative histories and possible futures. Not your average data scientist she once sued slumlords and advocated for affordable housing as a legal aid attorney. She lives in the woods and is planning her next trip to a historical (and hopefully haunted) hotel. Her words are in <em>Cosmic Horror Monthly</em>, <em>Apocalypse Confidential</em>, <em>Space and Time Magazine</em>, and more. Find her at <a href='https://paulinechowstories.com/'>www.paulinechowstories.com</a> and <a href='https://bsky.app/profile/paulinechow.bsky.social'>paulinechow.bsky.social</a>.",
      twitter: null,
      facebook: null,
      url: 'https://paulinechowstories.com/',
      image: data.pauline.childImageSharp.fixed,
    },
    {
      bio: "<p><strong>Faith Allington</strong> (she/her) is a genre-blending writer in Seattle, where she admires fungi and drinks too much tea. Her work appears or is forthcoming in <em>Flash Fiction Online</em>, <em>Haven Spec Magazine</em>, <em>Kaleidotrope</em>, and <em>Apex</em>. She can be found at <a href='https://www.faithallington.com/'>www.faithallington.com</a>.",
      twitter: null,
      facebook: null,
      url: 'https://www.faithallington.com/',
      image: data.faith.childImageSharp.fixed,
    },
  ];

  const renderSocialIcon = (url, Icon) => url && (
    <a className='social-icon' href={url}>
      <IconContext.Provider value={{ size: ".7em", title: "social media icons" }}>
        <Icon />
      </IconContext.Provider>
    </a>
  );

  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine, About" image={SEO_image} alt="Haven Spec Magazine, About Page Image" />
      <Helmet>
        <script src={withPrefix('collapsible_script.js')} type="text/javascript" />
        <meta name="Haven Spec Magazine, About Page" content="Haven Spec Magazine, About Page" />
      </Helmet>

      <div className="main-body">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="one">
                <CurrentIssue />
                <Advertisement />
              </div>
            <div>
              <div className='title-static-border'>
                <h4>
                  ABOUT
                </h4>
              </div>
              <div className='intro-div-static'>
                <p className='p-top'><i><b>Haven Spec</b></i> is a speculative fiction magazine featuring stories for a 21st century audience. We love stories with a sense of adventure, stories that teach us, that touch us, that leave us wanting more. We publish six issues every year, two of which (the DRY Issue and the WET Issue) are focused exclusively on the climate crisis and themes of displacement (very broadly defined).</p>
                <p>The crisis facing our planet is immediate and all-encompassing, and it will affect people of color, people living in poverty, and the working classes most of all. The popular metaphor is going over a cliff, but we prefer the tempest, the torrent, the flood. The waters are rising, but we can save ourselves.</p>
                <p className='p-bottom'>It's not too late.</p>
                {/* <Link to="/subscribe">
                    <Image className="advertLong-bottom" fixed={data.advertLong.childImageSharp.fixed} />
                  </Link> */}
              </div>

            {/* ABOUT THE EDITORS SECTION */}
            <div className='title-static-no-border'>
              <h4>About the Editor</h4>
            </div>

            <div className='bio-bottom-margin'>
                {headEditors.map((headEditor, index) => (
                  <div key={index} className="content-div-static">
                    <div className="editorImageAbout">
                      <Image fixed={headEditor.image} />
                      <div className="side-block">
                        {renderSocialIcon(headEditor.twitter, FaTwitter)}
                        {renderSocialIcon(headEditor.facebook, FaFacebook)}
                        {renderSocialIcon(headEditor.url, FaLink)}
                      </div>
                    </div>
                      <span dangerouslySetInnerHTML={{ __html: headEditor.bio }} />
                  </div>
                ))}
                </div>


              {/* ABOUT THE ASSISTANT EDITORS SECTION */}
              <div className='title-static-no-border'>
              <h4>About the Assistant Editors</h4>
              </div>
              <div className='bio-bottom-margin' style={{paddingBottom:'0px'}}>
                {assistantEditors.map((assistantEditor, index) => (
                  <div key={index} className="content-div-static" style={{paddingBottom:'40px'}}>
                    <div className="editorImageAbout">
                      <Image fixed={assistantEditor.image} />
                      <div className="side-block">
                        {renderSocialIcon(assistantEditor.twitter, FaTwitter)}
                        {renderSocialIcon(assistantEditor.facebook, FaFacebook)}
                        {renderSocialIcon(assistantEditor.url, FaLink)}
                      </div>
                    </div>
                  <div>
                    <span dangerouslySetInnerHTML={{ __html: assistantEditor.bio }} />
                  </div>
                </div>
                ))}
              </div>
              
              {/* ABOUT THE ASSISTANT EDITORS SECTION */}
              <div className='title-static-no-border'>
                <h4>About the Associate Editors</h4>
              </div>
              <div className='bio-bottom-margin' style={{paddingBottom:'0px'}}>
                {associateEditors.map((associateEditor, index) => (
                  <div key={index} className="content-div-static" style={{paddingBottom:'40px'}}>
                    <div className="editorImageAbout">
                      <Image fixed={associateEditor.image} />
                      <div className="side-block">
                        {renderSocialIcon(associateEditor.twitter, FaTwitter)}
                        {renderSocialIcon(associateEditor.facebook, FaFacebook)}
                        {renderSocialIcon(associateEditor.url, FaLink)}
                      </div>
                    </div>
                  <div>
                    <span dangerouslySetInnerHTML={{ __html: associateEditor.bio }} />
                  </div>
                </div>
                ))}
              </div>

              <div className='title-static-no-border'>
                <h4>Privacy Policy</h4>
              </div>
              <div className='intro-div-static'>
                <p>We don't collect any information beyond simple analytics, and that's only to get a sense of how many people visit our site and access our content. Subscriptions and purchases are handled off-site, and that simplifies things nicely. We promise however to never sell any data that we collect, and this applies if you're visiting our site from anywhere on, above, or below the surface of the Earth, plus all the planets in all the solar systems in all the galaxies in this and any other universe from now until the last star fades. We hope that clears things up.</p>
                <p>We hope that clears things up.</p>
              </div>

              <div className='title-static-no-border'>
                <h4>Anti-Harassment Policy</h4>
              </div>
              <div className='intro-div-static'>
                  <p>We take harassment seriously. Any behavior that makes another person feel unsafe, harms another person, or causes another person distress is expressly forbidden. Any kind of intimidation or threatening behavior is expressly forbidden. Any harassing comment or attack based on age, citizenship status, disability, familial status, gender, gender expression or identity, geography, marital status, place of origin, race/ethnicity, religion, sexual orientation, or socioeconomic status is expressly forbidden. Any form of sexual harassment, regardless of circumstance or parties involved, is expressly forbidden.</p>
                  <p>If you feel that someone's participating in harassing behavior, please contact us with your concerns immediately. All complaints will remain anonymous.</p>
                  <p>This applies both to staff and all participants across all spaces curated by <em>Haven Spec Magazine</em> (including social media).</p>
                  <p>This page isn't meant to be an exhaustive list of dos and don'ts. We kindly ask that you use your brain. It's still harassment if you're "just joking." it's still harassment if it's subtext and innuendo. It's still harassment whether scribbled in a notebook or written in the sky. If you're not sure what counts, there are many resources online, but err in all cases on the side of caution.</p>
                  <p>This anti-harassment policy was largely cribbed from that of the non-profit group Americans for the Arts. We aren't affiliated in any way.</p>
                </div>

                <div className='title-static-no-border'>
                  <h4>Contact Us</h4>
                </div>
                <div className='intro-div-static'>
                  <p>To submit art, fiction, non-fiction, and poetry, visit the <Link to="/submit">submission page</Link>. For advertising, go to the <Link to="/subscribe">subscribe and support page</Link>. For everything else, fill out this form!</p>
                  <p>Use this power only for good.</p>
                  <iframe className="iframeContact" src="https://www.cognitoforms.com/f/GtTjHOYx10OF7APqunHRFw/6"></iframe>
                </div>

                <div className='intro-div-static' style={{marginTop: '40px'}}>
                  <p>Interested to know how this website was put together? Want to get a (free!) copy of the website and our backend systems of your own? <Link to="/about-this-site">Click here!</Link></p>
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
    ltwilliams: file(relativePath: { eq: "profile/L_T_Williams.jpg" }) {
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
    pauline: file(relativePath: { eq: "profile/Pauline_Chow.jpg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    faith: file(relativePath: { eq: "profile/Faith_Allington.jpg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }            
  }
`;

export default About;
