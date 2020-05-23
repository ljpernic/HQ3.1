import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-phone">
        <strong>About: </strong>
        <a href={"/about"}>
          Our Mission
        </a>
      </div>
      <div className="call-email">
        <strong>Support: </strong>
        <a href={"/support"}>
          Good Fiction
        </a>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a href="/contact" className="button">
          Submit
        </a>
      </div>
    )}
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
