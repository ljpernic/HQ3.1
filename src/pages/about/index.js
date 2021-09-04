import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

const About = (props) => {
  const data = props.data;

  const leonTwitter = `http://twitter.com/leonperniciaro`;
  const volunteerTwitter = `http://twitter.com/volunteerathavenspec`;

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
                  <Link to="">
                    <Image className="topImageLeft"
                      fixed={data.currentCover.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                </div>
                <div>
                  <Link className="buybutton button-primary" to="">
                    BUY CURRENT ISSUE
                  </Link>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2 mt-6"
                      fixed={data.advert01.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={data.advert02.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={data.advert03.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
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
                  <Link to="">
                    <Image className="advertLong"
                      fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                </div>
                <hr />

                <div>
                  <h1 className="pt-1 pb-1">
                    About the Editor
                  </h1>
                  <div className="editorImageAbout mb-5">
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
                    the climate crisis and the Great Filter. Follow him on Twitter <Link to="https://www.twitter.com/leonperniciaro">@LeonPerniciaro</Link>.
                  </p>
                </div>
                <hr />
                      
                <div>
                  <h1 className="pt-1 pb-1">
                    Volunteer
                  </h1>
                  <div className="editorImageAbout mb-1">
                    <Image fixed={data.volunteer.childImageSharp.fixed}/>
                    <a href={volunteerTwitter}>
                      <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                        <FaTwitter />
                      </IconContext.Provider>
                    </a>
                  </div>
                  <p>
                    Interested in being a slush reader for Haven Spec? Are you passionate about speculative fiction and poetry? Volunteer today! There's no better way to improve 
                    your own writing than reading other people's!
                  </p> 
                  <p>
                    We want diverse, engaged writing, and so we need diverse, engaged readers. The position is unpaid, and you won't 
                    be able to submit to the magazine while you're a member of staff, but it's a great opportunity to learn the ropes in spec fiction publishing.
                  </p> 
                  <p className="pb-1">
                    To apply, email us with "VOLUNTEER" in the subject line, along with your relevant interests and background (if any), and we'll go from there!                  
                  </p>
                </div>
                <hr />

    {/*                   <button type="button" className="collapsible">Awards</button>                               HIDDEN BUTTON FOR AWARDS 
                            <div className="collapsibleContent pt-2 pb-1">
                              <p>
                                A space reserved for rewards.
                              </p>
                              <p>
                                Now let's win some.
                              </p>
                            </div>
    */}

                <div>
                  <h1 className="pt-1 pb-1">
                    Contact
                  </h1>
                  <p>
                    For art, fiction, letter, non-fiction, and poetry submissions, see the <a href="http://localhost:8000/submit">submission page</a> for more 
                    details. For advertising, see the entry under the <a href="http://localhost:8000/subscribe">subscribe and support page</a>.
                    For everything else, you can contact us at (our domain name)@gmail.com. (The domain name is the thing between "www." and ".com" of the homepage.)
                  </p>
                  <p className="pb-1">
                    Use this power only for good.
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
                <hr />

                <div>
                  <h1 className="pt-1 pb-1">
                    About This Site
                  </h1>
                  <p>
                    This site was developed from the <a href="https://www.gatsbyjs.com/starters/jugglerx/gatsby-serif-theme">gatsby serif starter</a>. It was built using 
                    gatsby.js and is used here under the MIT license. The background was taken from pixabay.
                  </p>
                  <p>
                    <center>
                      The website design is used here under the MIT license (MIT)
                    </center>
                  </p>
                  <p>
                    <center>
                      Copyright (c) 2015 gatsbyjs
                    </center>
                  </p>
                  <p>
                    <center>
                      Permission is hereby granted, free of charge, to any person obtaining a copy
                      of this software and associated documentation files (the "Software"), to deal
                      in the software without restriction, including without limitation the rights
                      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                      copies of the software, and to permit persons to whom the software is
                      furnished to do so, subject to the following conditions:
                    </center>
                  </p>
                <p>
                  <center>
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the software.
                  </center>
                </p>
              <p className="pb-1">
                <center>
                  The software is provided "As is", without warranty of any kind, express or
                  implied, including but not limited to the warranties of merchantability,
                  fitness for a particular purpose and noninfringement. In no event shall the
                  authors or copyright holders be liable for any claim, damages or other
                  liability, whether in an action of contract, tort or otherwise, arising from,
                  out of or in connection with the software or the use or other dealings in the
                  software.
                </center>
              </p>
            </div>
            <hr className="mb-2" />
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
    leon: file(relativePath: { eq: "profile/Leon_Perniciaro.jpg" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    volunteer: file(relativePath: { eq: "profile/Volunteer.jpg" }) {
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
