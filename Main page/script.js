const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}
 
function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}

// RESPONSIVE MOBILE MENU
const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menuWrapper.style.transform = "translateX(0)";
  menu.style.transform = "translateX(0)";
};

const hideMenu = () => {
  close.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menuWrapper.style.transform = "translateX(-200%)";
  menu.style.transform = "translateX(200%)";
};

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);




// ************************Projects slider**************************
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); 

function Next (){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
},5000); 



// *****************Scripts testimonials***********************
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
let index = 0;
// console.log(slides);

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
display(index);

