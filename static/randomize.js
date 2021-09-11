var array = [data.advert01.childImageSharp.fixed, data.advert02.childImageSharp.fixed, data.advert03.childImageSharp.fixed];

function shuffle(array) {
var currentIndex = array.length;
var temporaryValue;
var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
var shuffled_images = shuffle(array);
for(var i=0;i<3;i++) {
document.getElementById('squareAdvert' + (i+1)).src = shuffled_images[i] ;
}