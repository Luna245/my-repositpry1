

//点击清空输入栏
let input = document.getElementsByTagName("input");
function empty(target) {
    let input = target.value = "";

}
function false_dump(){
var dump_false =document.getElementsByTagName("a");
for(let i=0;i<dump_false.length;i++)
{
dump_false[i].setAttribute("onclick","return false");
}
}
addLoadEvent(false_dump);


//登录跳转主页面
function jump(){
    window.location.href = "../../主页面/html/主页面.html"
}
var log_in = document.getElementById("login");
