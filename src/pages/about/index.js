import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import SEO_image from '../../images/SEO_image.jpg';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
      image: data.leon.childImageSharp.gatsbyImageData,
    },
  ];

  const assistantEditors = [
    {
      bio: "<p><strong>TJ Price</strong>’s corporeal being is currently located in Raleigh, NC, with his handsome partner of many years, but his ghosts live in northeastern Connecticut, southern Maine, and north Brooklyn. He has performed in an editorial capacity for various anthologies in the past, such as <em>Collage Macabre: an Exhibition of Art Horror</em>, <em>Odd Jobs: Six Files from the Department of Inhuman Resources</em>, and <em>between doorways: explorations into liminal space</em>. He has also served as editor for Emma E. Murray’s début collection of short fiction, <em>The Drowning Machine and Other Obsessions</em>, as well as Erik McHatton’s début collection, <em>Straw World and Other Echoes from the Void</em>. His own work has been published in such venues as <em>Nightmare Magazine</em>, <em>PseudoPod</em>, <em>Cosmic Horror Monthly</em>, and <em>Archive of the Odd</em>. In addition, he has published a mixed-media novelette, <em>The Disappearance of Tom Nero</em>, and is currently a staff writer for <em>3 Quarks Daily</em>. He may be invoked—though the summoning may often cause mild hallucinatory effects in the unwary—at <a href='https://tjpricewrites.com/'>tjpricewrites.com</a>.</p>",
      twitter: null,
      facebook: null,
      url: "https://tjpricewrites.com/",
    image: data.tj.childImageSharp.gatsbyImageData,
    },
    {
      bio: "<p><strong>Danai Christopoulou</strong> (she/they) is a queer Greek SFF author and editor. Danai’s nonfiction has appeared in publications such as <em>Glamour</em> and <em>Marie Claire</em> since 2004. They are an editor for Hugo-nominated <em>khōréō</em> magazine, an assistant editor for <em>Haven Spec Magazine</em>, and an Assistant Literary Agent at Tobias Literary Agency. Their short fiction has been published in <em>khōréō</em>, <em>Fusion Fragment</em> and others, nominated for a Pushcart Prize, and featured in the official Nebula Reading List. Danai’s novels are represented by Lauren Bieker of FinePrint Literary.</p>",
      twitter: "https://twitter.com/Danaiwrites",
      facebook: null,
      url: null,
      image: data.danai.childImageSharp.gatsbyImageData,
    },
  ];

  const associateEditors = [
    {
      bio: "<p><strong>RSL</strong> (he/they) is a scouse writer and academic whose work tends toward the weird and the absurd. He's a PhD Candidate at University of Liverpool, studying the mental health benefits of challenging fiction during challenging times. His fictional work can be read in <em>CHM</em> and <em>Vastarien</em>, as well as a few forthcoming pieces in journals. </p><p>You can find them complaining about money (or gushing about art) on Twitter as <a href='https://www.twitter.com/RSLjnr'>@RSLjnr</a> and insta as <a href='https://www.instagram.com/awayout92'>@awayout92</a>.</p>",
      twitter: "http://twitter.com/RSLjnr",
      facebook: null,
      url: null,
      image: data.rsl.childImageSharp.gatsbyImageData,
    },
    {
      bio: "<p><strong>L.T. Williams</strong> can’t seem to escape mountains — whether it's the mountain of his TBR list, the Appalachians where he grew up, or the Ozarks where he moved to after college. L.T.'s love for speculative fiction also started in the mountains, where the folk tales, urban legends, and cryptid stories of Appalachia inspired him to pick up the pen and start creating some of his own. His stories have been published—or are forthcoming—in <em>Chthonic Matter Quarterly</em>, <em>Tales to Terrify</em>, and <em>Shotgun Honey</em>, among others. When not writing, L.T. spends his time climbing rocks, hiking, playing board games, and studying ancient tomes from outer space. You can find him at <a href='https://ltwilliamswriter.com/'>ltwilliamswriter.com</a> or in the nearest body of water looking for frogs.",
      twitter: null,
      facebook: null,
      url: "https://ltwilliamswriter.com",
      image: data.lt.childImageSharp.gatsbyImageData,
    },
    {
      bio: "<p><strong>Pauline Chow</strong> writes speculative fiction to explore alternative histories and possible futures. Not your average data scientist she once sued slumlords and advocated for affordable housing as a legal aid attorney. She lives in the woods and is planning her next trip to a historical (and hopefully haunted) hotel. Her words are in <em>Cosmic Horror Monthly</em>, <em>Apocalypse Confidential</em>, <em>Space and Time Magazine</em>, and more. Find her at <a href='https://paulinechowstories.com/'>www.paulinechowstories.com</a> and <a href='https://bsky.app/profile/paulinechow.bsky.social'>paulinechow.bsky.social</a>.",
      twitter: null,
      facebook: null,
      url: 'https://paulinechowstories.com/',
      image: data.pauline.childImageSharp.gatsbyImageData,
    },
    {
      bio: "<p><strong>Faith Allington</strong> (she/her) is a genre-blending writer in Seattle, where she admires fungi and drinks too much tea. Her work appears or is forthcoming in <em>Flash Fiction Online</em>, <em>Haven Spec Magazine</em>, <em>Kaleidotrope</em>, and <em>Apex</em>. She can be found at <a href='https://www.faithallington.com/'>www.faithallington.com</a>.",
      twitter: null,
      facebook: null,
      url: 'https://www.faithallington.com/',
      image: data.faith.childImageSharp.gatsbyImageData,
    },
    {
      bio: "<p><strong>K. A. Roy</strong> (she/her) haunts the suburbs of Chicago alongside her family and three cats. Her stories have been featured at From Beyond Press, Shotgun Honey, Creepy Podcast, Malarkey Books, Spindle House, and more. Her work has been shortlisted for Brave New Weird through Tenebrous Press. She is represented by Eric Smith at Neighborhood Literary. Find her at <a href='https://kayleighroywrites.com/'>kayleighroywrites.com</a>.",
      twitter: null,
      facebook: null,
      url: 'https://kayleighroywrites.com/',
      image: data.ka.childImageSharp.gatsbyImageData,
    },
  ];

  const formerEditors = [
    {
      bio: "Ash Okada, Former Associate Editor",
      url: "<a href='https://ashokada.wordpress.com'>ashokada.wordpress.com</a>",
    image: data.ash.childImageSharp.gatsbyImageData,
    },
    {
      bio: "Rukman Ragas, Former Associate Editor",
      url: "<a href='https://rukmanragas.com'>rukmanragas.com</a>",
      image: data.rukman.childImageSharp.gatsbyImageData,
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
                <p className='p-top'><i><b>Haven Spec</b></i> is a speculative fiction magazine featuring stories and poems for a 21st century audience. We love stories with a sense of adventure, stories that teach us, that touch us, that leave us wanting more. We publish six issues every year, two of which (the DRY Issue and the WET Issue) are focused exclusively on the climate crisis and themes of displacement (very broadly defined).</p>
                <p>The crisis facing our planet is immediate and all-encompassing, and it will affect people of color, people living in poverty, and the working classes most of all. The popular metaphor is going over a cliff, but we prefer the tempest, the torrent, the flood. The waters are rising, but we can save ourselves.</p>
                <p className='p-bottom'>It's not too late.</p>
              </div>

            {/* ABOUT THE EDITORS SECTION */}
            <div className='title-static-no-border'>
              <h4>About the Editor</h4>
            </div>

            <div className='bio-bottom-margin'>
              {headEditors.map((headEditor, index) => {
                const image = getImage(headEditor.image);
                return (
                  <div key={index} className="content-div-static">
                    <div className="editorImageAbout">
                      {image && <GatsbyImage image={image} alt={`Photo of ${headEditor.id || 'editor'}`} />}
                      <div className="side-block">
                        {renderSocialIcon(headEditor.twitter, FaTwitter)}
                        {renderSocialIcon(headEditor.facebook, FaFacebook)}
                        {renderSocialIcon(headEditor.url, FaLink)}
                      </div>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: headEditor.bio }} />
                  </div>
                );
              })}
            </div>


              {/* ABOUT THE ASSISTANT EDITORS SECTION */}
              <div className='title-static-no-border'>
              <h4>About the Assistant Editors</h4>
              </div>
              <div className='bio-bottom-margin'>
                {assistantEditors.map((assistantEditor, index) => {
                  const image = getImage(assistantEditor.image);
                  return (
                    <div key={index} className="content-div-static">
                      <div className="editorImageAbout">
                        {image && <GatsbyImage image={image} alt={`Photo of ${assistantEditor.id || 'assistant editor'}`} />}
                        <div className="side-block">
                          {renderSocialIcon(assistantEditor.twitter, FaTwitter)}
                          {renderSocialIcon(assistantEditor.facebook, FaFacebook)}
                          {renderSocialIcon(assistantEditor.url, FaLink)}
                        </div>
                      </div>
                      <span dangerouslySetInnerHTML={{ __html: assistantEditor.bio }} />
                    </div>
                  );
                })}
              </div>
              
              {/* ABOUT THE ASSISTANT EDITORS SECTION */}
              <div className='title-static-no-border'>
                <h4>About the Associate Editors</h4>
              </div>
              <div className='bio-bottom-margin'>
                {associateEditors.map((associateEditor, index) => {
                  const image = getImage(associateEditor.image);
                  return (
                    <div key={index} className="content-div-static">
                      <div className="editorImageAbout">
                        {image && <GatsbyImage image={image} alt={`Photo of ${associateEditor.id || 'assistant editor'}`} />}
                        <div className="side-block">
                          {renderSocialIcon(associateEditor.twitter, FaTwitter)}
                          {renderSocialIcon(associateEditor.facebook, FaFacebook)}
                          {renderSocialIcon(associateEditor.url, FaLink)}
                        </div>
                      </div>
                      <span dangerouslySetInnerHTML={{ __html: associateEditor.bio }} />
                    </div>
                  );
                })}
              </div>

              {/* ABOUT THE FORMER EDITORS SECTION */}
                <div className='title-static-no-border'>
                  <h2>Former Editors</h2>
                </div>
                <div className="former-editors-wrapper">
                  <div className='former-editors-grid'>
                    {formerEditors.map((formerEditor, index) => {
                      const image = getImage(formerEditor.image);
                      return (
                        <div key={index} className="editor-card">
                          <div className="editor-image">
                            {image && (
                              <GatsbyImage
                                image={image}
                                alt={`Photo of ${formerEditor.id || 'former editor'}`}
                              />
                            )}
                          </div>
                          <div className="editor-info">
                            <div
                              className="editor-name"
                              dangerouslySetInnerHTML={{ __html: formerEditor.bio }}
                            />
                            <div
                              className="editor-url"
                              dangerouslySetInnerHTML={{ __html: formerEditor.url }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              <div className='title-static-no-border'>
                <h4>Privacy Policy</h4>
              </div>
              <div className='intro-div-static'>
                <p>We don't collect any information beyond simple analytics, and that's only to get a sense of how many people visit our site and access our content. Subscriptions and purchases are handled off-site, and that simplifies things nicely. We promise however to never sell any data that we collect, and this applies if you're visiting our site from anywhere on, above, or below the surface of the Earth, plus all the planets in all the solar systems in all the galaxies in this and any other universe from now until the last star fades. We hope that clears things up.</p>
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
        gatsbyImageData(height: 60, layout: FIXED, placeholder: BLURRED)
      }
    }
    leon: file(relativePath: { eq: "profile/Leon_Perniciaro.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 180, height: 180, layout: FIXED, placeholder: BLURRED)
      }
    }
    tj: file(relativePath: { eq: "profile/TJ_Price.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 180, height: 180, layout: FIXED, placeholder: BLURRED)
      }
    }
    danai: file(relativePath: { eq: "profile/Danai_Christopoulou.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 180, height: 180, layout: FIXED, placeholder: BLURRED)
      }
    }
    lt: file(relativePath: { eq: "profile/L_T_Williams.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 180, height: 180, layout: FIXED, placeholder: BLURRED)
      }
    }
    rsl: file(relativePath: { eq: "profile/RSL.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 180, height: 180, layout: FIXED, placeholder: BLURRED)
      }
    }
    pauline: file(relativePath: { eq: "profile/Pauline_Chow.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 180, height: 180, layout: FIXED, placeholder: BLURRED)
      }
    }
    faith: file(relativePath: { eq: "profile/Faith_Allington.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 180, height: 180, layout: FIXED, placeholder: BLURRED)
      }
    }            
    ka: file(relativePath: { eq: "profile/K_A_Roy.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 180, height: 180, layout: FIXED, placeholder: BLURRED)
      }
    }
    ash: file(relativePath: { eq: "profile/Ash_Okada.png" }) {
      childImageSharp {
        gatsbyImageData(width: 60, height: 60, layout: FIXED, placeholder: BLURRED)
      }
    }
    rukman: file(relativePath: { eq: "profile/Rukman_Ragas.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 60, height: 60, layout: FIXED, placeholder: BLURRED)
      }
    }
  }
`;

export default About;
