"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((button) => button.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/// Smooth Scroll & Learn more button

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y): ", window.pageXOffset, window.pageYOffset);

  console.log(
    "Height/Width viewport: ",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  //OLD WAY 1
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //OLD WAY 2
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  // MODERN WAY
  section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////////////////////////////////
///// Page Navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    console.log("LINK");
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/// Cookie message
const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "110%";

// console.log(getComputedStyle(message))

////////////////////////////////////////////////////////////////////////////////////
///////////////////////// EVENT PROPAGATION

// //rgb(255, 255, 255);
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target);

//   // e.stopPropagation Stops event from bubbling up to parent elements
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target);
// });

// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target);
// });
///////////////////////////////////
//// DOM Traversal

// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); //<-- useful gives us all direct elements inside parent
// h1.firstElementChild.style.color = "orangered";
// h1.lastElementChild.style.color = "orangered";

// // Going upwards: selecting parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // Going sideways: selecting siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// // [...h1.parentElement.children].forEach(function(el){
// //   if(el !== h1) el.style.transform = 'scale(0.5)';
// // });

/// ---------------------------------------- //
//////////////////////////////////////////////
//// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  //Remove active classes
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  // Activate tab
  clicked.classList.add("operations__tab--active");
  // Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//////////////////////////////////////////////////////////////////////
//////// Menu Fade Animation
const nav = document.querySelector(".nav");

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((element) => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
/// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////////////////////////////////////////////
///// Sticky Navigation
// const initalCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function(){
//   console.log(window.scrollY)

//   if (window.scrollY > initalCoords.top){
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }

// })
//////////////////////////////////////////////////////////////////////
///// Sticky Navigation: Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const obsOptions = {
//   root: null,
//   threshold:[0, 0.2], 
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const head = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries){
  const [entry] = entries;
  // console.log(entry);
  
  if (!entry.isIntersecting){
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }

}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, 
});
headerObserver.observe(head);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////// Reveal Sections using the intersection observer
const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer) {
  const [entry] = entries;
  console.log(entry);

  //Guard clause
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add('section--hidden');
});
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////// Lazy loading images - This is really great for performance

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////// Building a Slider Component

const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');

slides.forEach((slide, index) => slide.style.transform = `translateX(${100 * index})`)


