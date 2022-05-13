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