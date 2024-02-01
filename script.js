// active humberg
let menuIcon = document.querySelector(".menu-icon");
let navlist= document.querySelector(".navlist");
menuIcon.addEventListener("click",()=>{
    // menu-Icon
    menuIcon.classList.toggle("active");
    // open and close  menu-icon
    navlist.classList.toggle("active");
    document.body.classList.toggle("open")

});
//remove open and close navbar
navlist.addEventListener("click",()=>{
    menuIcon.classList.remove("active");
    navlist.classList.remove("active");
    document.body.classList.remove("open")

});


// slider 
let currentSlide = 0;
showSlide(currentSlide);

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');

  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');

  // Display the current slide
  slides[currentSlide].style.display = 'block';
}

// Automatic slide change every 3 seconds (adjust as needed)
setInterval(function() {
  changeSlide(1);
}, 3000);

