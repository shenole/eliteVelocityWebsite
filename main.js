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
