import React from 'react';  
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../components/SEO';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import Advertisement from '../components/advertisement';

import { IconContext } from "react-icons";
import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';

////////
export default class archiveAuthor extends React.Component {
  render() {
    const posts = this.props.data.allAuthorYaml.edges;
    const data = this.props.data;
    
    const uniqueArray = posts.filter((post, index) => {
      const _thing = JSON.stringify(post);
      return index === posts.findIndex(obj => {
        return JSON.stringify(obj) === _thing;
      });
    });

    const { authorCurrentPage, authorPagination } = this.props.pageContext
    const isFirst = authorCurrentPage === 1
    const isLast = authorCurrentPage === authorPagination
    const prevPage = authorCurrentPage - 1 === 1 ? "/contributors/" : `/contributors/${authorCurrentPage - 1}`
    const nextPage = `/contributors/${authorCurrentPage + 1}`

    return (
      <Layout bodyClass="page-home">
      <SEO title="Contributors" />
      <Helmet>
        <meta
          name="description"
          content="Every contributor to Haven Spec"
        />
      </Helmet>

      <div className="intro">                                                                {/*FEATURED*/}
        <div className="container">
          <div className="row2">
            <div className="grid-container">

              <Advertisement />

              <div>
                <div className="">
                  <h4>
                    CONTRIBUTORS
                  </h4>
                  <hr />
                  <div className="pt-2">
                  <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}
                      />
                    </Link>
                  </div>
                </div>

              {uniqueArray.map(({ node: post }) => (
                
                <div className="pt-1 pb-2">
                  <div className="editorImageAbout">
                    <Image
                      fixed={post.picture.childImageSharp.fixed}            /*Where the image in the post on the front page is called*/
                    />

{/*       We only want to show the HTML if the value isn't null.         */}
{/*       The problem: We can't see the value outside of the map.        */}

                    <div class="side-block">
                      {post.twitter === null ? null : <a className='social-icon' href={`https://www.twitter.com/${post.twitter}`}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>} 
                      {post.facebook === null ? null : <a className='social-icon' href={`https://www.facebook.com/${post.facebook}`}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>} 
                      {post.url === null ? null : <a className='social-icon' href={post.url}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>} 
                    </div>
                </div>
                  <h1 className="pt-1 pb-1">
                    <Link to={post.idpath}>
                      {post.id}
                    </Link>
                  </h1>
                  <span dangerouslySetInnerHTML={{ __html: paragraphs(post.bio) }} />
                  <hr className="mt-5" />
                </div>
              ))}

              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <p className="text-left">
                      {!isFirst && (
                        <Link to={prevPage} rel="prev">
                          ← Previous Page
                        </Link>
                      )}
                    </p>
                  </div>            
                  <div className="col-sm">
                    <p className="text-center">
                      {Array.from({ length: authorPagination }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/contributors/${i === 0 ? "" : i + 1}`}>
                          &nbsp;&nbsp;&nbsp;{i + 1}&nbsp;&nbsp;&nbsp;
                        </Link>
                      ))}
                    </p>
                  </div>
                  <div className="col-sm">
                    <p className="text-right">
                      {!isLast && (
                        <Link to={nextPage} rel="next">
                          Next Page →
                        </Link>
                      )}
                    </p>
                  </div>
                </div>         
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
    )
  }
}

export const archiveAuthorQuery = graphql`
  query archiveAuthorQuery($skip: Int!, $limit: Int!) {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allAuthorYaml(limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          id
              idpath
              bio
              twitter
              facebook
              url
              picture {
                  childImageSharp {
                    fixed(width: 200) {                                           #This changed the post picture sizes on the front page (originally 75)
                      ...GatsbyImageSharpFixed 
                    }
                    fluid(maxWidth: 150, maxHeight: 150) {                                        #This changed the post picture sizes on the front page (originally 75)
                   ...GatsbyImageSharpFluid
               }
            }
          }
        }
      }
    }
  }
`








