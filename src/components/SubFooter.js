import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li className="liLeft">
                <Link to="/about">
                <strong>About </strong>
                </Link>
              </li>
              <li className="liLeft">
                <Link to={"/subscribe"}>
                  <strong>Subscribe </strong>
                </Link>            
              </li>
              <li className="liLeft">
                <Link to={"/submit"}>
                <strong>Submit </strong>
              </Link>            

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
