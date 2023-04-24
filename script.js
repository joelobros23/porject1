/*-- For ""BEST SELLERS TEXT"" Animation --*/
anime({
  targets: '.letters',
  translateY: -20,
  direction: 'alternate',
  loop: true,
  duration: 2000,
  easing: function(el, i, total) {
    return function(t) {
      return Math.pow(Math.sin(t * (i + 1)), total);
    }
  }
});

/*-- for Circle Grids Animation --*/
anime({
  loop:true,
  targets: '.circles-grid',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 200},
    {value: 1, easing: 'easeInOutQuad', duration: 900}
  ],
  delay: anime.stagger(100, {grid: [5, 5], from: 'center'})
});

anime({
  targets: '.dish',
  duration: 1000,
  loop: true,
  rotate: [
    { value: '+=90', duration: 1000, delay: 1000, },
    { value: '+=90', duration: 1000, delay: 1000, },
    { value: '+=90', duration: 1000,  delay: 1000, },
    { value: '+=90', duration: 1000,  delay: 1000, },
  ],
});

/* -- for Stroke text Animation -- - 
anime({
  targets: '.svg-burger',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

*/

$(document).ready(function(){
  $('.menu-button').click(function(){
      $('.slider').toggleClass('active');
  });

  $(document).click(function(event){
      var clickTarget = $(event.target);

      if(!clickTarget.closest('.side-menu').length && !clickTarget.closest('.menu-btn').length && $('.side-menu').hasClass('active')){
          $('.side-menu').removeClass('active');
      }
  });
});



const input = document.querySelector('form-control');

// Add a focus event listener to the input
input.addEventListener('focus', () => {
  // Animate the label using Anime.js
  anime({
    targets: label,
    translateY: -20,
    fontSize: 12,
    duration: 300,
    easing: 'easeInOutQuad'
  });
});





