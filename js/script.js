$(document).ready(function(){
    //Slider
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
    });

    //Smooth Scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOfset = $(blockId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOfset
        }, 500);
    });

    //Collapse
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(this).toggleClass("active");
    });

    //Burger
    $("#navToggle").on("click", function (event) {

        event.preventDefault();

        $(this).toggleClass("active");
        $("nav").toggleClass("active");

    });
});