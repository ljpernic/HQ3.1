import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import styled from "styled-components";
import { css } from "emotion";

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

import { ShareButtonOutline, ShareBlockStandard } from "react-custom-share";

const CustomReactShare = props => {
  const { url, title, excerpt } = props;

  const customStyles = css`
    border-radius: 50% 0 50% 0;
    margin: 0 10px;
    flex-basis: 60px;
    height: 60px;
    flex-grow: 0;
  `;

  const shareBlockProps = {
    url: url,
    button: ShareButtonOutline,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
    ],
    text: title,
    longtext: excerpt,
    buttonCustomClassName: customStyles
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

CustomReactShare.PropTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string
};

CustomReactShare.defaultProps = {
  url: "https://havenspec.com/",
  title: "title not found",
  excerpt: ""
};

export default CustomReactShare;