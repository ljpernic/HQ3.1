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
    const imgArray = [advert01, advert02, advert03];
    setShuffledArray(shuffle(imgArray));
  }, []);

  return (
    <div>
      {shuffledArray.map((ad, index) => (
        <div key={index}>
          <Link to="/subscribe">
            <img className='advertisement' alt="Haven Spec advertisement" src={ad} loading="lazy" />
          </Link>
          <h6>ADVERT</h6>
        </div>
      ))}
    </div>
  );
};

export default Advertisement;
