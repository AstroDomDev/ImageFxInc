$(document).ready(function() {
    var slideIndex = 0;
    $('.prev').click(function() {
        plusSlides(-1);
    });
    $('.next').click(function() {
        plusSlides(1);
    });
    $('.preview').click(function() {
        var index = $(this).index();
        showSlides(index+1);
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slideshow");
        var previews = document.getElementsByClassName("preview");
        slideIndex = n;
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            if (previews[i].classList.contains("active")) {
                previews[i].classList.remove("active");
            }
        }
        console.log("Show slide: " + slideIndex);
        slides[slideIndex-1].style.display = "block";
        if (!previews[slideIndex-1].classList.contains("active")) {
            previews[slideIndex-1].classList.add("active");
        }
    }
    showSlides(slideIndex);

});
    