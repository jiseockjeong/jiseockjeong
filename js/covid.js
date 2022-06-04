const dt = new Date();
const year = dt.getFullYear();
const month = ('0' + (dt.getMonth() + 1)).slice(-2);
const day = ('0' + dt.getDate()).slice(-2);

const dateString = year + month + day;

const covidDay = dateString - 1;
const covidDay2 = dateString - 2;


let xhttp, xmlDoc, cDecidetxt, cDecide, cDeath, cDeathtxt;
xhttp = new XMLHttpRequest ();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this .status == 200){

        document.getElementById("cDay").innerHTML = year+'년'+month+"월"+day+"일";
        //날짜

        xmlDoc = this.responseXML;
        cDecidetxt ='';
        cDecide = xmlDoc.getElementsByTagName("decideCnt");
        console.log(cDecide);

        cDecidetxt = cDecide[0].childNodes[0].nodeValue;
        document.getElementById("cDecide").innerHTML = cDecidetxt+' 명';

        //확진자

        xmlDoc = this.responseXML;
        cDeathtxt ='';
        cDeath = xmlDoc.getElementsByTagName("deathCnt");
        console.log(cDeath);

        cDeathtxt = cDeath[0].childNodes[0].nodeValue;
        document.getElementById("cDeath").innerHTML = cDeathtxt+' 명';

        //사망자

    

    };
}

const coivdURL ='http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=Z0sSd0y9Rmr3zLRPQwTWUHHhHgsgbuvh5cFhwwCxXGdnDYuhnk3QwPzanMGvgEdez0Rqi8Wogpeuf1sjvrOybA%3D%3D' + '&startCreateDt=' + covidDay2 + '&endCreateDt='+covidDay;

xhttp.open("GET",coivdURL,true);
xhttp.send();

