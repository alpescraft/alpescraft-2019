    window.addEventListener('scroll', scrollFunction);

    function scrollFunction() {
        setTimeout(function() {
            const distanceY = window.pageYOffset || $(document).scrollTop();

            if (distanceY > 55) {
                document.getElementById("top-button").style.display = "block";
                $('nav').addClass('shrink');
            } else {
                document.getElementById("top-button").style.display = "none";
                $('nav').removeClass('shrink');
            }
        }, 1000);
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
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