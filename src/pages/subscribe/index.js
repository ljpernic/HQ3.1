import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";

const Subscribe = (props) => {
  const data = props.data;

  return (
    <Layout bodyClass="page-home">
      <SEO title="Subscribe" />
      <Helmet>
        <meta
          name="description"
          content="Subscribe page of Haven Spec"
        />
      </Helmet>

      <div className="intro">                                                                {/*FEATURED*/}
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
                    SUBSCRIBE AND SUPPORT
                  </h4>
                  <hr />
                </div>
                <div className="pt-2">
                    <Link to="">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>                

            <h1 className="pb-1">
              Subscribe
            </h1>
            <p>
              Simultaneous submissions are fine, but please no multiple submissions. Also, please wait at least a week before you submit again after hearing from us about 
              a story. This is honestly more for the writer's benefit: it gives us a chance to clense our palate (if there was something we felt didn't work for 
              us in your last story, you don't want us to carry that feeling over to the next one!). As writers ourselves, we do our best to handle each story we receive 
              with the care and attention it deserves. Every submission is an act of bravery, and we know that putting yourself out there as a writer to be judged can be tough. 
              Just know that any story we receive, unless they contain threats of violence (explicit or implicit), will be kept in confidence.
            </p>
            <p className="pb-1">
                When in doubt, don't self reject! Submit submit submit! 
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
              Patreon
            </h1>
            <p className="pb-1">
              We like articles on politics and pop culture, articles steeped in science or otherwise verging on the academic, and articles with funny or interesting takes we 
              might not have expected. We pay 1¢ per word for non-fiction, but please nothing over 4,500 words (though we favor shorter over longer).
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
            KoFi
            </h1>
            <p className="pb-1">
              We're not quite sure how, but once every other month we receive a letter in the mail from the future. It's the damnedest thing. These letters are usually about 
              something specific to the early 21st century that's been extrapolated into the future (100 years or more), and they're always funny. 
              They're never over 1000 words, and we pay 1¢ per word for them. 
            </p>
            <hr />
            <h1 className="pt-1 pb-1">
            Kickstarter
            </h1>
            <p className="pb-1">
              There's so much great fiction in languages we can't read, and we'd like to change that. So if you have a translation of a story that has never appeared in English, 
              we welcome it as a submission. We pay 1¢ per word for translations. Please see the fiction guidelines for what kinds of stories we might be interested in.
            </p>
            <hr className="mb-2" />

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
  }
`;

export default Subscribe;
