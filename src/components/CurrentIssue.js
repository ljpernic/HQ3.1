import React from 'react';

import currentCover from '../images/CurrentCover.jpg';

import allIssueData from "../data/issue.yaml" 

const currentIssue = allIssueData[0].issueUrl

//const currentIssue = `https://ko-fi.com/s/e87fa3a5fb`;

//////// CREATES COMPONENT THAT RETURNS THE COLUMN CONTAINING THE CURRENT ISSUE AND SQUARE ADVERTS ////////

class CurrentIssue extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default CurrentIssue;
