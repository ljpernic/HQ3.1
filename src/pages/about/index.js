import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";

import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

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

const About = (props) => {
  const data = props.data;

  const leonTwitter = `http://twitter.com/leonperniciaro`;
  const ashTwitter = `http://twitter.com/ashaquestion`;

  const currentIssue = `https://ko-fi.com/havenspec/shop`;
  
  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);

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
              <div className="thinLeft one">
                <div>
                <a href={currentIssue}>
                    <Image className="topImageLeft"
                      fixed={data.currentCover.childImageSharp.fixed}
                    />
                  </a>
                </div>
                <div>
                      <a className="buybutton button-primary" href={currentIssue}>
                        BUY CURRENT ISSUE
                      </a>
                </div>

                <div>
                <Link to="/subscribe">
                    <Image className="advert mb-2 mt-6"
                      fixed={shuffledArray[0]}
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                <div>
                <Link to="/subscribe">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[1]}
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>

                <div>
                  <Link to="/subscribe">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[2]}
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                </div>

            <div className="wideRight">
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
                  <i>Haven Spec</i> is a speculative fiction magazine featuring stories for a 21st century audience. We love stories with a 
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
                    <Image fixed={data.leon.childImageSharp.fixed}/>
                    <a href={leonTwitter}>
                      <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                        <FaTwitter />
                      </IconContext.Provider>
                    </a>
                  </div>

                  <p>
                    Leon Perniciaro (he/him) is a writer, editor, translator, and university professor, teaching courses in game design. He also co-hosts Father Bother, 
                    a writers' room comedy podcast about literature and children's books.
                  </p>
                  <p className="pb-1"> Originally from New Orleans, he now lives in New England, and he's terrified of both 
                    the climate crisis and the Great Filter.
                  </p>
                </div>

                <div>
                  <h1 className="pt-3 pb-1">
                    About the Associate Editor
                  </h1>
                  <div className="editorImageAbout mb-2">
                    <Image fixed={data.ash.childImageSharp.fixed}/>
                    <a href={ashTwitter}>
                      <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                        <FaTwitter />
                      </IconContext.Provider>
                    </a>
                  </div>

                  <p>
                  Ash Okada (she/they) is a speculative fiction writer and capital-N Nerd who is endlessly fascinated by story, languages, history, the human brain, and 
                  dinosaurs. Ash has worked an eclectic set of jobs over the years, from lit agency intern to video captioner and from executive assistant to bridge caddy 
                  (though not necessarily in that order), and lives in Brooklyn, NY.</p> 
                  
                  <p className="pb-1">When the weather's lousy, you can usually find Ash curled up with a massive cup of tea 
                  and a good book (or audiobook). When the weather's great...well, pretty much the same thing, if we're being honest.
                  </p>
                </div>
                <hr />
                      
                <div>
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
    leon: file(relativePath: { eq: "profile/Leon_Perniciaro.png" }) {
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
