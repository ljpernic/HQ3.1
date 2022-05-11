//DEFUNCT FILE. KEPT SO THAT I REMEMBER TO ADD A SHARE FUNCTION

import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import styled from "styled-components";

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

//import { ShareButtonOutline, ShareBlockStandard } from "react-custom-share";

const CustomReactShare = props => {
  const { url, title, excerpt, author } = props;


  const shareBlockProps = {
    url: url,
//    button: ShareButtonOutline,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
    ],
    text: title,
    longtext: excerpt,
  };

  return;
};

CustomReactShare.PropTypes = {
  filler: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  author: PropTypes.string,
};

CustomReactShare.defaultProps = {
  filler: "Check out ",
  url: "https://havenspec.com/",
  title: "title not found",
  excerpt: "",
  author: ""
};

export default CustomReactShare;