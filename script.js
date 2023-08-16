

var carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel);
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var arlogo = document.getElementById('arlogo');
  if (window.scrollY > 0) {
    header.style.animation = 'shrinkheader 0.3s forwards';
    arlogo.style.animation = 'shrinkarlogo 0.3s forwards'

  } else {
    header.style.animation = 'expandheader 0.3s forwards';
    arlogo.style.animation = 'expandarlogo 0.3s forwards';
  }
});

var instasvg = document.getElementById("instasvg");



var aboutus = document.getElementById('aboutus');
var loc2apt = document.getElementById('loc2apt');
var scrensize = window.matchMedia("(max-width: 850px)").matches;
var aboutustext = document.getElementById('aboutustext');
var starbar = document.getElementById('starbar');
var abouttext = document.getElementById('abouttext');
var readmore = document.getElementById('readmore');

if (scrensize ) {
  loc2apt.style.animation = 'slideFromLeft 1.2s ease-out forwards';
  loc2apt.style.opacity = '1';
  aboutustext.style.transition = 'appear 2.5s ease-in forwards';
  aboutustext.style.opacity = '1';
  starbar.style.transition = 'appear 1s ease-out forwards';
  starbar.style.opacity = '1';
  loc2apt.addEventListener('animationend', function () {


    abouttext.style.animation = 'slideFromLeft 1s ease-out forwards';
    abouttext.style.opacity = '1';
  });

  readmore.style.animation = 'slideFromLeft 1s ease-out forwards';
  readmore.style.opacity = '1';

}

window.addEventListener('scroll', function () {

  var blines=document.getElementsByClassName("burgerl");
  var ddch=document.getElementsByClassName("ddch");
  for (var i = 0; i < 3; i++) {
    blines[i].style.backgroundColor="#002e48";
  }
  dropdownmenu.style.height='0'
  for (var i = 0; i < 7; i++) {
    ddch[i].style.opacity="0";
    ddch[i].style.display="none"
  }
 
   aboutus = document.getElementById('aboutus');
   loc2apt = document.getElementById('loc2apt');
   scrensize = window.matchMedia("(max-width: 850px)").matches;
   aboutustext = document.getElementById('aboutustext');
   starbar = document.getElementById('starbar');
   abouttext = document.getElementById('abouttext');
   readmore = document.getElementById('readmore');
 
  var loc2aptOffset = aboutus.offsetTop;
  var scrollPosition = window.scrollY + window.innerHeight;
  var triggerOffset = loc2aptOffset + (loc2apt.offsetHeight * .6);
  var caterpartyOffset = caterparty.offsetTop;
  var triggerOffset2 = caterpartyOffset + (caterparty.offsetHeight * .32);
  var triggerOffset3 = caterpartyOffset + (caterparty.offsetHeight * .75);

  var starbar3 = document.getElementById('sr3');
  var rose = document.getElementById('r2');
  var berry = document.getElementById('br1');
  var catr = document.getElementsByClassName("catering")
  var party = document.getElementsByClassName("party")

  
  
    
  if (scrollPosition > triggerOffset ) {
    loc2apt.style.animation = 'slideFromLeft 1.2s ease-out forwards';
    loc2apt.style.opacity = '1';
    aboutustext.style.transition = 'appear 2.5s ease-in forwards';
    aboutustext.style.opacity = '1';
    starbar.style.transition = 'appear 1s ease-out forwards';
    starbar.style.opacity = '1';
    loc2apt.addEventListener('animationend', function () {


      abouttext.style.animation = 'slideFromLeft 1s ease-out forwards';
      abouttext.style.opacity = '1';
    });

    readmore.style.animation = 'slideFromLeft 1s ease-out forwards';
    readmore.style.opacity = '1';

  }
  if (scrollPosition > triggerOffset2) {
    rose.style.animation = 'slideFromBottom 1s ease-out forwards';
    rose.style.opacity = "1";
    catr[0].style.transition = 'appear 3s ease-out forwards';
    catr[0].style.opacity = '1';
    catr[1].style.transition = 'appear 1s ease-out forwards';
    catr[1].style.opacity = '1';

    rose.addEventListener('animationend', function () {
      catr[2].style.animation = 'slideFromBottom 1s ease-out forwards';
      catr[3].style.animation = 'slideFromBottom 1.2s ease-out forwards';
      catr[4].style.animation = 'slideFromBottom 1.4s ease-out forwards';

      catr[2].style.opacity = '1';
      catr[3].style.opacity = '1';
      catr[4].style.opacity = '1';
    })
  }
  if (scrollPosition > triggerOffset3) {
    berry.style.animation = 'slideFromLeft2 1.2s ease-out forwards';
    berry.style.opacity = '1';
    starbar3.style.transition = 'appear 1s ease-out forwards';
    starbar3.style.opacity = '1';

    party[0].style.transition = 'appear 2s ease-out forwards';
    party[0].style.opacity = '1';
    party[1].style.transition = 'appear 1s ease-out forwards';
    party[1].style.opacity = '1';

    berry.addEventListener('animationend', function () {
      party[2].style.animation = 'slideFromBottom 1s ease-out forwards';
      party[3].style.animation = 'slideFromBottom 1.2s ease-out forwards';
      party[4].style.animation = 'slideFromBottom 1.4s ease-out forwards';

      party[2].style.opacity = '1';
      party[3].style.opacity = '1';
      party[4].style.opacity = '1';
    })
  }





});
var scrollPosition = window.scrollY + window.innerHeight;



window.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('mvideo');
  video.play();







  var burger=document.getElementById("burger");
  var clickCount=0;
  var blines=document.getElementsByClassName("burgerl");
  var ddch=document.getElementsByClassName("ddch");
  var dropdownmenu= document.getElementById("dropdownmenu");
  function handleClick() {
    
    clickCount++;
  
    
    

    if (clickCount % 2 != 0) {
      for (var i = 0; i < 3; i++) {
        blines[i].style.backgroundColor="#a31521";
      }
      dropdownmenu.style.height='30vh'
      for (var i = 0; i < 7; i++) {
        ddch[i].style.opacity="1";
      }
    }
    else {
      for (var i = 0; i < 3; i++) {
        blines[i].style.backgroundColor="#002e48";
      }
      dropdownmenu.style.height='0'
      for (var i = 0; i < 7; i++) {
        ddch[i].style.opacity="0";
      }
    }
  }
  
  burger.addEventListener('click', handleClick);


 














 
 






  var hdr = this.document.getElementsByClassName("hd");
  for (var i = 0; i < 8; i++) {
    hdr[i].style.transition = 'appear 1s ease-out forwards';
    hdr[i].style.opacity = '1';
  }
  var imagePopups = document.querySelectorAll('.image-popup');

 
  var popup = document.querySelector('.popup');
  var popupImage = document.getElementById('popup-image');
  var popupClose = document.querySelector('.popup-close');

 
  var prevButton = document.getElementById('prev-btn');
  var nextButton = document.getElementById('next-btn');

  
  var imageSources = Array.from(imagePopups).map((image) => image.src);

  var currentIndex = 0; 

  
  function updatePopupImage() {
    popupImage.src = imageSources[currentIndex];
  }

  
  imagePopups.forEach((imagePopup, index) => {
    imagePopup.addEventListener('click', () => {
      currentIndex = index;
      updatePopupImage();
      popup.style.display = 'flex';
    });
  });
  



  
  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  

  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    updatePopupImage();
  });

  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    updatePopupImage();
  });


  const screenwidth = window.matchMedia("(min-width: 850px)").matches;

  if (screenwidth) {
    console.log("yo");
    var invnav = document.getElementsByClassName("invnav");
    var prevbtn = document.getElementById("prev-btn");
    var nextbtn = document.getElementById("next-btn");

    [invnav[0], prevbtn].forEach(function (element) {
      element.addEventListener('mouseover', function () {

        prevbtn.style.opacity = '1';

      })

      element.addEventListener('mouseout', function () {
        prevbtn.style.opacity = '0';
      })

    })
    var arrey = [invnav[1], nextbtn];
    arrey.forEach(function (element2) {
      element2.addEventListener('mouseover', function () {
        nextbtn.style.opacity = '1';

      })

      element2.addEventListener('mouseout', function () {
        nextbtn.style.opacity = '0';

      })

    })
  }

});




function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) {
    result += mod;
  }
  return result;
}

function setUpCarousel(carousel) {
  let timerId = null;



  function handleIndicatorClick(event) {
    const targetSlide = parseInt(event.target.dataset.slide);
    changeSlide(targetSlide);
  }

  function handlePlayPause() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
      playPauseButton.querySelector('.fas').classList.remove('fa-pause');
      playPauseButton.querySelector('.fas').classList.add('fa-play');
    } else {
      timerId = setInterval(() => {
        currentSlide = modulo(currentSlide + 1, numSlides);
        changeSlide(currentSlide);
      }, 3000);
      playPauseButton.querySelector('.fas').classList.remove('fa-play');
      playPauseButton.querySelector('.fas').classList.add('fa-pause');
    }
  }

  function changeSlide(slideNumber) {
    carousel.style.setProperty('--current-slide', slideNumber);
    updateIndicators(slideNumber);
  }

  function updateIndicators(activeSlide) {
    indicators.forEach((indicator, index) => {
      if (index === activeSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  function handlePlayPause() {
    const playPauseIcon = playPauseButton.querySelector('.fas');
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
      playPauseIcon.classList.remove('fa-pause');
      playPauseIcon.classList.add('fa-play');
    } else {
      timerId = setInterval(() => {
        currentSlide = modulo(currentSlide + 1, numSlides);
        changeSlide(currentSlide);
      }, 3000);
      playPauseIcon.classList.remove('fa-play');
      playPauseIcon.classList.add('fa-pause');
    }
  }


  const playPauseButton = carousel.querySelector('[data-carousel-button-play]');
  const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
  const indicatorsContainer = carousel.querySelector('[data-carousel-indicators-container]');

  let currentSlide = 0;
  const numSlides = slidesContainer.children.length;
  const indicators = Array.from({ length: numSlides }, (_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    indicator.dataset.slide = index;
    indicator.addEventListener('click', handleIndicatorClick);
    indicatorsContainer.appendChild(indicator);
    return indicator;
  });


  playPauseButton.addEventListener('click', handlePlayPause);

  changeSlide(currentSlide);
  handlePlayPause();
}












function modulo2(number2, mod2) {
  let result2 = number2 % mod2;
  if (result2 < 0) {
    result2 += mod2;
  }
  return result2;
}

function setUpCarousel2(carouselr) {
  let timerId = null;

  function handleNext() {
    currentSlide = modulo2(currentSlide + 1, numSlides);
    changeSlide(currentSlide);
  }

  function handlePrevious() {
    currentSlide = modulo2(currentSlide - 1, numSlides);
    changeSlide(currentSlide);
  }

  function handleIndicatorClick(event) {
    const targetSlide = parseInt(event.target.dataset.slide);
    changeSlide(targetSlide);
  }

  function handlePlay() {
    if (timerId) {
      return; 
    }
    timerId = setInterval(() => {
      currentSlide = modulo2(currentSlide + 1, numSlides);
      changeSlide(currentSlide);
    }, 3000);
  }

  function handlePause() {
    if (!timerId) {
      return; 
    }
    clearInterval(timerId);
    timerId = null;
  }

  function changeSlide(slideNumber) {
    carouselr.style.setProperty('--current-slide', slideNumber);
    updateIndicators(slideNumber);
  }

  function updateIndicators(activeSlide) {
    indicators.forEach((indicator, index) => {
      if (index === activeSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  var buttonPrevious = carouselr.querySelector('[data-carousel-button-previous]');
  var buttonNext = carouselr.querySelector('[data-carousel-button-next]');
  var playButton = carouselr.querySelector('[data-carousel-button-play]');
  var pauseButton = carouselr.querySelector('[data-carousel-button-pause]');
  var slidesContainer = carouselr.querySelector('[data-carousel-slides-container]');
  var indicatorsContainer = carouselr.querySelector('[data-carousel-indicators-container]');
  var currentSlide = 0;
  var numSlides = slidesContainer.children.length;
  var indicators = Array.from({ length: numSlides }, (_, index) => {
    var indicator = document.createElement('div');
    indicator.classList.add('carousel-indicator');
    indicator.dataset.slide = index;
    indicator.addEventListener('click', handleIndicatorClick);
    indicatorsContainer.appendChild(indicator);
    return indicator;
  });

  buttonPrevious.addEventListener('click', handlePrevious);
  buttonNext.addEventListener('click', handleNext);
  playButton.addEventListener('click', handlePlay);
  pauseButton.addEventListener('click', handlePause);

  changeSlide(currentSlide);
  handlePlay();
}







function showintro() {
  var popup = document.getElementById("popupintro");
  popup.style.opacity = "1";
  

}


function closeintro() {
  var popup = document.getElementById("popupintro");
  popup.style.opacity = "0";
  popup.style.display = "none";
}

window.addEventListener('load', showintro);





var carouselsr = document.querySelectorAll('.review-carousel');
carouselsr.forEach(setUpCarousel2);










































 function initMap() {
  
  const latitude = 36.20761248370808;
  const longitude = -115.26815409999995;

  
  const map = L.map('map-container').setView([latitude, longitude], 16);

  
  const zoomControl = L.control.zoom({
    position: 'bottomright'
  });
  
  
  map.addControl(zoomControl);

  
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  map.boxZoom.disable();
  map.keyboard.disable();
  if (map.tap) map.tap.disable(); 

  L.marker([latitude, longitude]).addTo(map);
  
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  
  map.removeControl(map.zoomControl);

  
  const lowerRightZoomButton = document.querySelector('.leaflet-control-zoom-in');
  lowerRightZoomButton.addEventListener('click', function() {
    map.zoomIn();
  });
  const lowerLeftZoomButton = document.querySelector('.leaflet-control-zoom-out');
  lowerLeftZoomButton.addEventListener('click', function() {
    map.zoomOut();
  });
}


window.addEventListener('load', initMap);
