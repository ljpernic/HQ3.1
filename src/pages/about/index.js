import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const About = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const about = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  const data = props.data;

  return (
    <Layout bodyClass="page-home">
      <SEO title="About" />
      <Helmet>
        <meta
          name="description"
          content="About page of Haven Spec"
        />
      </Helmet>

      <div className="intro pb-0">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <h4 className="pb-1">ABOUT US</h4>
              <hr />
            </div>
                                                                                        {/*this is where the blog stuff should go for stories getting posted*/}
            <div className="container pb-2">
              <h1>Haven Spec:</h1>
              <p>
                <i>Haven Spec</i> is an online speculative fiction magazine featuring fiction for the 21st century. We love stories with a 
                sense of adventure, stories that teach us, that touch us, that make us want more. Our focus is on the climate crisis and themes of 
                displacement, very (very) broadly defined. We publish four issues yearly, with a DRY issue on the vernal equinox and a WET issue on the autumnal 
                equinox.                 
              </p>
              <p>
                You can read our stories online for free, though for each issue, stories are released over the course of the month. You can also subscribe and 
                get all of the stories on the issue release date. Either way, our stories are meant to be shared, discussed, fretted over, celebrated, and 
                (eventually) recycled into kitty litter and insulation.
              </p>
              <p>
                Launched on the 15th anniversary of <Link to="https://en.wikipedia.org/wiki/Hurricane_Katrina">Hurricane Katrina</Link>, <i>Haven Spec</i> 
                publishes speculative fiction, non-fiction articles, and letters mailed to us from the future. Its editor is <Link to="www.leonperniciaro.com">
                Leon Perniciaro</Link>, a writer and editor from New Orleans but now living in New England. Displaced by the storm, he spent the Katrina months 
                sleeping on someone's sofa and working at a grocery in suburban Ohio. He worries about <Link to="">the Great Filter</Link>, 
                <Link to="https://en.wikipedia.org/wiki/Tipping_points_in_the_climate_system">climate tipping points</Link>, and the future of New Orleans.   
              </p>
              <p>
                The crisis facing our planet is immediate and all-encompassing, and it will affect people of color and people living in poverty. The popular metaphor 
                is going over a cliff, but we prefer the tempest, the torrent, the flood. The waters are rising, but we can save ourselves.
              </p>
              <p>
                It's not too late.
              </p>
              <hr className="mb-2 mt-2" />
              <h1>Staff:</h1>
              <p>
                We are actively looking for collaborators! 
              </p>
              <hr className="mb-2 mt-2" />
  {/*            <p>
                Awards
              </p>
              <hr />*/}
              <h1>
                Advertising:
              </h1>
              <p>
                Interested in advertising with us? Here are our rates!
              </p>
              <p>
                Sidebar prices (wherever the issue is) middle position...<br />
                Sidebar prices (wherever the issue is) lower position...
              </p>
              <p>
                Advertising inside the issue...
              </p>
              <p>
                To advertise, contact us here...
              </p>
              <hr className="mb-2 mt-2" />
              <h1>
                Contact:
              </h1>
              <p>
                For art, article, letter and fiction submissions, see those pages for more details. For advertising, contact us at the address above.
                If there's an issue with an issue (ha) or any other purchase, see the subscribe page for more information. For everything else, you can
                contact us at havenspec@gmail.com. 
              </p>
              <p>
                Use this power only for good.
              </p>
              <hr className="mb-2 mt-2" />
              <h1>
                Privacy Policy:
              </h1>
              <p>
                We don't collect any information (or if we do, we have no idea how to access it). We'll probably install google analytics at some point
                to give us an idea of how many people are visiting the site, and all of the purchasing aspects (for example, when you subscribe), should be 
                handled off-site by whatever service we use, so that simplifies things nicely. We promise not to sell any data that we collect incidentally (or 
                do anything at all with it really). This applies if you're visiting from the continents of Africa, Antarctica, Asia, Australia, Europe, North or
                South America, the planets of this or any other solar system, in this universe and all parallel universes that have existed from the Big Bang 
                until the end of time. We hope that clears things up.
              </p>
              <hr className="mb-2 mt-2" />
              <h1>
                Anti-Harassment Policy:
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
                This applies both to staff and all participants across all spaces curated by Haven Spec (including social media).
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
              <hr className="mb-2 mt-2" />
              <h1>
                About This Site:
              </h1>
              <p>
                This site was developed from the gatsby starter ..., which was created by .... It was built using gatsby.Js. See below for legalese. The font 
                was developed by... And downloaded from... . The background was taken from pixabay.
              </p>
              <p>
                <center>The website design is used here under the MIT license (MIT)</center>
              </p>
              <p>
                <center>Copyright (c) 2015 gatsbyjs</center>
              </p>
              <p>
              <center>Permission is hereby granted, free of charge, to any person obtaining a copy
                Of this software and associated documentation files (the "Software"), to deal
                In the software without restriction, including without limitation the rights
                To use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                Copies of the software, and to permit persons to whom the software is
                Furnished to do so, subject to the following conditions:</center>
              </p>
              <p>
              <center>The above copyright notice and this permission notice shall be included in all
                Copies or substantial portions of the software.</center>
              </p>
              <p>
              <center>The software is provided "As is", without warranty of any kind, express or
                Implied, including but not limited to the warranties of merchantability,
                Fitness for a particular purpose and noninfringement. In no event shall the
                Authors or copyright holders be liable for any claim, damages or other
                Liability, whether in an action of contract, tort or otherwise, arising from,
                Out of or in connection with the software or the use or other dealings in the
                Software.</center>
              </p>
              <hr className="mb-2 mt-2" />
  {/*}            {posts
                .filter(post => post.node.frontmatter.category === "about")
                .map(({ node: post }) => {
                  return (
                    <div className="container" key={post.id}>
                        <hr />
                    </div>
                  )
                })}*/}

            </div>
        </div>
        <div className="thin">
          <div>
            <Link to="">
              <Image className="topimage"
                fixed={data.image.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
              />
            </Link>
            <div className="text-center">
              <Link className="buybutton button-primary" to="">
                BUY THIS ISSUE
              </Link>
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
    image: file(relativePath: {eq: "CurrentCover.jpg"}) {
      id
      childImageSharp {
        fixed(width:300) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
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
          frontmatter {
            category
            featured
            path
            title
            author {
              id
              bio
              twitter
              picture {
                childImageSharp {
                  fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 200, maxHeight: 200) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            issue {
              id
              idpath
              currentcover {
                childImageSharp {
                  fixed(width: 300) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 300) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              text
              artist
              artistimage {
                childImageSharp {
                  fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFixed 
                  }
                  fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              artistbio 
            }
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp {
                fixed(width: 322) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFixed 
                }
                fluid(maxWidth: 450) {                              #COMMENT: This changed the post picture sizes on the front page (originally 75)
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default About;
