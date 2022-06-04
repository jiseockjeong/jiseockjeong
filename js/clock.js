let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    let hh1 = 'rotateZ(' + hh + 'deg)'
    $("#hr").css("transform", hh1);

    let mm1 = 'rotateZ(' + mm + 'deg)'
    $("#mn").css("transform", mm1);

    let ss1 = 'rotateZ(' + ss + 'deg)'
    $("#sc").css("transform", ss1);

    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM"

    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
});