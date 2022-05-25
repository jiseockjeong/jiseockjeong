$(document).ready(function(){
    $(".font").addClass("on");
    $(".font2").addClass("on");
    setInterval(function(){
    $(".font").removeClass("on");
    $(".font2").removeClass("on");
    setTimeout(function(){

        $(".font").addClass("on");
        $(".font2").addClass("on");
    },100);
    },10000);

    setTimeout(function(){

        $(".font").find("img").attr("src","images/winter.png");
        $(".font2").find("img").attr("src","images/winter.png");
        $(".back >img").attr("src","images/winter3.png");
        $(".banner").css("background","#5534A5");
        $(".banner ul").css("display","none");
        $(".winter").css("display","flex");
    },10000);

    setTimeout(function(){

        $(".font").find("img").attr("src","images/ning.png");
        $(".font2").find("img").attr("src","images/ning.png");
        $(".back >img").attr("src","images/ning3.png");
        $(".banner").css("background","#4B7BE5");
        $(".banner ul").css("display","none");
        $(".ningning").css("display","flex");
    },20000);

    setTimeout(function(){

        $(".font").find("img").attr("src","images/giselle.png");
        $(".font2").find("img").attr("src","images/giselle.png");
        $(".back >img").attr("src","images/giselle3.png");
        $(".banner").css("background","#6FDFDF");
        $(".banner ul").css("display","none");
        $(".giselle").css("display","flex");
    },30000);

    setTimeout(function(){

        $(".font").find("img").attr("src","images/karina.png");
        $(".font2").find("img").attr("src","images/karina.png");
        $(".back >img").attr("src","images/karina3.png");
        $(".banner").css("background","#A341FF");
        $(".banner ul").css("display","none");
        $(".karina").css("display","flex");
    },40000);
    setInterval(function(){
        
    setTimeout(function(){

        $(".font").find("img").attr("src","images/winter.png");
        $(".font2").find("img").attr("src","images/winter.png");
        $(".back >img").attr("src","images/winter3.png");
        $(".banner").css("background","#5534A5");
        $(".banner ul").css("display","none");
        $(".winter").css("display","flex");
    },10000);

    setTimeout(function(){

        $(".font").find("img").attr("src","images/ning.png");
        $(".font2").find("img").attr("src","images/ning.png");
        $(".back >img").attr("src","images/ning3.png");
        $(".banner").css("background","#4B7BE5");
        $(".banner ul").css("display","none");
        $(".ningning").css("display","flex");
    },20000);

    setTimeout(function(){

        $(".font").find("img").attr("src","images/giselle.png");
        $(".font2").find("img").attr("src","images/giselle.png");
        $(".back >img").attr("src","images/giselle3.png");
        $(".banner").css("background","#6FDFDF");
        $(".banner ul").css("display","none");
        $(".giselle").css("display","flex");
    },30000);

    setTimeout(function(){

        $(".font").find("img").attr("src","images/karina.png");
        $(".font2").find("img").attr("src","images/karina.png");
        $(".back >img").attr("src","images/karina3.png");
        $(".banner").css("background","#A341FF");
        $(".banner ul").css("display","none");
        $(".karina").css("display","flex");
    },40000);

    },40000);

    $(".ranking .inner >ul li").click(function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });

    $(".ranking .inner >ul li:nth-child(1)").click(function(){
        $(".list ul").css("display","none");
        $(".cap").css("display","flex");
    });

    $(".ranking .inner >ul li:nth-child(2)").click(function(){
        $(".list ul").css("display","none");
        $(".shoes").css("display","flex");
    });

    $(".ranking .inner >ul li:nth-child(3)").click(function(){
        $(".list ul").css("display","none");
        $(".apparel").css("display","flex");
    });

    $(".ranking .inner >ul li:nth-child(4)").click(function(){
        $(".list ul").css("display","none");
        $(".bag").css("display","flex");
    });

    $(".ranking .inner >ul li:nth-child(5)").click(function(){
        $(".list ul").css("display","none");
        $(".kid").css("display","flex");
    });

    var check = true;

    $(".top-util img").click(function(){

        if(check){
            $(this).attr("src","images/heart2.png");
            check = false;
        }else{
            $(this).attr("src","images/heart.png");
            check = true;
        }

        
    });

    $(".util ul li:nth-child(1)").click(function(){
        $(".login").fadeIn();
    });

    $(".util ul li:nth-child(2)").click(function(){
        $(".login").fadeIn();
    });

    $(".util ul li:nth-child(3)").click(function(){
        $(".search").fadeIn();
    });

    $(".login .cancel").click(function(){
        $(".login").fadeOut();
    });

    $(".search .cancel").click(function(){
        $(".search").fadeOut();
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $(".top-btn").fadeIn("fast");
        } else {
            $(".top-btn").fadeOut("fast");
        }

    });

    $(".top-btn").click(function () {

        $("body,html").animate({
            scrollTop: 0
        }, 200)
    });

});