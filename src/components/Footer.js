import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Footer = ({ data }) => {
  const { title } = data.site.siteMetadata;

  return (
    <div className="footer-strip">
      <div className="container">
        <div>
          <div>
            <div className="footer">
              <Link className="footer-title" to="/">
                <h3>{title}</h3>
              </Link>
              
              <IconContext.Provider value={{ className: "social-media", color: "gray", size: "2em", verticalAlign: "middle", title: "social media icons" }}>
                <div className="social-media">
                  <a href="https://twitter.com/HavenSpec" aria-label="Haven Spec on Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://facebook.com/HavenSpec" aria-label="Haven Spec on Facebook">  
                    <FaFacebook />
                  </a>
                  <Link to="/newsletter" aria-label="Haven Spec Newsletter">  
                    <FaEnvelope />
                  </Link>
                </div>
              </IconContext.Provider>

              <ul className="footer-menu">
                <li className="copyright">
                  © {new Date().getFullYear()} {title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
