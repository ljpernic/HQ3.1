import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const Menu = ({ data }) => {
  const { menuLinks } = data.site.siteMetadata;
  
  if (!menuLinks) {
    return null;
  }

  return (
    <nav id="main-menu" className="main-menu menuPlacement">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MenuWithQuery = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);

export default MenuWithQuery;
