$(document).ready(function () {

    $(function () {

        $("nav ul li").click(function () {
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
            slide = 0;
            $(".recommend .travel-area ul").animate({
                left: "0px"
            }, 400);
        });

        $("nav ul li:nth-child(1)").click(function () {
            $(".recommend .title-area ul").css("top", "0px");
            $(".event .title-area ul").css("top", "0px");
            $(".travel-list").css("display", "none");
            $(".travel-list1").css("display", "block");
        });

        $("nav ul li:nth-child(2)").click(function () {
            $(".recommend .title-area ul").css("top", "-50px");
            $(".event .title-area ul").css("top", "-50px");
            $(".travel-list").css("display", "none");
            $(".travel-list2").css("display", "block");
        });

        $("nav ul li:nth-child(3)").click(function () {
            $(".recommend .title-area ul").css("top", "-100px");
            $(".event .title-area ul").css("top", "-100px");
            $(".travel-list").css("display", "none");
            $(".travel-list3").css("display", "block");
        });

        $("nav ul li:nth-child(4)").click(function () {
            $(".recommend .title-area ul").css("top", "-150px");
            $(".event .title-area ul").css("top", "-150px");
            $(".travel-list").css("display", "none");
            $(".travel-list4").css("display", "block");
        });

        $("nav ul li:nth-child(5)").click(function () {
            $(".recommend .title-area ul").css("top", "-200px");
            $(".event .title-area ul").css("top", "-200px");
            $(".travel-list").css("display", "none");
            $(".travel-list5").css("display", "block");
        });
        var slide = 0;

        $(".recommend .travel-area .left-button").click(function () {
            if (slide > 0) {
                slide--;
            } else {
                slide = 2;
            }

            var move = slide * -1200 + "px";

            $(".recommend .travel-area ul").animate({
                left: move
            }, 400);
        });

        $(".recommend .travel-area .right-button").click(function () {
            if (slide < 2) {
                slide++;
            } else {
                slide = 0;
            }

            var move = slide * -1200 + "px";

            $(".recommend .travel-area ul").animate({
                left: move
            }, 400);
        });

    });

    $(function () {
        var slide2 = 0;

        $(".event .left-button").click(function () {
            if (slide2 > 0) {
                slide2--;
            } else {
                slide2 = 4;
            }

            var move2 = slide2 * -1200 + "px";

            $(".event .event-area .event-banner ul").animate({
                left: move2
            }, 400);

            if (slide2 == 0) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:first-child").css("background", "#4B7BE5");
            } else if (slide2 == 1) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:nth-child(2)").css("background", "#4B7BE5");

            } else if (slide2 == 2) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:nth-child(3)").css("background", "#4B7BE5");

            } else if (slide2 == 3) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:nth-child(4)").css("background", "#4B7BE5");

            } else if (slide2 == 4) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:nth-child(5)").css("background", "#4B7BE5");

            }
        });

        $(".event .right-button").click(function () {
            if (slide2 < 4) {
                slide2++;
            } else {
                slide2 = 0;
            }

            var move2 = slide2 * -1200 + "px";

            $(".event .event-area .event-banner ul").animate({
                left: move2
            }, 400);

            if (slide2 == 0) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:first-child").css("background", "#4B7BE5");
            } else if (slide2 == 1) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:nth-child(2)").css("background", "#4B7BE5");

            } else if (slide2 == 2) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:nth-child(3)").css("background", "#4B7BE5");

            } else if (slide2 == 3) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:nth-child(4)").css("background", "#4B7BE5");

            } else if (slide2 == 4) {
                $(".event .event-area .event-list2 ul li").css("background", "#ccc");
                $(".event .event-area .event-list2 ul li:nth-child(5)").css("background", "#4B7BE5");

            }
        });

    });


    //    --------------------------tour--------------------------

    $(function () {
        var up = 0;

        setInterval(function () {


            if (up < 4) {
                up++;
            } else {
                up = 0;
            }

            var up2 = up * -50 + "px";

            $(".tourlist .title-area ul").animate({
                top: up2
            });

            $(".keyword-inner .keyword ul li").css("fontWeight", "400")

            if (up == 0) {
                $(".tourlist .spot-list li:nth-child(1) img").attr("src", "./images/hawaii1.png");
                $(".tourlist .spot-list li:nth-child(2) img").attr("src", "./images/hawaii2.jpg");
                $(".tourlist .spot-list li:nth-child(3) img").attr("src", "./images/hawaii3.jpg");
                $(".tourlist .spot-list li:nth-child(1) img").attr("alt", "다이아몬드 헤드");
                $(".tourlist .spot-list li:nth-child(2) img").attr("alt", "와이키키 해변");
                $(".tourlist .spot-list li:nth-child(3) img").attr("alt", "이올라니 궁전");
                $(".tourlist .spot-list li:nth-child(1) strong").text("다이아몬드 헤드");
                $(".tourlist .spot-list li:nth-child(2) strong").text("와이키키 해변");
                $(".tourlist .spot-list li:nth-child(3) strong").text("이올라니 궁전");
                $(".tourlist .spot-list li:nth-child(1) .time p").text("06:00 ~ 16:30");
                $(".tourlist .spot-list li:nth-child(2) .time p").text("00:00 ~ 24:00");
                $(".tourlist .spot-list li:nth-child(3) .time p").text("09:00 ~ 16:00");
                $(".tourlist .spot-list li:nth-child(1) .review p").text("23,776건");
                $(".tourlist .spot-list li:nth-child(2) .review p").text("18,458건");
                $(".tourlist .spot-list li:nth-child(3) .review p").text("7,087건");
                $(".tourlist .background").css("background", "url(./images/hawaii.png)")
                $(".keyword-inner .keyword ul li:nth-child(1)").css("fontWeight", "600")
            } else if (up == 1) {
                $(".tourlist .spot-list li:nth-child(1) img").attr("src", "./images/paris1.jpg");
                $(".tourlist .spot-list li:nth-child(2) img").attr("src", "./images/paris2.jpg");
                $(".tourlist .spot-list li:nth-child(3) img").attr("src", "./images/paris3.jpg");
                $(".tourlist .spot-list li:nth-child(1) img").attr("alt", "에펠탑");
                $(".tourlist .spot-list li:nth-child(2) img").attr("alt", "루브르 박물관");
                $(".tourlist .spot-list li:nth-child(3) img").attr("alt", "노트르담 대성당");
                $(".tourlist .spot-list li:nth-child(1) strong").text("에펠탑");
                $(".tourlist .spot-list li:nth-child(2) strong").text("루브르 박물관");
                $(".tourlist .spot-list li:nth-child(3) strong").text("노트르담 대성당");
                $(".tourlist .spot-list li:nth-child(1) .time p").text("09:00 ~ 00:45");
                $(".tourlist .spot-list li:nth-child(2) .time p").text("09:00 ~ 18:00");
                $(".tourlist .spot-list li:nth-child(3) .time p").text("07:45 ~ 18:45");
                $(".tourlist .spot-list li:nth-child(1) .review p").text("140,323건");
                $(".tourlist .spot-list li:nth-child(2) .review p").text("99,994건");
                $(".tourlist .spot-list li:nth-child(3) .review p").text("71,340건");
                $(".tourlist .background").css("backgroundImage", "url(./images/paris.png)")
                $(".keyword-inner .keyword ul li:nth-child(2)").css("fontWeight", "600")
            } else if (up == 2) {
                $(".tourlist .spot-list li:nth-child(1) img").attr("src", "./images/osaka1.jpg");
                $(".tourlist .spot-list li:nth-child(2) img").attr("src", "./images/osaka2.jpg");
                $(".tourlist .spot-list li:nth-child(3) img").attr("src", "./images/osaka3.jpg");
                $(".tourlist .spot-list li:nth-child(1) img").attr("alt", "유니버설 스튜디오");
                $(".tourlist .spot-list li:nth-child(2) img").attr("alt", "가이유칸");
                $(".tourlist .spot-list li:nth-child(3) img").attr("alt", "오사카 성");
                $(".tourlist .spot-list li:nth-child(1) strong").text("유니버설 스튜디오");
                $(".tourlist .spot-list li:nth-child(2) strong").text("가이유칸");
                $(".tourlist .spot-list li:nth-child(3) strong").text("오사카 성");
                $(".tourlist .spot-list li:nth-child(1) .time p").text("09:00 ~ 20:05");
                $(".tourlist .spot-list li:nth-child(2) .time p").text("10:00 ~ 20:00");
                $(".tourlist .spot-list li:nth-child(3) .time p").text("09:00 ~ 17:00");
                $(".tourlist .spot-list li:nth-child(1) .review p").text("10,689건");
                $(".tourlist .spot-list li:nth-child(2) .review p").text("6,654건");
                $(".tourlist .spot-list li:nth-child(3) .review p").text("7,909건");
                $(".tourlist .background").css("backgroundImage", "url(./images/osaka.png)")
                $(".keyword-inner .keyword ul li:nth-child(3)").css("fontWeight", "600")
            } else if (up == 3) {
                $(".tourlist .spot-list li:nth-child(1) img").attr("src", "./images/newyork1.jpg");
                $(".tourlist .spot-list li:nth-child(2) img").attr("src", "./images/newyork2.jpg");
                $(".tourlist .spot-list li:nth-child(3) img").attr("src", "./images/newyork3.jpg");
                $(".tourlist .spot-list li:nth-child(1) img").attr("alt", "센트럴 파크");
                $(".tourlist .spot-list li:nth-child(2) img").attr("alt", "엠파이어 스테이트 빌딩");
                $(".tourlist .spot-list li:nth-child(3) img").attr("alt", "록펠러 센터 전망대");
                $(".tourlist .spot-list li:nth-child(1) strong").text("센트럴 파크");
                $(".tourlist .spot-list li:nth-child(2) strong").text("엠파이어 스테이트 빌딩");
                $(".tourlist .spot-list li:nth-child(3) strong").text("록펠러 센터 전망대");
                $(".tourlist .spot-list li:nth-child(1) .time p").text("06:00 ~ 01:00");
                $(".tourlist .spot-list li:nth-child(2) .time p").text("11:00 ~ 14:00");
                $(".tourlist .spot-list li:nth-child(3) .time p").text("08:00 ~ 24:00");
                $(".tourlist .spot-list li:nth-child(1) .review p").text("133,073건");
                $(".tourlist .spot-list li:nth-child(2) .review p").text("90,888건");
                $(".tourlist .spot-list li:nth-child(3) .review p").text("78,732건");
                $(".tourlist .background").css("backgroundImage", "url(./images/newyork.png)")
                $(".keyword-inner .keyword ul li:nth-child(4)").css("fontWeight", "600")
            } else if (up == 4) {
                $(".tourlist .spot-list li:nth-child(1) img").attr("src", "./images/kota1.jpg");
                $(".tourlist .spot-list li:nth-child(2) img").attr("src", "./images/kota2.jpg");
                $(".tourlist .spot-list li:nth-child(3) img").attr("src", "./images/kota3.jpg");
                $(".tourlist .spot-list li:nth-child(1) img").attr("alt", "리카스 모스크");
                $(".tourlist .spot-list li:nth-child(2) img").attr("alt", "사바 박물관");
                $(".tourlist .spot-list li:nth-child(3) img").attr("alt", "시그널 힐 전망대");
                $(".tourlist .spot-list li:nth-child(1) strong").text("리카스 모스크");
                $(".tourlist .spot-list li:nth-child(2) strong").text("사바 박물관");
                $(".tourlist .spot-list li:nth-child(3) strong").text("시그널 힐 전망대");
                $(".tourlist .spot-list li:nth-child(1) .time p").text("08:00 ~ 12:00");
                $(".tourlist .spot-list li:nth-child(2) .time p").text("09:00 ~ 17:00");
                $(".tourlist .spot-list li:nth-child(3) .time p").text("00:00 ~ 24:00");
                $(".tourlist .spot-list li:nth-child(1) .review p").text("1,170건");
                $(".tourlist .spot-list li:nth-child(2) .review p").text("639건");
                $(".tourlist .spot-list li:nth-child(3) .review p").text("597건");
                $(".tourlist .background").css("backgroundImage", "url(./images/kota.png)")
                $(".keyword-inner .keyword ul li:nth-child(5)").css("fontWeight", "600")
            }



        }, 10000);

    });

    //    --------------------------map--------------------------

    $(".trigger-map li:nth-child(1) img").click(function () {
        $(".trigger-map li img").css("opacity", "0");
        $(".trigger-map li img").css("transform", "translateY(0px)");
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(-20px)");
        $(".map .title-area ul").css("top", "0px");
        $(".map .map-info ul").css("display", "none");
        $(".hotel-list1").css("display", "block");


    });

    $(".trigger-map li:nth-child(2) img").click(function () {
        $(".trigger-map li img").css("opacity", "0");
        $(".trigger-map li img").css("transform", "translateY(0px)");
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(-20px)");
        $(".map .title-area ul").css("top", "-50px");
        $(".map .map-info ul").css("display", "none");
        $(".hotel-list2").css("display", "block");


    });
    $(".trigger-map li:nth-child(3) img").click(function () {
        $(".trigger-map li img").css("opacity", "0");
        $(".trigger-map li img").css("transform", "translateY(0px)");
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(-20px)");
        $(".map .title-area ul").css("top", "-100px");
        $(".map .map-info ul").css("display", "none");
        $(".hotel-list3").css("display", "block");


    });
    $(".trigger-map li:nth-child(4) img").click(function () {
        $(".trigger-map li img").css("opacity", "0");
        $(".trigger-map li img").css("transform", "translateY(0px)");
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(-20px)");
        $(".map .title-area ul").css("top", "-200px");
        $(".map .map-info ul").css("display", "none");
        $(".hotel-list4").css("display", "block");



    });
    $(".trigger-map li:nth-child(5) img").click(function () {
        $(".trigger-map li img").css("opacity", "0");
        $(".trigger-map li img").css("transform", "translateY(0px)");
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(-20px)");
        $(".map .title-area ul").css("top", "-150px");
        $(".map .map-info ul").css("display", "none");
        $(".hotel-list5").css("display", "block");


    });
    $(".trigger-map li:nth-child(6) img").click(function () {
        $(".trigger-map li img").css("opacity", "0");
        $(".trigger-map li img").css("transform", "translateY(0px)");
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(-20px)");
        $(".map .title-area ul").css("top", "-250px");
        $(".map .map-info ul").css("display", "none");
        $(".hotel-list6").css("display", "block");


    });

    //    --------------------------notice--------------------------

    $(function () {

        var up3 = 0

        setInterval(function () {
            if (up3 < 4) {
                up3++;
            } else {
                up3 = 0;
            }

            var up4 = up3 * -30 + "px";

            $(".notice-list ul").animate({
                top: up4
            });
        }, 5000);

    });

    $(".util-area li:nth-child(1)").click(function () {

        $("body,html").animate({
            scrollTop: 0
        }, 1000)
    });

});
