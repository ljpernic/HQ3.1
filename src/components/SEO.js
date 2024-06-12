import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../static/favicon.png';

const SEO = ({ title, description, image }) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const siteTitle = data.site.siteMetadata.title;
      const metaTitle = title || siteTitle;
      const metaDescription = description || data.site.siteMetadata.description;
      const metaImage = image ? `${data.site.siteMetadata.siteUrl}${image}` : null;

      return (
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          title={metaTitle}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:title',
              content: metaTitle,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              property: 'twitter:title',
              content: metaTitle,
            },
            {
              property: 'twitter:description',
              content: metaDescription,
            },
            metaImage && {
              property: 'og:image',
              content: metaImage,
            },
            metaImage && {
              property: 'twitter:image',
              content: metaImage,
            },
          ].filter(Boolean)}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;