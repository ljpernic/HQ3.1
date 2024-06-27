import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import SEO_image from '../../images/SEO_image.jpg';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

const Subscribe = (props) => {
  const data = props.data;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine, Support and Subscribe" image={SEO_image} alt="Haven Spec Magazine, Support and Subscribe Page Image" />
      <Helmet>
      <script async src="https://c6.patreon.com/becomePatronButton.bundle.js" />
        <meta
          name="Haven Spec Magazine, Support and Subscribe"
          content="Haven Spec Magazine, Support and Subscribe"
        />
      </Helmet>

      <div className="main-body">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className='one'>
                <CurrentIssue />
                <Advertisement />
              </div>
              <div>
              <div className='title-static-border'>
                  <h4>SUBSCRIBE</h4>
                </div>

                <div className='bio-bottom-margin' style={{borderBottom:'none', paddingBottom:'0px'}}>                
                <div className='content-div-dynamic'>
                  {/* <Link to="/subscribe">
                      <Image className="advertLong-top" fixed={data.advertLong.childImageSharp.fixed} />
                    </Link> */}

            <h3 className="title-static-no-border">
              Subscribe
            </h3>
            <p>
              Get each new issue sent directly to your inbox through <a href="https://www.patreon.com/HavenSpecMagazine"> Patreon</a>! It's basically magic! 
              Remember, a mammoth never forgets—to subscribe!
            </p>
            {/* <p>
              You can also sign up for workshop-style feedback from our editors on any work of prose or poetry you choose (once per month and up to 6K words), and there's even an 
              option to meet one-on-one with our editor over zoom for an hour-long deep-dive critique session!
            </p> */}
            <p>
              Every penny that we get through Ko-Fi and Patreon will go towards increasing author pay! If you'd like to know more about our budget breakdown and organizational  
              set up, <Link to="/organization">Click here!</Link> Help us pay our authors and artists the rates they deserve! 
            </p>

            <a className='patreonbutton' href="https://www.patreon.com/bePatron?u=61506985">
              Subscribe through Patreon!
            </a>
          </div>

          <div className='content-div-dynamic'>
            <h3 className="title-static-no-border" style={{paddingTop:'30px'}}>
              Kickstarter
            </h3>
            <p>
              <a href='https://www.kickstarter.com/projects/haven-spec-magazine/haven-spec-magazine-2024'>Our Kickstarter for 2024</a> was successful! Thank you 
              everyone who supported our campaign to pay pro rates!
            </p>
          </div>

          <div className='content-div-dynamic' style={{borderBottom:"none"}}>
            <h3 className="title-static-no-border" style={{paddingTop:'30px'}}>
              Advertise
            </h3>
            <p>
              At this moment, all ads are $100 per month, starting from the first of a given month and going until that month ends.
            </p>
            <p>
              Each ad appears on every page of the website, and the square ads change position with each pageview. Do note, however, that all advertisements are subject to approval.
            </p>
            <p>
              To advertise, contact us using the contact form on our <Link to="/about">about page</Link>. Please also be prepared to send us a suitable image of 250 x 250 pixels 
              (for square ads) or 424 x 60 pixels (for the banner ad), along with a single link to whatever's being advertised. 
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
  query SubscribeQuery {
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

export default Subscribe;
