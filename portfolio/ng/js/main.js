$(function() {
            $('#main_slide').slick({
                slide: 'div',
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 100,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnFocus: false,
                pauseOnHover: false,
                prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
                nextArrow: "<button type='button' class='slick-next'>Next</button>",
            });

            $(".animal").mouseover(function() {
                $(".animal2").css("transform", "scale(1.1)");
            });

            $(".animal").mouseout(function() {
                $(".animal2").css("transform", "scale(1.0)");
            });

            $(".model").mouseover(function() {
                $(".model2").css("transform", "scale(1.1)");
            });

            $(".model").mouseout(function() {
                $(".model2").css("transform", "scale(1.0)");
            });
            $(".place").mouseover(function() {
                $(".place2").css("transform", "scale(1.1)");
            });

            $(".place").mouseout(function() {
                $(".place2").css("transform", "scale(1.0)");
            });

            $(".camera").mouseover(function() {
                $(".camera2").css("transform", "scale(1.1)");
            });

            $(".camera").mouseout(function() {
                $(".camera2").css("transform", "scale(1.0)");
            });
            //------------------------컨트2---------------------------
            $("#tab02").click(function() {
                $(".pick").css("transform", "translateX(-100%)");
            });
            $("#tab01").click(function() {
                $(".pick").css("transform", "translateX(-200%)");
            });
            $("#tab03").click(function() {
                $(".pick").css("transform", "translateX(0%)");
            });
            $("#tab04").click(function() {
                $(".pick").css("transform", "translateX(100%)");
            });

            //            -------------------컨트3------------------------

            $(".news1").mouseover(function() {
                $("#section4 #slide1").stop().css("background", "url(./images/news1.jpg) no-repeat center/cover");
            });

            $(".news2").mouseover(function() {
                $("#section4 #slide1").stop().css("background", "url(./images/news2.jpg) no-repeat center/cover");
            });

            $(".news3").mouseover(function() {
                $("#section4 #slide1").stop().css("background", "url(./images/news3.jpg) no-repeat center/cover");
            });

            $(".news4").mouseover(function() {
                $("#section4 #slide2").stop().css("background", "url(./images/news4.jpg) no-repeat center/cover");
            });

            $(".news5").mouseover(function() {
                $("#section4 #slide2").stop().css("background", "url(./images/news5.jpg) no-repeat center/cover");
            });
            $(".news6").mouseover(function() {
                $("#section4 #slide2").stop().css("background", "url(./images/news6.jpg) no-repeat center/cover");
            });

            $(".news7").mouseover(function() {
                $("#section4 #slide3").stop().css("background", "url(./images/news7.jpg) no-repeat center/cover");
            });

            $(".news8").mouseover(function() {
                $("#section4 #slide3").stop().css("background", "url(./images/news8.jpg) no-repeat center/cover");
            });
            $(".news9").mouseover(function() {
                $("#section4 #slide3").stop().css("background", "url(./images/news9.jpg) no-repeat center/cover");
            });

            $(".news").mouseover(function() {
                $(this).stop().animate({
                    "top": "-10px"
                }, "slow");
            });

            $(".news").mouseout(function() {
                $(this).stop().animate({
                    "top": "0px"
                }, "slow");
            });

            $(".play-btn").mouseover(function() {
                $(".play-btn").attr("src", "./images/yplay-btn.png");
            });

            $(".play-btn").mouseout(function() {
                $(".play-btn").attr("src", "./images/play-btn.png");
            });


        });
