import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Image from "gatsby-image";
import Helmet from 'react-helmet';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Submit = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;
  const submit = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  const data = props.data;
  
  console.log(data)

  return (
    <Layout bodyClass="page-home">
      <SEO title="Submit" />
      <Helmet>
        <meta
          name="description"
          content="Submit page of Haven Spec"
        />
      </Helmet>

      <div className="intro pb-0">
        <div className="container">
          <div className="row2 justify-content-start">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <h4 className="pb-1">SUBMIT</h4>
                  <hr />
                </div>
                                                                                      {/*this is where the blog stuff should go for stories getting posted*/}
          <div className="container">
            <h1>
              Guidelines for Fiction:
            </h1>
            <p>
              We are currently <strong>closed</strong> to submissions, but we hope to open soon! Follow us on social media 
              if you want to know just when. (Or do what we do with other magazines and obsessively check the submission page! It's all gravy!)
            </p>
            <p>
              We are seeking stories in the English language up to 6,000 words that have not been published before (including on your own website). We welcome stories from
              writers from around the world, and we're particularly interested in publishing stories from people displaced by and threatened by the climate emergency 
              (although this is not a requisite; we recognize that the former category is relatively specific and the latter is relatively broad). We pay 1¢ per word 
              for fiction. Please query for reprints.
            </p>
            <p>
              We like stories that are subtle in their telling but stick with us long after we've finished. We're more likely to buy stories that balance a sense
              of wonder with a bold plot. Meditative stories that all take place in a single room, for example, aren't likely to capture our imagination. We're especially 
              interested in stories that reflect the reality of the climate crisis and themes of displacement, but again, with subtlety. This topic is broader than you 
              might think.
            </p>
            <p>
               Basically, we want it all: characters, premise, dialogue, tone, plot, a strong opening and ending. The second half of the story might be amazing, but if 
               the opening doesn't dig its hooks into us and drag us screaming forward, it's unlikely we'll ever get to the good stuff. Same thing with the ending: 
               there's nothing more disappointing in a story than a strong opening, a great premise, and then a scooby doo ending. 
            </p>
            <p>
              Simultaneous submissions are fine, but please no multiple submissions. Also, please wait at least a week before you submit again after hearing from us about 
              a story. This is honestly more for the writer's benefit: it gives us a chance to clense our palate a little (if there was something we felt didn't work for 
              us in your last story, you don't want us to carry that feeling over to the next one!). As writers ourselves, we do our best to handle each story we receive 
              with the care and attention it deserves. Every submission is an act of bravery, we know that putting yourself out there as a writer to be judged can be tough. 
              Just know that any story we receive, unless they contain threats of violence (explicit or implicit), will be kept in confidence.
            </p>
            <p>
                When in doubt, don't self reject! Submit submit submit! 
            </p>
            <h1>
              Guidelines for Non-Fiction:
            </h1>
            <p>
              We like articles on politics and pop culture, articles steeped in science and otherwise verging on the academic, and articles with funny or interesting takes we 
              might not have expected. We pay ?¢ per word for 
              non-fictionm and again, please nothing over 4,500 words.
            </p>
            <h1>
            Guidelines for Letters from the Future:
            </h1>
            <p>
              We're not quite sure how, but once a quarter we receive a letter in the mail from the 22nd century.  
            </p>
            <h1>Guidelines for Translations:
            </h1>
            <p>
              ...
            </p>
            <h1>
              Guidelines for Art:
            </h1>
            <p>
              We like...
            </p>
            <h1>
              Guidelines For How Not to be a Terrible Person:
            </h1>
            <p>
              Guidelines for how not to be a terrible person
            </p>
            <h1>
              Rejectomancy:
            </h1>
            <p>
              We think feedback is important, and while we can't give specific notes on every story we get, we try to structure our rejection letters so you have 
              some idea what we were thinking when we declined a story. 
            </p>
            <p>
              The first tier should say something like, "We felt that the *blank* was off in the first few pages." ...
            </p>
            <p>
              The second tier should be something like, "We liked this story overall, but..." and then give something more specific (usually the place where the 
              story fell apart for us).
            </p>
            <p>
              The third tier doesn't have a specific format because it's more tailored, and it's generally a request for edits on the way to an acceptance (!!).
            </p>
            <p>
              (There's a secret fourth tier reserved for racist diatribes, screeds of various kinds, and envelopes filled with smallpox pustules. Luckily these 
              are rare.)
            </p>

{/*}            {posts
              .filter(post => post.node.frontmatter.category === "submit")
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
   {/*} <div className="postbody">
      <div className="container pb-5 pt-md-7 pb-md-7">
        <div className="row2 justify-content-start">
          <div className="col-12">
          <Link to="/">
                <h3>Latest Issues</h3>
            </Link>
            <hr />
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-cover">
                    <Link to="/">               
                      <img src={withPrefix(edge.node.image)} />
                    </Link>
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>*/}
    </Layout>
  );
};

export const query = graphql`
  query SubmitQuery {
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
      filter: { fileAbsolutePath: { regex: "/" } }             #This tells the /submit page to look at md files in the src folder
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

export default Submit;

