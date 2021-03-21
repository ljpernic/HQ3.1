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
          <div className="row">
            <div className="grid-container pt-1">

<div className="wide2">
                <div className="col-12">
                  <div className="logo">
                    <Link to="/">
                      <img alt="Haven Spec logo" src={logo} />
                    </Link>
                  </div>
                </div>
</div>

<div className="thin">
                <div className="social-media-header">
                  <a href="https://twitter.com/HavenSpec">
                    <IconContext.Provider value={{ className:"social-media-header", color: "#414156", size: "1.8em", verticalAlign: "middle", title:"social media icons"}}>
                    <div>
                      <FaTwitter />
                    </div>
                    </IconContext.Provider>
                  </a>
                  <a href="https://facebook.com/HavenSpec">  
                    <IconContext.Provider value={{className: "social-media-header", color: "#414156", size: "1.8em", verticalAlign: "middle", title:"social media icons"}}>
                    <div>
                      <FaFacebook />
                    </div>
                    </IconContext.Provider>
                  </a>
                  <a href="https://HavenSpec.com/newsletter">  
                    <IconContext.Provider value={{className: "social-media-header", color: "#414156", size: "1.8em", verticalAlign: "middle", title:"social media icons"}}>
                    <div>
                      <FaEnvelope />
                    </div>
                    </IconContext.Provider>
                  </a>
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
