$(document).ready(function () {
    $(function () {
        var slide = 0;


        $(".left").click(function () {
            if (slide > 0) {
                slide--;
            } else {
                slide = 2;
            }
            if (slide == 0) {
                $(".banner-area >ul li:nth-child(1)").css("display", "block");
                $(".banner-area >ul li:nth-child(2)").css("display", "none");
                $(".banner-area >ul li:nth-child(3)").css("display", "none");
                $(".banner").css("background", "#FFEEE0");
                $(".banner .list li").css("background", "#ccc");
                $(".banner .list li:first-child").css("background", "#222");
            } else if (slide == 1) {
                $(".banner-area >ul li:nth-child(1)").css("display", "none");
                $(".banner-area >ul li:nth-child(2)").css("display", "block");
                $(".banner-area >ul li:nth-child(3)").css("display", "none");
                $(".banner").css("background", "#FFF2E9");
                $(".banner .list li").css("background", "#ccc");
                $(".banner .list li:nth-child(2)").css("background", "#222");
            } else if (slide == 2) {
                $(".banner-area >ul li:nth-child(1)").css("display", "none");
                $(".banner-area >ul li:nth-child(2)").css("display", "none");
                $(".banner-area >ul li:nth-child(3)").css("display", "block");
                $(".banner").css("background", "#F9F4DE");
                $(".banner .list li").css("background", "#ccc");
                $(".banner .list li:nth-child(3)").css("background", "#222");
            }
        });

        $(".right").click(function () {
            if (slide < 2) {
                slide++;
            } else {
                slide = 0;
            }
            if (slide == 0) {
                $(".banner-area >ul li:nth-child(1)").css("display", "block");
                $(".banner-area >ul li:nth-child(2)").css("display", "none");
                $(".banner-area >ul li:nth-child(3)").css("display", "none");
                $(".banner").css("background", "#FFEEE0");
                $(".banner .list li").css("background", "#ccc");
                $(".banner .list li:first-child").css("background", "#222");
            } else if (slide == 1) {
                $(".banner-area >ul li:nth-child(1)").css("display", "none");
                $(".banner-area >ul li:nth-child(2)").css("display", "block");
                $(".banner-area >ul li:nth-child(3)").css("display", "none");
                $(".banner").css("background", "#FFF2E9");
                $(".banner .list li").css("background", "#ccc");
                $(".banner .list li:nth-child(2)").css("background", "#222");
            } else if (slide == 2) {
                $(".banner-area >ul li:nth-child(1)").css("display", "none");
                $(".banner-area >ul li:nth-child(2)").css("display", "none");
                $(".banner-area >ul li:nth-child(3)").css("display", "block");
                $(".banner").css("background", "#F9F4DE");
                $(".banner .list li").css("background", "#ccc");
                $(".banner .list li:nth-child(3)").css("background", "#222");
            }
        });


    });

    $(".img-area ul li:nth-child(1)").click(function () {
        $(".magazine-area .main-img img").attr("src", "images/magazine1.png");
        $(".magazine-area .text-area h2").text("동남아의 푸른 바다를 담은 봄베이 사파이어");
        $(".background").css("background", "#007EAF");
    });

    $(".img-area ul li:nth-child(2)").click(function () {
        $(".magazine-area .main-img img").attr("src", "images/magazine2.png");
        $(".magazine-area .text-area h2").text("입문하기 좋은 쉐리 위스키 맥켈란 시리즈");
        $(".background").css("background", "#8A3303");
    });

    $(".img-area ul li:nth-child(3)").click(function () {
        $(".magazine-area .main-img img").attr("src", "images/magazine3.png");
        $(".magazine-area .text-area h2").text("오늘밤을 뜨겁게 만들 아그와");
        $(".background").css("background", "#3EA727");
    });

    $(".img-area ul li:nth-child(4)").click(function () {
        $(".magazine-area .main-img img").attr("src", "images/magazine4.png");
        $(".magazine-area .text-area h2").text("놀 줄 아는 놈들의 술 힙노틱");
        $(".background").css("background", "#0090A7");
    });

    $(".best .title-area ul li").click(function () {
        $(this).find("a").css("color", "#222");
        $(this).find("a").css("fontWeight", "bold");
        $(this).siblings().find("a").css("color", "#ccc");
        $(this).siblings().find("a").css("fontWeight", "400");
    });
    
     $(function() {
           
            
            $(window).scroll(function(){
               
                if($(this).scrollTop()>200){
                   $(".m-top").fadeIn("fast");
                   }
                else{
                   $(".m-top").fadeOut("fast");
                   }
                
            });
            
            $(".m-top").click(function(){
                
                $("body,html").animate({
                    scrollTop:0
                },200)
            });
            
            
        });


    


});
