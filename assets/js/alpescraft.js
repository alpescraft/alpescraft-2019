window.onload = () => {
  setupNavbarToggle();
  updateNavbarStyleOnScroll();
};

function updateNavbarStyleOnScroll() {
  updateNavbarStyle();
  window.addEventListener("scroll", throttle(updateNavbarStyle), {
    passive: true,
  });
}

function updateNavbarStyle() {
  const distanceY = window.pageYOffset || $(document).scrollTop();
  document.body.classList.toggle("scrolled", distanceY > 55);
}

/**
 * Mix of throttle and debounce function :
 * execute the callback at most once every {delay}ms but also execute the last call.
 */
const throttle = (func, delay = 300) => {
  let waiting;

  return function (...args) {
    if (waiting) return;

    waiting = true;
    setTimeout(() => {
      func(args);
      waiting = false;
    }, delay);
  };
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/**
 * Collapse the mobile navbar when clicking on an item.
 * We do this programatically instead of using the data-toggle attribute
 * because it causes glitches on large screens.
 */
 function setupNavbarToggle() {
  document.querySelectorAll(".nav-item").forEach((l) => {
    l.addEventListener("click", () => {
      $("#navbarSupportedContent").collapse("hide");
    });
  });
}


// bootstrap 4 breakpoints
const breakpoint = {
  // small screen / phone
  sm: 576,
  // medium screen / tablet
  md: 768,
  // large screen / desktop
  // extra large screen / wide desktop
  xl: 1200
};

$('.carousel .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});