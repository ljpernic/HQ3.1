import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import advert01 from '../images/advertisement01.jpg';
import advert02 from '../images/advertisement02.jpg';
import advert03 from '../images/advertisement03.jpg';

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const Advertisement = () => {
  const [shuffledArray, setShuffledArray] = useState([]);

  useEffect(() => {
    const imgArray = [
      { src: advert01, href: "https://www.amazon.com/Mermaids-Wrath-Laughter-Sun-Book-ebook/dp/B0DMSRMCSW/" },
      { src: advert02, href: "https://www.saltheartpress.com/between-doorways" },
      { src: advert03, href: "/subscribe" } // internal page
    ];
    setShuffledArray(shuffle(imgArray));
  }, []);

  const renderAdLink = (ad) => {
    const isInternal = ad.href.startsWith('/');
    if (isInternal) {
      return (
        <Link to={ad.href}>
          <img
            className="advertisement"
            alt="Haven Spec advertisement"
            src={ad.src}
            loading="lazy"
          />
        </Link>
      );
    }
    return (
      <a href={ad.href} target="_blank" rel="noopener noreferrer">
        <img
          className="advertisement"
          alt="Haven Spec advertisement"
          src={ad.src}
          loading="lazy"
        />
      </a>
    );
  };

  return (
    <div>
      {shuffledArray.map((ad, index) => (
        <div key={index}>
          {renderAdLink(ad)}
          <h6 className="title-static-no-border">ADVERT</h6>
        </div>
      ))}
    </div>
  );
};

export default Advertisement;
