//toggle menu
let btn = document.querySelector(".toggleBtn");
let list = document.querySelector(".mobile__menu__list");
btn.addEventListener("click", function myFunction() {
  btn.style.ro;
  if (list.style.maxHeight === "210px") return (list.style.maxHeight = "0px" ,list.style.padding = "0px");
  list.style.display = "flex";
  list.style.maxHeight = "210px";
  list.style.padding = "20px";
});

//closing menu on scroll down automatic
document.addEventListener("scroll", function (e) {
  scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    return (list.style.maxHeight = "0px",list.style.padding = "0px");
  }
});

//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  //   var dots = document.getElementsByClassName("slider-dots_item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  slides[slideIndex - 1].style.display = "block";
}
//   dots[slideIndex - 1].className += " active";
