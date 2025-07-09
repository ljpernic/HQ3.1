import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import SEO_image from '../images/SEO_image.jpg';
import paragraphs from "lines-to-paragraphs";
import Layout from '../layouts/index';
import Helmet from 'react-helmet';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Advertisement from '../components/advertisement';
import CurrentIssue from '../components/CurrentIssue';
import Pagination from '../components/Pagination';

import { IconContext } from "react-icons";
import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';

export default class archiveAuthor extends React.Component {
  render() {
    const posts = this.props.data.allAuthorYaml.edges;
    const { authorCurrentPage, authorPagination } = this.props.pageContext;

    return (
      <Layout bodyClass="page-home">
        <SEO title="Haven Spec Magazine, Contributors" image={SEO_image} alt="Haven Spec Magazine, Contributors Page Image" />
        <Helmet>
          <meta
            name="Haven Spec Magazine, Contributors"
            content="Haven Spec Magazine, Contributors"
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
                    <h4>CONTRIBUTORS</h4>
                  </div>

                <div className='bio-bottom-margin' style={{paddingBottom:'0px', borderBottom:'none'}}>
                {posts.map(({ node: { id, idpath, bio, twitter, facebook, url, picture } }) => (
                  <div key={id} className="content-div-dynamic">
                    <div className="editorImageAbout">
                      <GatsbyImage
                        image={getImage(picture)}
                        alt="Author Image"
                      />
                      <div className="side-block">
                      {twitter && <a className='social-icon' href={`https://www.twitter.com/${twitter}`}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaTwitter /></IconContext.Provider></a>}
                          {facebook && <a className='social-icon' href={`https://www.facebook.com/${facebook}`}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaFacebook /></IconContext.Provider></a>}
                          {url && <a className='social-icon' href={url}><IconContext.Provider value={{ className:"", color: "", size: ".7em", title:"social media icons"}}><FaLink /></IconContext.Provider></a>}
                      </div>
                    </div>
                    <h3 className='title-static'>
                        <Link to={idpath}>
                          {id}
                        </Link>
                      </h3>
                      <div>
                      <span dangerouslySetInnerHTML={{ __html: paragraphs(bio) }} />
                      </div>
                </div>
                ))}
              </div>

                  <Pagination
                    currentPage={authorCurrentPage}
                    totalPages={authorPagination}
                    basePath="/contributors"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const archiveAuthorQuery = graphql`
  query archiveAuthorQuery($skip: Int!, $limit: Int!) {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        gatsbyImageData(height: 80, placeholder: BLURRED, formats: [AUTO, WEBP])
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
              gatsbyImageData(
                width: 200
                height: 200
                placeholder: BLURRED
                layout: FIXED
              )
            }
          }
        }
      }
    }
  }
`;
