let scren = document.getElementById('screen');

function demo(x){
    scren.value = scren.value + x;
}
function demo1(){
    scren.value = ' ';
}
function equl(){
    scren.value = eval(scren.value);
}
function dlt(){
    scren.value = scren.value.slice(0,-1);
}