import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/logo.svg';                        /*Have to change to an SVG of Haven Quarterly */
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';
import Image from "gatsby-image";

import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';

import { IconContext } from "react-icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="grid-container pt-1">
              <div className="wide">
                <div className="col-12">
                  <div className="logo">
                    <Link to="/">
                      <img alt="Haven Spec logo" src={logo} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pt-2 thin">
                <div className="social-media2">
                  <a href="https://twitter.com/HavenSpec">
                    <IconContext.Provider value={{ className:"social-media2", color: "#414156", size: "2em", verticalAlign: "middle", title:"social media icons"}}>
                    <div>
                      <FaTwitter />
                    </div>
                    </IconContext.Provider>
                  </a>
                  <a href="https://facebook.com/HavenSpec">  
                    <IconContext.Provider value={{className: "social-media2", color: "#414156", size: "2em", verticalAlign: "middle", title:"social media icons"}}>
                    <div>
                      <FaFacebook />
                    </div>
                    </IconContext.Provider>
                  </a>
                  <a href="https://HavenSpec.com/newsletter">  
                    <IconContext.Provider value={{className: "social-media2", color: "#414156", size: "2em", verticalAlign: "middle", title:"social media icons"}}>
                    <div>
                      <FaEnvelope />
                    </div>
                    </IconContext.Provider>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-mobile">
          <Link to="/">
            <img alt="Haven Spec logo" src={logoMobile} />
          </Link>
        </div>

        <MenuMobile active={this.state.menuActive} />
        <Menu />
        <Hamburger toggleMenu={this.toggleMenu} />
      </div>

    );
  }
}

export default Header;
