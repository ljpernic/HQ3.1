import React from 'react';
import currentCover from '../images/CurrentCover.jpg';
import allIssueData from '../data/issue.yaml';

const CurrentIssue = () => {
  const currentIssue = allIssueData[0].issueUrl;

  return (
    <div>
      <div>
        <a href={currentIssue} aria-label="Go to current issue">
          <img className="currentCover" alt="Haven Spec current issue cover" src={currentCover} />
        </a>
      </div>
      <div>
        <a className="buybutton button-primary" href={currentIssue} aria-label="Buy current issue">
          BUY CURRENT ISSUE
        </a>
      </div>
    </div>
  );
};

export default CurrentIssue;