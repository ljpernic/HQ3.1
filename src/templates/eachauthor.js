import React from 'react';  
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';

import { IconContext } from "react-icons";
import { FaTwitter } from 'react-icons/fa';

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

const Eachauthor = props => {
  const { pageContext } = props;
  const data = props.data;
  const { idname, bio, twitter, picture, stories, poems } = pageContext;
  
  const twitterLink = `http://twitter.com/${twitter}`;
  const currentIssue = `https://ko-fi.com/havenspec/shop`;
  
  var imgArray = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];
  var shuffledArray = shuffle(imgArray);
  
  return (
    <Layout bodyClass="page-home">
      <SEO title="Fiction" />
      <Helmet>
        <script src={withPrefix('hide_script.js')} type="text/javascript" />
        <meta
          name={idname}
          content="Author published by Haven Spec!"
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
                  <Link className="buybutton button-primary" to={currentIssue}>
                    BUY CURRENT ISSUE
                  </Link>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2 mt-6"
                      fixed={shuffledArray[0]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>
                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[1]}      /*This pulls the image from the md file with featured: true (current cover)*/
                    />
                  </Link>
                  <h6>
                    ADVERT
                  </h6>
                </div>

                <div>
                  <Link to="">
                    <Image className="advert mb-2"
                      fixed={shuffledArray[2]}      /*This pulls the image from the md file with featured: true (current cover)*/
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
                    AUTHOR
                  </h4>
                  <hr />
                </div>

                  <div className="editorImageAbout mt-3">
                    <Image
                      fixed={data.markdownRemark.frontmatter.author.picture.childImageSharp.fixed}
                    />
                          <a href={twitterLink}>
                            <IconContext.Provider value={{ className:"", color: "", size: ".7em", verticalAlign: "sub", title:"social media icons"}}>
                              <FaTwitter />
                            </IconContext.Provider>
                          </a>
                    </div>
                    
                  <h1 className="pt-1 pb-1">
                    {idname}
                  </h1>
                  <p className="pb-2">
                    {bio}
                  </p>
                  <h5 className="hideable">
                    Fiction by {idname}
                  </h5>
                  <p className="hideable pb-2">
                    {stories
                      .map((data, index) => {
                      return <Link key={`content_storytitle_${index}`} to={data.storylink}><li key={`content_storytitle_${index}`}>{data.storytitle}</li></Link>
                    })}
                  </p>
                  <h5 className="hideable pb-0">
                    Poetry by {idname}
                  </h5>
                  <p className="hideable">
                    {poems.map((data, index) => {
                      return <Link key={`content_poemtitle_${index}`} to={data.poemlink}><li key={`content_poemtitle_${index}`}>{data.poemtitle}</li></Link>
                    })}
                  </p>
                  <hr className="mb-2 mt-5"/>
                </div>
              </div>
              </div>
            </div>
          </div>

    </Layout>
  );
};

export const query = graphql`
  query($idname: String!) {
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
    markdownRemark(frontmatter: {author: {id: {eq: $idname}}}) {
      frontmatter {
        title
        path
        author {
          id
          bio
          twitter
          picture {
            childImageSharp {
              fixed(height: 200, width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFixed 
              }
              fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        issue {
          id
          idpath
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
        category
      }
      html
    }
  }
`;

export default Eachauthor;
