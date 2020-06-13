import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/logo.svg';                        /*Have to change to an SVG of Haven Quarterly */
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';
import Image from "gatsby-image";

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
          <div className="logo">
            <Link to="/">
              <img alt="Haven Quarterly logo" src={logo} />
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="Haven Quarterly logo" src={logoMobile} />
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
