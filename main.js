const navBtn = document.querySelector(".bars");
const ul = document.querySelector("header .container nav ul");
const navLinks = document.querySelectorAll("nav ul li a");
const slider = document.querySelectorAll(".slider div");
const filter = document.querySelectorAll(".filter li");
const boxes = document.querySelectorAll(".portfolio .boxes-container .box");
const showSearchOverlay = document.querySelector("header .container nav form");
const unshowSearchOverlay = document.querySelector(".search-overlay button");
const searchOverlay = document.querySelector(".search-overlay");

// show nav links when click on bar hamburger
navBtn.addEventListener("click", () => {
  ul.classList.toggle("nav-show");
});

// make the link special when click it
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    let previosActiveLink = document.querySelector("nav ul li a.active");
    link.classList.add("active");
    if (previosActiveLink) {
      previosActiveLink.classList.remove("active");
    }
  })
);

// shuffle slider
slider.forEach((bullet) =>
  bullet.addEventListener("click", () => {
    let previosActiveBullet = document.querySelector(".slider .active-bullet");
    bullet.classList.add("active-bullet");
    if (previosActiveBullet) {
      previosActiveBullet.classList.remove("active-bullet");
    }
  })
);

// shuffle boxes
filter.forEach((btn) =>
  btn.addEventListener("click", () => {
    let btnCategory = btn.dataset.category;
    let previosActivefilter = document.querySelector(".filter .active-filter");
    btn.classList.add("active-filter");
    if (previosActivefilter) {
      previosActivefilter.classList.remove("active-filter");
    }
    if (btnCategory != "all") {
      for (let i = 0; i < boxes.length; i++) {
        let boxCategory = boxes[i].dataset.category;
        if (boxCategory === btnCategory) {
          boxes[i].classList.add("show");
        }
      }
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].dataset.category != btnCategory) {
          boxes[i].classList.remove("show");
        }
      }
    } else {
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add("show");
      }
    }
  })
);

showSearchOverlay.addEventListener("click", () => {
  searchOverlay.classList.remove("close");
});

unshowSearchOverlay.addEventListener("click", () => {
  searchOverlay.classList.add("close");
});
