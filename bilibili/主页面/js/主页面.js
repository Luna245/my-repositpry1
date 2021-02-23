onload=function(){
    var arr = document.getElementsByClassName("slide");
    for(var i=0;i<arr.length;i++){
        arr[i].style.left = i*550+"px";
    }
}
function LeftMove(){
    var arr = document.getElementsByClassName("slide");
    for(var i=0;i<arr.length;i++){
        var left = parseFloat(arr[i].style.left);
        left-=5;
        var width = 550;
        if(left<=-width){
            left=(arr.length-1)*width;
            clearInterval(moveId);
        }
        arr[i].style.left = left+"px";
    }
}
function divInterval(){
    moveId=setInterval(LeftMove,2);
}


timeId=setInterval(divInterval,4000);

function stop(){
    clearInterval(timeId);
}
function start(){
    clearInterval(timeId);
    timeId=setInterval(divInterval,4000);
}
onblur = function(){
    stop();
}
onfocus = function(){
    start();
}

function jump() {
    window.location.href ="../../视频详情页/html/play video.html"
}
var broad_cast= document.getElementsByTagName("img");
for(var i = 1;i<broad_cast.length ;i++)
broad_cast[i].setAttribute("onclick","jump()");
