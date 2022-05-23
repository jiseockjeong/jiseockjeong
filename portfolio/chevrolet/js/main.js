$(document).ready(function () {
    var check = true;
    $("#section0 .car-button").click(function () {

        if (check) {
            $("#section0 .car-list").css("overflow", "visible");
            $("#section0 .car-button").css("transform", "rotate(-180deg)")
            check = false;
        } else {

            $("#section0 .car-list").css("overflow", "hidden");
            $("#section0 .car-button").css("transform", "rotate(0deg)")
            check = true;
        }

    });

});

//-----------자동차메뉴 열기--------

$(function () {
    $(".car-list li:nth-child(1)").click(function () {
        $(".car-list ul").css("top", "0px");
    });
    $(".car-list li:nth-child(2)").click(function () {
        $(".car-list ul").css("top", "-30px");
    });
    $(".car-list li:nth-child(3)").click(function () {
        $(".car-list ul").css("top", "-60px");
    });
    $(".car-list li:nth-child(4)").click(function () {
        $(".car-list ul").css("top", "-90px");
    });
    $(".car-list li:nth-child(5)").click(function () {
        $(".car-list ul").css("top", "-120px");
    });
    $(".car-list li:nth-child(6)").click(function () {
        $(".car-list ul").css("top", "-150px");
    });

    //-----------자동차메뉴 전환--------

    $(".list li").click(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });


});

$(function () {
    var slide1 = 01;
    $("#section0 .remote .right").click(function () {
        if (slide1 < 04) {
            slide1++;
        } else {
            slide1 = 01;
        }
        $("#section0 .remote strong").text(slide1);
        if (slide1 == 1) {
            $("#section0 .list li:nth-child(1)").addClass("on");
            $("#section0 .list li:nth-child(1)").siblings().removeClass("on");
            $("#section0 .background").css("background", "url(./images/back1.png)")
            $("#section0 .background").css("backgroundSize", "cover")
            $("#section0 .left-section h2").text("THE NEW CAMARO SS")
            $("#section0 .left-section >span").text("아메리칸 레이싱 머신")
        } else if (slide1 == 2) {
            $("#section0 .list li:nth-child(2)").addClass("on");
            $("#section0 .list li:nth-child(2)").siblings().removeClass("on");
            $("#section0 .background").css("background", "url(./images/back5.png)")
            $("#section0 .background").css("backgroundSize", "cover")
            $("#section0 .left-section h2").text("THE CORVETTE C8")
            $("#section0 .left-section >span").text("쉐보레 스포츠카의 자존심")
        } else if (slide1 == 3) {
            $("#section0 .list li:nth-child(3)").addClass("on");
            $("#section0 .list li:nth-child(3)").siblings().removeClass("on");
            $("#section0 .background").css("background", "url(./images/back3.png)")
            $("#section0 .background").css("backgroundSize", "cover")
            $("#section0 .left-section h2").text("THE COLORADO S10")
            $("#section0 .left-section >span").text("괴물같은 파워엔진")
        } else if (slide1 == 4) {
            $("#section0 .list li:nth-child(4)").addClass("on");
            $("#section0 .list li:nth-child(4)").siblings().removeClass("on");
            $("#section0 .background").css("background", "url(./images/back4.png)")
            $("#section0 .background").css("backgroundSize", "cover")
            $("#section0 .left-section h2").text("THE NEW SILVERADO 2022")
            $("#section0 .left-section >span").text("전기 픽업트럭의 새로운 패러다임")
        }
    });
    $("#section0 .remote .left").click(function () {
        if (slide1 > 01) {
            slide1--;
        } else {
            slide1 = 04;
        }
        $("#section0 .remote strong").text(slide1);
        if (slide1 == 1) {
            $("#section0 .list li:nth-child(1)").addClass("on");
            $("#section0 .list li:nth-child(1)").siblings().removeClass("on");
            $("#section0 .background").css("background", "url(./images/back1.png)")
            $("#section0 .background").css("backgroundSize", "cover")
            $("#section0 .left-section h2").text("THE NEW CAMARO SS")
            $("#section0 .left-section >span").text("아메리칸 레이싱 머신")
        } else if (slide1 == 2) {
            $("#section0 .list li:nth-child(2)").addClass("on");
            $("#section0 .list li:nth-child(2)").siblings().removeClass("on");
            $("#section0 .background").css("background", "url(./images/back5.png)")
            $("#section0 .background").css("backgroundSize", "cover")
            $("#section0 .left-section h2").text("THE CORVETTE C8")
            $("#section0 .left-section >span").text("쉐보레 스포츠카의 자존심")
        } else if (slide1 == 3) {
            $("#section0 .list li:nth-child(3)").addClass("on");
            $("#section0 .list li:nth-child(3)").siblings().removeClass("on");
            $("#section0 .background").css("background", "url(./images/back3.png)")
            $("#section0 .background").css("backgroundSize", "cover")
            $("#section0 .left-section h2").text("THE COLORADO S10")
            $("#section0 .left-section >span").text("괴물같은 파워엔진")
        } else if (slide1 == 4) {
            $("#section0 .list li:nth-child(4)").addClass("on");
            $("#section0 .list li:nth-child(4)").siblings().removeClass("on");
            $("#section0 .background").css("background", "url(./images/back4.png)")
            $("#section0 .background").css("backgroundSize", "cover")
            $("#section0 .left-section h2").text("THE NEW SILVERADO 2022")
            $("#section0 .left-section >span").text("전기 픽업트럭의 새로운 패러다임")
        }
    });
    $("#section0 .list li:nth-child(1)").click(function () {
        slide1 = 01;
        $("#section0 .remote strong").text(slide1);
        $("#section0 .background").css("background", "url(./images/back1.png)")
        $("#section0 .background").css("backgroundSize", "cover")
        $("#section0 .left-section h2").text("THE NEW CAMARO SS")
        $("#section0 .left-section >span").text("아메리칸 레이싱 머신")
    });
    $("#section0 .list li:nth-child(2)").click(function () {
        slide1 = 02;
        $("#section0 .remote strong").text(slide1);
        $("#section0 .background").css("background", "url(./images/back5.png)")
        $("#section0 .background").css("backgroundSize", "cover")
        $("#section0 .left-section h2").text("THE CORVETTE C8")
        $("#section0 .left-section >span").text("쉐보레 스포츠카의 자존심")
    });
    $("#section0 .list li:nth-child(3)").click(function () {
        slide1 = 03;
        $("#section0 .remote strong").text(slide1);
        $("#section0 .background").css("background", "url(./images/back3.png)")
        $("#section0 .background").css("backgroundSize", "cover")
        $("#section0 .left-section h2").text("THE COLORADO S10")
        $("#section0 .left-section >span").text("괴물같은 파워엔진")

    });
    $("#section0 .list li:nth-child(4)").click(function () {
        slide1 = 04;
        $("#section0 .remote strong").text(slide1);
        $("#section0 .background").css("background", "url(./images/back4.png)")
        $("#section0 .background").css("backgroundSize", "cover")
        $("#section0 .left-section h2").text("THE NEW SILVERADO 2022")
        $("#section0 .left-section >span").text("전기 픽업트럭의 새로운 패러다임")
    });
});

//-----------#section0--------

$(function () {
    var check1 = true;
    $("#section1 .car-button").click(function () {

        if (check1) {
            $("#section1 .car-button").css("transform", "rotate(-180deg)")
            $(".car-list ul").css("top", "0px");
            setTimeout(function () {
                $("#section1 .car-list").css("overflow", "visible");
            }, 300);
            check1 = false;
        } else {

            $("#section1 .car-list").css("overflow", "hidden");
            $("#section1 .car-button").css("transform", "rotate(0deg)")
            check1 = true;
        }

    });

    $(".car-list li").click(function () {
        $("#section1 .car-list").css("overflow", "hidden");
        $("#section1 .car-button").css("transform", "rotate(0deg)")
    });

    $(".car-list li:nth-child(1)").click(function () {
        $(".car-list ul").css("top", "0px");

    });
    $(".car-list li:nth-child(2)").click(function () {
        $(".car-list ul").css("top", "-30px");
    });
    $(".car-list li:nth-child(3)").click(function () {
        $(".car-list ul").css("top", "-60px");
    });
    $(".car-list li:nth-child(4)").click(function () {
        $(".car-list ul").css("top", "-90px");
    });
    $(".car-list li:nth-child(5)").click(function () {
        $(".car-list ul").css("top", "-120px");
    });
    $(".car-list li:nth-child(6)").click(function () {
        $(".car-list ul").css("top", "-150px");
    });


});

$(function () {

    var slide2 = 01;
    $("#section1 .remote .right").click(function () {
        if (slide2 < 04) {
            slide2++;
        } else {
            slide2 = 01;
        }
        $("#section1 .remote strong").text(slide2);

        if (slide2 == 1) {
            $(".car").css("display", "none");
            $(".car1").css("display", "block");
        } else if (slide2 == 2) {
            $(".car").css("display", "none");
            $(".car2").css("display", "block");
        } else if (slide2 == 3) {
            $(".car").css("display", "none");
            $(".car3").css("display", "block");
        } else if (slide2 == 4) {
            $(".car").css("display", "none");
            $(".car4").css("display", "block");
        }
    });
    $("#section1 .remote .left").click(function () {
        if (slide2 > 01) {
            slide2--;
        } else {
            slide2 = 04;
        }
        $("#section1 .remote strong").text(slide2);
        if (slide2 == 1) {
            $(".car").css("display", "none");
            $(".car1").css("display", "block");
        } else if (slide2 == 2) {
            $(".car").css("display", "none");
            $(".car2").css("display", "block");
        } else if (slide2 == 3) {
            $(".car").css("display", "none");
            $(".car3").css("display", "block");
        } else if (slide2 == 4) {
            $(".car").css("display", "none");
            $(".car4").css("display", "block");
        }
    });
});

$(function () {
    $("#section1 .list li:nth-child(1)").click(function () {
        $(".pro").css("display", "none");
        $(".list1").css("display", "block");
        $(".top-section h2").text("트림");
        $(".top-section >span").text("원하시는 차량을 선택해 주세요.");
    });
    $("#section1 .list li:nth-child(2)").click(function () {
        $(".pro").css("display", "none");
        $(".list2").css("display", "block");
        $(".top-section h2").text("외부");
        $(".top-section >span").text("원하시는 색상을 선택해 주세요.");
    });
    $("#section1 .list li:nth-child(3)").click(function () {
        $(".pro").css("display", "none");
        $(".list3").css("display", "block");
        $(".top-section h2").text("내부");
        $(".top-section >span").text("원하시는 색상을 선택해 주세요.");
    });
    $("#section1 .list li:nth-child(4)").click(function () {
        $(".pro").css("display", "none");
        $(".list4").css("display", "block");
        $(".top-section h2").text("상세 내역");
        $(".top-section >span").text("정보를 확인해 주세요.");
    });
    $("#section1 .list1 .next").click(function () {
        $(".pro").css("display", "none");
        $(".list2").css("display", "block");
        $("#section1 .list li:nth-child(2)").addClass("on");
        $("#section1 .list li:nth-child(2)").siblings().removeClass("on");
        $(".top-section h2").text("외부");
        $(".top-section >span").text("원하시는 색상을 선택해 주세요.");
    });

    $("#section1 .car1 li:first-child").click(function () {
        $(".pro").css("display", "none");
        $(".list2").css("display", "block");
        $("#section1 .list li:nth-child(2)").addClass("on");
        $("#section1 .list li:nth-child(2)").siblings().removeClass("on");
        $(".top-section h2").text("외부");
        $(".top-section >span").text("원하시는 색상을 선택해 주세요.");
    });

    $("#section1 .list2 .next").click(function () {
        $(".pro").css("display", "none");
        $(".list3").css("display", "block");
        $("#section1 .list li:nth-child(3)").addClass("on");
        $("#section1 .list li:nth-child(3)").siblings().removeClass("on");
        $(".top-section h2").text("내부");
        $(".top-section >span").text("원하시는 색상을 선택해 주세요.");
    });
    $("#section1 .list3 .next").click(function () {
        $(".pro").css("display", "none");
        $(".list4").css("display", "block");
        $("#section1 .list li:nth-child(4)").addClass("on");
        $("#section1 .list li:nth-child(4)").siblings().removeClass("on");
        $(".top-section h2").text("상세 내역");
        $(".top-section >span").text("정보를 확인해 주세요.");
    });
    $("#section1 .list2 .prev").click(function () {
        $(".pro").css("display", "none");
        $(".list1").css("display", "block");
        $("#section1 .list li:nth-child(1)").addClass("on");
        $("#section1 .list li:nth-child(1)").siblings().removeClass("on");
        $(".top-section h2").text("트림");
        $(".top-section >span").text("원하시는 차량을 선택해 주세요.");
    });
    $("#section1 .list3 .prev").click(function () {
        $(".pro").css("display", "none");
        $(".list2").css("display", "block");
        $("#section1 .list li:nth-child(2)").addClass("on");
        $("#section1 .list li:nth-child(2)").siblings().removeClass("on");
        $(".top-section h2").text("외부");
        $(".top-section >span").text("원하시는 색상을 선택해 주세요.");
    });
});

$(function () {
    $(".car-color ul li").click(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
    $(".list2 .car-color ul li:nth-child(1)").click(function () {
        $(".list2 .car-color img").attr("src", "./images/camaro.png");
        $(".list4 .color span").text("플레이밍 레드");
        $(".list4 img").attr("src", "./images/camaro.png");
    });
    $(".list2 .car-color ul li:nth-child(2)").click(function () {
        $(".list2 .car-color img").attr("src", "./images/camaro3.png");
        $(".list4 .color span").text("다크 쉐도우 그레이");
        $(".list4 img").attr("src", "./images/camaro3.png");
    });
    $(".list2 .car-color ul li:nth-child(3)").click(function () {
        $(".list2 .car-color img").attr("src", "./images/camaro4.png");
        $(".list4 .color span").text("턱시도 블랙");
        $(".list4 img").attr("src", "./images/camaro4.png");
    });

    $(".list3 .car-color ul li:nth-child(1)").click(function () {
        $(".list3 .img1 img").attr("src", "./images/in.jpg");
        $(".list3 .img2 img").attr("src", "./images/in1.jpg");
        $(".list4 .in span").text("스콜피온 레드 인테리어");
    });
    $(".list3 .car-color ul li:nth-child(2)").click(function () {
        $(".list3 .img1 img").attr("src", "./images/in2.jpg");
        $(".list3 .img2 img").attr("src", "./images/in3.jpg");
        $(".list4 .in span").text("젯 블랙 인테리어");
    });
});
