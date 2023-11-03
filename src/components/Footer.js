import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import { IconContext } from "react-icons";

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div>
        <div>
          <div className="footer">

            <Link className="footer-title" to="/">
            <h3>{props.data.site.siteMetadata.title}</h3>
            </Link>
            
            <div className="social-media">
            <a href="https://twitter.com/HavenSpec">
              <IconContext.Provider value={{ className:"social-media", color: "gray", size: "2em", verticalAlign: "middle", title:"social media icons"}}>
                  <div>
                    <FaTwitter />
                  </div>
                </IconContext.Provider>
              </a>
              <a href="https://facebook.com/HavenSpec">  
                <IconContext.Provider value={{className: "social-media", color: "gray", size: "2em", verticalAlign: "middle", title:"social media icons"}}>
                  <div>
                    <FaFacebook />
                  </div>
                </IconContext.Provider>
              </a>
              <Link to="/newsletter">  
                <IconContext.Provider value={{className: "social-media", color: "gray", size: "2em", verticalAlign: "middle", title:"social media icons"}}>
                  <div>
                    <FaEnvelope />
                  </div>
                </IconContext.Provider>
              </Link>
              </div>
            <ul className="footer-menu">
              <li className="copyright">
                ©
{' '}
{new Date().getFullYear()}
{' '}
{props.data.site.siteMetadata.title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
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
