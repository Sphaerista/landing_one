document.querySelector(".faq-accordion").addEventListener("click", (event) => {
  if (event.target.closest(".faq-accordion__item")) {
    event.target
      .closest(".faq-accordion__item")
      .classList.toggle("faq-accordion__item--active");
    itemContent = event.target.closest(".faq-accordion__item").children[1];
  }
  let i = 0;
  itemContent.style.opacity = i;
  const opacity = setInterval(() => {
    i = i + 0.1;
    itemContent.style.opacity = i;
    if (i >= 1) {
      console.log("asd");
      clearInterval(opacity);
    }
  }, 50);
});

document.querySelector(".btn-burger").addEventListener("click", (event) => {
  document
    .querySelector(".section-header")
    .classList.toggle("section-header--active-nav");
});

window.addEventListener("resize", resetNav);

function resetNav() {
  document
    .querySelector(".section-header")
    .classList.remove("section-header--active-nav");
}

// --Swiper Hero-- //
new Swiper(".section-hero-image", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// -- / Swiper Hero-- //

// --  Swiper Blog-- //
new Swiper(".slider-blog-container", {
  // loop: true,
  pagination: {
    el: ".section-blog .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// -- / Swiper Blog-- //

// -- Quotes Quotes-- //
new Swiper(".slider-quotes-container", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  //   // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// -- / Quotes Quotes-- //
