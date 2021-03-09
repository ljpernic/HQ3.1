import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../layouts/index';

import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';

import { IconContext } from "react-icons";

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">

            <Link to="/">
            <h3 className="footer-title">{props.data.site.siteMetadata.title}</h3>
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
              <a href="https://HavenSpec.com/newsletter">  
                <IconContext.Provider value={{className: "social-media", color: "gray", size: "2em", verticalAlign: "middle", title:"social media icons"}}>
                  <div>
                    <FaEnvelope />
                  </div>
                </IconContext.Provider>
              </a>
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
