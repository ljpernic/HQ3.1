// components/AuthorDetails.js
import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { IconContext } from 'react-icons';
import { FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';
import paragraphs from 'lines-to-paragraphs';

const AuthorDetails = ({ authors }) => {
  return (
    <div>
      {authors.map(author => (
        <div key={author.id}>
          <div className="editorImageAbout">
            <Image fixed={author.picture.childImageSharp.fixed} />
            <div className="side-block">
              {author.twitter && (
                <a className='social-icon' href={`https://www.twitter.com/${author.twitter}`}>
                  <IconContext.Provider value={{ className: '', color: '', size: '.7em', title: 'social media icons' }}>
                    <FaTwitter />
                  </IconContext.Provider>
                </a>
              )}
              {author.facebook && (
                <a className='social-icon' href={`https://www.facebook.com/${author.facebook}`}>
                  <IconContext.Provider value={{ className: '', color: '', size: '.7em', title: 'social media icons' }}>
                    <FaFacebook />
                  </IconContext.Provider>
                </a>
              )}
              {author.url && (
                <a className='social-icon' href={author.url}>
                  <IconContext.Provider value={{ className: '', color: '', size: '.7em', title: 'social media icons' }}>
                    <FaLink />
                  </IconContext.Provider>
                </a>
              )}
            </div>
          </div>
          <h1 className='title-static-border'>
            <Link to={author.idpath}>{author.id}</Link>
          </h1>
          <span dangerouslySetInnerHTML={{ __html: paragraphs(author.bio) }} /><br />
          <span>
            {author.stories[0].storytitle && <h5 className='title-static-border'> Fiction by {author.id} </h5>}
            {author.stories.map((data, index) => data.storytitle && <li className='submitGuidelines' key={`content_storytitle_${index}`}>{data.storytitle}</li>)}<br />
            {author.poems[0].poemtitle && <h5 className='title-static-border'> Poetry by {author.id} </h5>}
            {author.poems.map((data, index) => data.poemtitle && <li className='submitGuidelines' key={`content_poemtitle_${index}`}>{data.poemtitle}</li>)}
          </span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AuthorDetails;
