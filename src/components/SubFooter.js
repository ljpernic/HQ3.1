import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                <strong>About: </strong>
                  <a href={"/about"}>
                    Our Mission
                  </a>
              </li>
              <li>
                <strong>Support: </strong>
                  <a href={"/support"}>
                    Good Fiction
                  </a>            
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.HavenQuarterly.com">www.HavenQuarterly.com</a>
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
            submit {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <SubFooter data={data} />}
  />
);
