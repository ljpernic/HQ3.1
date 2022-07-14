import React from 'react';
import { Link } from 'gatsby';
import Image from "gatsby-image";

import currentCover from '../images/CurrentCover.jpg';
import advert01 from '../images/advertisement01.jpg';
import advert02 from '../images/advertisement02.jpg';
import advert03 from '../images/advertisement03.jpg';

const currentIssue = `https://ko-fi.com/s/c986b978d2`;


function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

var imgArray = [advert01, advert02, advert03];
var shuffledArray = shuffle(imgArray);

class Advertisement extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   menuActive: false,
    // };
  }
  // toggleMenu = menuActive => {
  //   this.setState(prevState => ({
  //     menuActive: !prevState.menuActive,
  //   }));
  // };

  render() {
    return (
      <div className="one">
        <div>
          <a href={currentIssue}>
            <img className='currentCover' alt="Haven Spec current issue" src={currentCover} />
          </a>
        </div>      
        <div>
          <a className="buybutton button-primary" href={currentIssue}>
            BUY CURRENT ISSUE
          </a>
        </div>
        <div>
          <Link to="/subscribe">
            <img className='advertisement' alt="Haven Spec advertisement" src={shuffledArray[0]} />
          </Link>
        </div>
          <h6>
            ADVERT
          </h6>
          <div>
          <Link to="/subscribe">
            <img className='advertisement' alt="Haven Spec advertisement" src={shuffledArray[1]} />
          </Link>
        </div>
          <h6>
            ADVERT
          </h6>
          <div>
          <Link to="/subscribe">
            <img className='advertisement' alt="Haven Spec advertisement" src={shuffledArray[2]} />
          </Link>
        </div>
          <h6>
            ADVERT
          </h6>
      </div>
    );
  }
}

export default Advertisement;
