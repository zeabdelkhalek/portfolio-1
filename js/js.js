/* -------------------------------loading ------------------------------*/

function loading(){
    setTimeout(suiteload, 300);   
}

function suiteload() { 
    var v = document.querySelector('.loader') ; 
    v.style.opacity= 1 ; 
    setTimeout(suiteload1, 4000);   
  
}
function suiteload1(){
    $("#loader-bg").fadeToggle(1000); 
}


//-----------------------------------------------------------------------------
/*
(function() {
  
    var $curve = document.getElementById("curve");
  
   
    // Handle the functionality
    function scrollEvent(scrollPos) {
      if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
        curveValue = defaultCurveValue -  parseFloat(scrollPos / curveRate);
        $curve.setAttribute(
          "d",
          "M 0 350 Q 500" + curveValue + " 800 100 L 800 0 L 0 0 L 0 300"
        );
      }
    }
   
   
*/

/********************************************js de button header -------------------------------------- */
function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

// Remove click on button for demo purpose
Array.prototype.slice.call(document.querySelectorAll('.button'), 0).forEach(function(bt) {
  bt.addEventListener('click', function(e) {
    e.preventDefault();
  });
});


initBt3();



function initBt3() {
  var bt = document.querySelectorAll('#component-3')[0];
  var particleCount = 6;
  var particles;
  var clicked = false;
  var filter = document.querySelector('#filter-goo-3 feGaussianBlur');

  bt.addEventListener('mouseenter', function() {
    particles = [];

    TweenLite.to(bt.querySelectorAll('.button__bg'), 1.5, { scaleX: 1.05, ease: Expo.easeOut, delay: 0.2 });

    for (var i = 0; i < particleCount; i++) {
      particles.push(document.createElement('span'));
      bt.appendChild(particles[i]);

      particles[i].classList.add(i % 2 ? 'left' : 'right');
      
      var dir = i % 2 ? '-' : '+';
      var tl = new TimelineLite();

      tl.to(particles[i], 2, { x: dir + 18, scaleX: 1.4, ease: Expo.easeOut });
    }

    TweenLite.to(filter, 1.5, { onUpdate: function() { filter.setAttribute('x', 0); }});
  });

  bt.addEventListener('mouseleave', function() {
    if (clicked) return;

    TweenLite.to(bt.querySelectorAll('.button__bg'), 0.9, { scale: 1, ease: Power3.easeOut, overwrite: 'all' });

    for (var i = 0; i < particles.length; i++) {
      particles[i].classList.add(i % 2 ? 'left' : 'right');

      TweenLite.to(particles[i], 0.6, { x: 0, scaleX: 1, ease: Power3.easeOut, onComplete: function() {
        this.target.parentNode.removeChild(this.target);
      } });
    }

    TweenLite.to(filter, 1.5, { onUpdate: function() { filter.setAttribute('x', 0); }});
  });

  bt.addEventListener('click', function() {
    clicked = true;

    TweenLite.to(bt.querySelectorAll('.button__bg'), 0.9, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4), delay: 0.1, 
      onComplete: function(){
        clicked = false;
      },
      onOverwrite: function(){
        clicked = false;
      } 
    }, 0.6);

    for (var i = 0; i < particleCount; i++) {
      var dir = i % 2 ? '-' : '+';
      var size = i < 2 ? 1 : getRandom(0.2, 0.6);
      var r = i % 2 ? getRandom(-1, 1)*i/2 : getRandom(-1, 1)*i;

      TweenLite.set(particles[i], { scale: size });
      TweenLite.to(particles[i], 0.1, { scale: size, x: dir +'=25' });
      TweenLite.to(particles[i], 0.6, { x: dir + 60, y: r*10, scale: 0, opacity: 0, ease: Power3.easeOut });
    }
  });
}




/*------------------------------------------------------------------------------------------*/

$(function () {
  $(document).scroll(function () {
    var $btn = $(".FloatBtn");
    $btn.toggleClass('scrolled', $(this).scrollTop() > 600) ;
  });
});



$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".navbar-expand-md").css("background" , "var(--main-color)");
    }
    
	  else{
		  $(".navbar-expand-md").css("background" , "transparent");  	
	  }
  })
})

/**************************************************************************************** */
function myFunction(id) {
  var btnText = document.getElementById(id);
  var dots = document.getElementById("dots"+id);
  var moreText = document.getElementById("more"+id);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<i class='fas fa-angle-right'></i>Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


/*************************************************** */
function display (id)  {
  var elem = document.getElementById(id);
  
  if (elem.style.display === "none") {
    elem.style.display = "inline";
 
  } else {
    elem.style.display = "none";

  }

}