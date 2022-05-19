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

window.addEventListener(
  "scroll",
  throttle(() => {
    const distanceY = window.pageYOffset || $(document).scrollTop();
    document.body.classList.toggle("scrolled", distanceY > 55);
  }),
  { passive: true }
);

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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

// bootstrap 4 responsive multi column slick carousel
$('#slick').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  draggable: false,
  pauseOnHover: true,
  infinite: true,
  dots: false,
  arrows: true,
  speed: 1000,
  variableWidth: false,

  mobileFirst: true,

  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [{
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: false
      }
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: false
      }
    },
    {
      breakpoint: breakpoint.lg,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: false
      }
    },
    {
      breakpoint: breakpoint.xl,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        variableWidth: false
      }
    }
  ]
});
