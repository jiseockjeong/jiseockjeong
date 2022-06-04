let slideh = 0;
        $(".home .right-remote").click(function () {
            if (slideh < 1) {
                slideh++;
            } else {
                slideh = 0;
            }
            if (slideh == 0) {
                $(".home .pages").animate({
                    left: "0px"
                }, 400);
                $(".navi").text("1");
            } else if (slideh == 1) {
                $(".home .pages").animate({
                    left: "-1000px"
                }, 400);
                $(".navi").text("2");
            } else if (slideh == 2) {

            }
        });

        $(".home .left-remote").click(function () {
            if (slideh > 0) {
                slideh--;
            } else {
                slideh = 1;
            }
            if (slideh == 0) {
                $(".home .pages").animate({
                    left: "0px"
                }, 400);
                $(".navi").text("1");
            } else if (slideh == 1) {
                $(".home .pages").animate({
                    left: "-1000px"
                }, 400);
                $(".navi").text("2");
            } else if (slideh == 2) {

            }
        });

        let slidew = 0;
        $(".works .right-remote").click(function () {
            if (slidew < 3) {
                slidew++;
            } else {
                slidew = 0;
            }
            if (slidew == 0) {
                $(".works .pages").animate({
                    left: "0px"
                }, 400);
                $(".navi").text("1");
            } else if (slidew == 1) {
                $(".works .pages").animate({
                    left: "-1000px"
                }, 400);
                $(".navi").text("2");
            } else if (slidew == 2) {
                $(".works .pages").animate({
                    left: "-2000px"
                }, 400);
                $(".navi").text("3");
            } else if (slidew == 3) {
                $(".works .pages").animate({
                    left: "-3000px"
                }, 400);
                $(".navi").text("4");
            }
        });

        $(".works .left-remote").click(function () {
            if (slidew > 0) {
                slidew--;
            } else {
                slidew = 3;
            }
            if (slidew == 0) {
                $(".works .pages").animate({
                    left: "0px"
                }, 400);
                $(".navi").text("1");
            } else if (slidew == 1) {
                $(".works .pages").animate({
                    left: "-1000px"
                }, 400);
                $(".navi").text("2");
            } else if (slidew == 2) {
                $(".works .pages").animate({
                    left: "-2000px"
                }, 400);
                $(".navi").text("3");
            } else if (slidew == 3) {
                $(".works .pages").animate({
                    left: "-3000px"
                }, 400);
                $(".navi").text("4");
            }
        });

        let slidea = 0;
        $(".me .right-remote").click(function () {
            if (slidea < 1) {
                slidea++;
            } else {
                slidea = 0;
            }
            if (slidea == 0) {
                $(".me .pages").animate({
                    left: "0px"
                }, 400);
                $(".navi").text("1");
            } else if (slidea == 1) {
                $(".me .pages").animate({
                    left: "-1000px"
                }, 400);
                $(".navi").text("2");
            } else if (slidea == 2) {
                $(".me .pages").animate({
                    left: "-2000px"
                }, 400);
                $(".navi").text("3");
            } else if (slidea == 3) {
                $(".me .pages").animate({
                    left: "-3000px"
                }, 400);
                $(".navi").text("4");
            }
        });

        $(".me .left-remote").click(function () {
            if (slidea > 0) {
                slidea--;
            } else {
                slidea = 1;
            }
            if (slidea == 0) {
                $(".me .pages").animate({
                    left: "0px"
                }, 400);
                $(".navi").text("1");
            } else if (slidea == 1) {
                $(".me .pages").animate({
                    left: "-1000px"
                }, 400);
                $(".navi").text("2");
            } else if (slidea == 2) {
                $(".me .pages").animate({
                    left: "-2000px"
                }, 400);
                $(".navi").text("3");
            } else if (slidea == 3) {
                $(".me .pages").animate({
                    left: "-3000px"
                }, 400);
                $(".navi").text("4");
            }
        });