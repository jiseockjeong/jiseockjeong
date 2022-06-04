$(".home nav ul li:nth-child(2)").click(function () {
    $("section").stop().fadeOut();
    $(".works").fadeIn();
    $(".navi").text("1");
    $(".navi2").text("/4");
});

$(".home nav ul li:nth-child(3)").click(function () {
    $("section").stop().fadeOut();
    $(".me").fadeIn();
    $(".navi").text("1");
    $(".navi2").text("/2");
});
//홈

$(".works nav ul li:nth-child(1)").click(function () {
    $("section").stop().fadeOut();
    $(".home").fadeIn();
    $(".navi").text("1");
    $(".navi2").text("/2");
});

$(".works nav ul li:nth-child(3)").click(function () {
    $("section").stop().fadeOut();
    $(".me").fadeIn();
    $(".navi").text("1");
    $(".navi2").text("/2");
});

//작업

$(".me nav ul li:nth-child(1)").click(function () {
    $("section").stop().fadeOut();
    $(".home").fadeIn();
    $(".navi").text("1");
    $(".navi2").text("/2");
});

$(".me nav ul li:nth-child(2)").click(function () {
    $("section").stop().fadeOut();
    $(".works").fadeIn();
    $(".navi").text("1");
    $(".navi2").text("/4");
});

//정보

$(".info-ani ul li:nth-child(1)").hover(function () {
    $(this).text("정지석")
}, function () {
    $(this).text("이름?")
});

$(".info-ani ul li:nth-child(2)").hover(function () {
    $(this).text("1998.01.23")
}, function () {
    $(this).text("생년월일?")
});

$(".info-ani ul li:nth-child(3)").hover(function () {
    $(this).text("경기도 부천")
}, function () {
    $(this).text("거주지?")
});

$(".info-ani ul li:nth-child(4)").hover(function () {
    $(this).text("ENFP")
}, function () {
    $(this).text("MBTI?")
});