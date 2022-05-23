$(document).ready(function () {
    $("nav ul li").click(function () {
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
    });

    $("nav ul li:nth-child(1)").click(function () {
        $(".rp").css("display", "block");
        $(".full").css("display", "block");
        $(".int").css("display", "block");
        $(".bs").css("display", "block");
        $(".des").css("display", "block");
    });

    $("nav ul li:nth-child(2)").click(function () {
        $(".full").css("display", "none");
        $(".int").css("display", "none");
        $(".bs").css("display", "none");
        $(".des").css("display", "none");
        $(".rp").css("display", "block");
    });
    $("nav ul li:nth-child(3)").click(function () {
        $(".rp").css("display", "none");
        $(".int").css("display", "none");
        $(".bs").css("display", "none");
        $(".des").css("display", "none");
        $(".full").css("display", "block");
    });

    $("nav ul li:nth-child(4)").click(function () {
        $(".rp").css("display", "none");
        $(".full").css("display", "none");
        $(".bs").css("display", "none");
        $(".des").css("display", "none");
        $(".int").css("display", "block");
    });

    $("nav ul li:nth-child(5)").click(function () {
        $(".rp").css("display", "none");
        $(".full").css("display", "none");
        $(".int").css("display", "none");
        $(".des").css("display", "none");
        $(".bs").css("display", "block");
    });

    $("nav ul li:nth-child(6)").click(function () {
        $(".rp").css("display", "none");
        $(".full").css("display", "none");
        $(".int").css("display", "none");
        $(".bs").css("display", "none");
        $(".des").css("display", "block");
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $(".top").fadeIn("fast");
        } else {
            $(".top").fadeOut("fast");
        }

    });

    $(".top").click(function () {

        $("body,html").animate({
            scrollTop: 0
        }, 200)
    });
    
    var check = true;
    $(".dark").click(function () {

        if (check) {
            $(".dark-on").css("left", "20px");
            $(".dark").css("background", "#0d6efd");
            $(".menu").css("background", "#333");
            $(".menu").css("color", "#fff");
            $(".col-xl-4 .frame").css("background", "#333");
            $(".col-xl-4 .frame").css("color", "#fff");
            $("body").css("background", "#222");
            check = false;
        } else {

            $(".dark-on").css("left", "0px");
            $(".dark").css("background", "#222");
            $(".menu").css("background", "#F7F7FF");
            $(".menu").css("color", "#222");
            $(".col-xl-4 .frame").css("background", "#fff");
            $(".col-xl-4 .frame").css("color", "#333");
            $("body").css("background", "#fff");
            check = true;
        }

    });
});
