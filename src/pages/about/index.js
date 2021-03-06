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
                      sense of adventure, stories that teach us, that touch us, that make us want more. We publish six issues every year, two of which (the DRY Issue and the 
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

                      <div className="pb-1">
                        <h1 className="pt-1 pb-1">
                          About the Editor
                        </h1>
                  <div className="editorImageAbout">
                          <Image fixed={data.leon.childImageSharp.fixed}/>
                  <a href={leonTwitter}>
                    <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                      <FaTwitter />
                    </IconContext.Provider>
                  </a>
                </div>

                        <div className="editorImageAbout">

                        </div>

                          <p className="pb-1">Leon Perniciaro (he/him) is a writer, editor, and translator originally from New Orleans, but now living in New England. He worries about the climate 
                          crisis and the Great Filter. He also produces audio fiction, and he sometimes wears hats. Follow him on Twitter <a href="https://www.twitter.com/leonperniciaro">@LeonPerniciaro</a>.</p>
                      </div>
                      <hr />
                      
                      <div className="pb-1">
                        <h1 className="pt-1 pb-1">
                          Volunteer
                        </h1>
                          <p className="pb-1">Leon Perniciaro (he/him) is a writer, editor, and translator originally from New Orleans, but now living in New England. He worries about the climate 
                          crisis and the Great Filter. He also produces audio fiction, and he sometimes wears hats. Follow him on Twitter <a href="https://www.twitter.com/leonperniciaro">@LeonPerniciaro</a>.</p>
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

                      <div className="pb-1">
                        <h1 className="pt-1 pb-1">
                          Advertise
                        </h1>
                          <p className="">
                            At this moment, all ads are $30 per month, starting from the first of a given month and going until that month ends.
                          </p>
                          <p>
                            Each ad appears on every page of the website. The square ads change positions with each pageview. Do note, however, that all advertisements are subject to approval.
                          </p>
                          <p>
                            To advertise, contact us at (our domain name)@gmail.com. (The domain name is the thing between "www." and ".com" of the homepage.) Please also be prepared to send us a
                            suitable image of 250 x 250 pixels (for square ads) or 424 x 60 pixels (for the banner ad), along with a single link to whatever's being advertised. 
                          </p>
                        </div>
                      <hr />

                      <div className="pb-1">
                        <h1 className="pt-1 pb-1">
                          Contact
                        </h1>
                          <p>
                            For art, article, letter and fiction submissions, see those pages for more details. For advertising, contact us at the address above.
                            For everything else, you can contact us at (our domain name)@gmail.com. (The domain name is the thing between "www." and ".com" of the homepage.)
                          </p>
                          <p>
                            Use this power only for good.
                          </p>
                        </div>
                      <hr />

                      <div className="pb-1">
                        <h1 className="pt-1 pb-1">
                          Privacy Policy
                        </h1>
                          <p>
                            We don't collect any information beyond simple analytics, and that's only to get a sense of how many people visit our site and access our content. 
                            Subscriptions and purchases are handled off-site, and that simplifies things nicely. We promise however to never sell any data that we collect, and this 
                            applies if you're visiting our site from anywhere on, above, or below the surface of the Earth, plus all the planets in all the solar systems in all the 
                            galaxies in this and any other universe from now until the last star fades.</p>
                          <p> 
                            We hope that clears things up.
                          </p>
                        </div>
                      <hr />
                      
                      <div className="pb-1">
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
                        <p>
                          This anti-harassment policy was largely cribbed from that of the non-profit group 
                          <a href="https://blog.americansforthearts.org/about-americans-for-the-arts/organizational-policies"> Americans for the Arts</a>. 
                          We aren't affiliated in any way.
                        </p>
                      </div>
                    <hr />

                    <div className="pb-1">
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
                        <p>
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
