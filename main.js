////////// Navigation //////////
let openBtn = document.querySelector('#burger-nav');
let closeBtn = document.querySelector('#x-close');

//open navigation bar
openBtn.addEventListener('click', function() {
  document.querySelector('nav').classList.add('openNav');
})

//close navigation bar
closeBtn.addEventListener('click', function() {
  document.querySelector('nav').classList.remove('openNav');
})

////////// Slider One ////////
let i = 0; // starting point of slide shadow
let images = [];
let cell = document.querySelector('#slider-one');
let time = 3500; // interval between slides

////////// Images //////////
images[0] = 'url(images/slides/slide01.jpg)';
images[1] = 'url(images/slides/slide02.jpg)';
images[2] = 'url(images/slides/slide03.jpg)';
images[3] = 'url(images/slides/slide04.jpg)';
images[4] = 'url(images/slides/slide05.jpg)';

////////// Function to Change Images //////////
function chngImg() {
    cell.style.background = (images[i]);
    cell.style.backgroundRepeat = ('no-repeat');
    cell.style.backgroundPosition = ('center');
    cell.style.backgroundSize = ('cover');

    if(i < images.length - 1) {
      i++;
    } else {
      i = 0; // resets the slide show
    }

  setTimeout('chngImg()', time);
}

window.onload = chngImg();
